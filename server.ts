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

      if (pass) {
        await transporter.sendMail(mailOptionsToUser);
        await transporter.sendMail(mailOptionsToAdmin).catch(() => {});
      } else {
        console.warn("SMTP_PASS is not set. Simulating email send for demonstration.");
      }

      return res.json({ 
        success: true, 
        message: pass 
          ? `Prospectus package successfully sent to ${email}!` 
          : `Prospectus package request received for ${email} (Demo mode: configure SMTP_PASS in Vercel to send live emails).` 
      });

    } catch (error: any) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, error: error.message || "Failed to send email via SMTP." });
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
