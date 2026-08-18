import nodemailer from 'nodemailer';

interface VercelRequest {
  method?: string;
  body?: any;
  query?: Record<string, string | string[]>;
}

interface VercelResponse {
  setHeader(name: string, value: string): void;
  status(code: number): VercelResponse;
  json(data: any): VercelResponse;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).json({ status: 'ok' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { parentName, phone, email, studentName, level, message } = body || {};

    if (!parentName || !phone) {
      return res.status(400).json({ success: false, error: 'Parent name and phone number are required.' });
    }

    const host = process.env.SMTP_HOST || 'mail.iflierintlschl.org';
    const port = parseInt(process.env.SMTP_PORT || '465', 10);
    const user = process.env.SMTP_USER || 'info@iflierintlschl.org';
    const pass = process.env.SMTP_PASS || '';
    const fromEmail = process.env.SMTP_FROM || 'info@iflierintlschl.org';

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
              Thank you for reaching out to us regarding admission into <strong>${level || 'our school'}</strong> for <strong>${studentName || 'your child'}</strong>. 
            </p>

            <p style="color: #334155; font-size: 15px; line-height: 1.6;">
              Our admissions team has received your details and will contact you via phone (<strong>${phone}</strong>) or email shortly to guide you through the next steps and entrance assessment guidelines.
            </p>

            <div style="margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px; text-align: center; color: #64748b; font-size: 12px;">
              <p style="margin: 0;">i-Flier International School | info@iflierintlschl.org | +234 805 510 8168</p>
            </div>
          </div>
        `,
      };
    }

    if (!pass) {
      return res.status(500).json({ 
        success: false, 
        error: 'SMTP Password (SMTP_PASS) is not configured in Vercel Environment Variables. Please set SMTP_PASS in Vercel Settings.' 
      });
    }

    await transporter.sendMail(mailOptionsToAdmin);
    if (mailOptionsToParent) {
      await transporter.sendMail(mailOptionsToParent).catch((err) => {
        console.warn('Parent confirmation email skipped:', err.message);
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Inquiry successfully sent to school admissions!' 
    });

  } catch (error: any) {
    console.error('Error in inquiry API:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message || 'Failed to submit inquiry. Please verify SMTP server configuration.' 
    });
  }
}
