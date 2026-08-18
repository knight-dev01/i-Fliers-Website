import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Request School Prospectus API Endpoint (Sends email via cPanel SMTP)
  app.post("/api/request-prospectus", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email || typeof email !== "string" || !email.includes("@")) {
        return res.status(400).json({ success: false, error: "Valid email address is required." });
      }

      const host = process.env.SMTP_HOST || "mail.iflierintlschl.org";
      const port = parseInt(process.env.SMTP_PORT || "465", 10);
      const user = process.env.SMTP_USER || "info@iflierintlschl.org";
      const pass = process.env.SMTP_PASS || "";
      const fromEmail = process.env.SMTP_FROM || "info@iflierintlschl.org";

      // Create Nodemailer Transporter using cPanel SMTP settings
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // true for 465, false for other ports
        auth: {
          user,
          pass,
        },
      });

      // Email content sent to the parent/guardian
      const mailOptionsToUser = {
        from: `"i-Flier International School" <${fromEmail}>`,
        to: email,
        subject: "i-Flier International School Prospectus & Information Package",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="text-align: center; border-bottom: 2px solid #1e3a8a; padding-bottom: 15px; margin-bottom: 20px;">
              <h2 style="color: #1e3a8a; margin: 0;">i-Flier International School, Ibadan</h2>
              <p style="color: #d97706; font-size: 14px; margin: 5px 0 0 0; font-weight: bold;">"Inspired By Excellence & Success"</p>
            </div>
            
            <p style="color: #334155; font-size: 15px;">Dear Parent / Guardian,</p>
            
            <p style="color: #334155; font-size: 15px; line-height: 1.6;">
              Thank you for your interest in <strong>i-Flier International School</strong>. We are delighted to share our comprehensive school prospectus package with you.
            </p>

            <div style="background-color: #f8fafc; border-left: 4px solid #d97706; padding: 15px; margin: 20px 0; border-radius: 4px;">
              <h4 style="margin: 0 0 8px 0; color: #1e3a8a;">Package Highlights:</h4>
              <ul style="margin: 0; padding-left: 20px; color: #475569; font-size: 14px; line-height: 1.5;">
                <li>Nursery, Primary, JSS, SSS & Tutorial Academic Curricula</li>
                <li>Fee schedules and payment guidelines</li>
                <li>Boarding facilities and state-of-the-art CBT/Science labs</li>
                <li>Admissions eligibility and entry assessment process</li>
              </ul>
            </div>

            <p style="color: #334155; font-size: 15px; line-height: 1.6;">
              You can visit our campus at Unit 1-3, I-Flier College Road, Opposite DonBosco Youth Centre, Ogungbade, Egbeda, Ibadan, or chat with our admissions desk directly via WhatsApp at <strong>+234 805 510 8168</strong>.
            </p>

            <div style="margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px; text-align: center; color: #64748b; font-size: 12px;">
              <p style="margin: 0;">i-Flier International School | info@iflierintlschl.org | 103.3 FM Radio</p>
              <p style="margin: 5px 0 0 0;">This is an automated informational message.</p>
            </div>
          </div>
        `,
      };

      // Also notify the school admin inbox
      const mailOptionsToAdmin = {
        from: `"i-Flier Prospectus System" <${fromEmail}>`,
        to: user,
        subject: `New Prospectus Request from ${email}`,
        text: `A new prospectus package was requested on the website by: ${email}`,
      };

      if (!pass) {
        return res.status(500).json({ 
          success: false, 
          error: "SMTP Password (SMTP_PASS) is not configured in environment variables." 
        });
      }

      await transporter.sendMail(mailOptionsToUser);
      await transporter.sendMail(mailOptionsToAdmin).catch(() => {});

      return res.json({ 
        success: true, 
        message: "Prospectus request submitted! Our team will send the details to your email shortly." 
      });

    } catch (error: any) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, error: error.message || "Failed to send email via SMTP." });
    }
  });

  // Admission Inquiry API Endpoint
  app.post("/api/inquiry", async (req, res) => {
    try {
      const { parentName, phone, email, studentName, level, message } = req.body || {};

      if (!parentName || !phone) {
        return res.status(400).json({ success: false, error: "Parent name and phone number are required." });
      }

      const host = process.env.SMTP_HOST || "mail.iflierintlschl.org";
      const port = parseInt(process.env.SMTP_PORT || "465", 10);
      const user = process.env.SMTP_USER || "info@iflierintlschl.org";
      const pass = process.env.SMTP_PASS || "";
      const fromEmail = process.env.SMTP_FROM || "info@iflierintlschl.org";

      if (!pass) {
        return res.status(500).json({ 
          success: false, 
          error: "SMTP Password (SMTP_PASS) is not configured in environment variables." 
        });
      }

      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });

      const mailOptionsToAdmin = {
        from: `"i-Flier Admissions Portal" <${fromEmail}>`,
        to: user,
        subject: `New Admission Inquiry: ${parentName} (${level || 'General'})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #cbd5e1; border-radius: 12px; background-color: #f8fafc;">
            <h2 style="color: #1e3a8a; border-bottom: 2px solid #d97706; padding-bottom: 10px; margin-top: 0;">New Admission Inquiry</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr><td style="padding: 8px; font-weight: bold; color: #334155; width: 35%;">Parent/Guardian:</td><td style="padding: 8px; color: #0f172a;">${parentName}</td></tr>
              <tr style="background-color: #f1f5f9;"><td style="padding: 8px; font-weight: bold; color: #334155;">Phone Number:</td><td style="padding: 8px; color: #0f172a;"><a href="tel:${phone}">${phone}</a></td></tr>
              <tr><td style="padding: 8px; font-weight: bold; color: #334155;">Email Address:</td><td style="padding: 8px; color: #0f172a;">${email || 'Not provided'}</td></tr>
              <tr style="background-color: #f1f5f9;"><td style="padding: 8px; font-weight: bold; color: #334155;">Child's Name:</td><td style="padding: 8px; color: #0f172a;">${studentName || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; color: #334155;">Academic Level:</td><td style="padding: 8px; color: #0f172a; font-weight: bold; color: #d97706;">${level || 'General'}</td></tr>
              <tr style="background-color: #f1f5f9;"><td style="padding: 8px; font-weight: bold; color: #334155; vertical-align: top;">Additional Notes:</td><td style="padding: 8px; color: #0f172a;">${message || 'None'}</td></tr>
            </table>
            <p style="margin-top: 20px; font-size: 12px; color: #64748b; text-align: center;">i-Flier International School Admissions System</p>
          </div>
        `,
      };

      let mailOptionsToParent = null;
      if (email && email.includes('@')) {
        mailOptionsToParent = {
          from: `"i-Flier International School" <${fromEmail}>`,
          to: email,
          subject: 'We Have Received Your Inquiry - i-Flier International School',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
              <div style="text-align: center; border-bottom: 2px solid #1e3a8a; padding-bottom: 15px; margin-bottom: 20px;">
                <h2 style="color: #1e3a8a; margin: 0;">i-Flier International School, Ibadan</h2>
                <p style="color: #d97706; font-size: 14px; margin: 5px 0 0 0; font-weight: bold;">"Inspired By Excellence & Success"</p>
              </div>
              <p style="color: #334155; font-size: 15px;">Dear ${parentName},</p>
              <p style="color: #334155; font-size: 15px; line-height: 1.6;">
                Thank you for reaching out to us regarding admission into <strong>${level || 'our school'}</strong>. Our team will contact you shortly.
              </p>
            </div>
          `,
        };
      }

      await transporter.sendMail(mailOptionsToAdmin);
      if (mailOptionsToParent) {
        await transporter.sendMail(mailOptionsToParent).catch(() => {});
      }

      return res.json({ 
        success: true, 
        message: "Inquiry submitted! Our admissions team will get back to you shortly." 
      });

    } catch (error: any) {
      console.error("Error submitting inquiry:", error);
      return res.status(500).json({ success: false, error: error.message || "Failed to submit admission inquiry." });
    }
  });

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
