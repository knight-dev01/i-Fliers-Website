import type { IncomingMessage, ServerResponse } from 'http';
import nodemailer from 'nodemailer';

export default async function handler(req: IncomingMessage & { body?: any, method?: string }, res: ServerResponse & { status: (code: number) => any, json: (data: any) => void }) {
  // Enable CORS
  res.setHeader = res.setHeader || (() => {});
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200);
    res.json({ status: 'ok' });
    return;
  }

  if (req.method !== 'POST') {
    res.status(405);
    res.json({ success: false, error: 'Method not allowed' });
    return;
  }

  try {
    // Parse body if string
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) { body = {}; }
    }
    // If running in serverless where req.body might need reading from chunks:
    if (!body && typeof (req as any).on === 'function') {
      body = await new Promise((resolve) => {
        let data = '';
        (req as any).on('data', (chunk: string) => { data += chunk; });
        (req as any).on('end', () => {
          try { resolve(JSON.parse(data)); } catch (e) { resolve({}); }
        });
      });
    }

    const email = body?.email;
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      res.status(400);
      res.json({ success: false, error: 'Valid email address is required.' });
      return;
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

    const mailOptionsToUser = {
      from: `"i-Flier International School" <${fromEmail}>`,
      to: email,
      subject: 'i-Flier International School Prospectus & Information Package',
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
            <p style="margin: 0;">i-Flier International School | info@iflierintlschl.org</p>
            <p style="margin: 5px 0 0 0;">This is an automated informational message.</p>
          </div>
        </div>
      `,
    };

    const mailOptionsToAdmin = {
      from: `"i-Flier Prospectus System" <${fromEmail}>`,
      to: user,
      subject: `New Prospectus Request from ${email}`,
      text: `A new prospectus package was requested on the website by: ${email}`,
    };

    if (pass) {
      await transporter.sendMail(mailOptionsToUser);
      await transporter.sendMail(mailOptionsToAdmin).catch(() => {});
    }

    res.status(200);
    res.json({ 
      success: true, 
      message: pass 
        ? `Prospectus package successfully sent to ${email}!` 
        : `Prospectus package request logged for ${email} (Demo mode: configure SMTP_PASS in Vercel to send live emails).` 
    });
  } catch (error: any) {
    console.error('Error in request-prospectus:', error);
    res.status(500);
    res.json({ success: false, error: error.message || 'Failed to send email.' });
  }
}
