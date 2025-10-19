interface OwnerEmailData {
  name: string;
  email: string;
  message: string;
}

export const generateOwnerNotificationEmail = (data: OwnerEmailData): string => {
  const currentTime = new Date().toLocaleString('en-US', { 
    timeZone: 'Asia/Jakarta',
    dateStyle: 'full',
    timeStyle: 'long'
  });

  // Format pesan dengan quote style ("> ") untuk lebih stand out
  const quotedMessage = data.message
    .split('\n')
    .map(line => `> ${line}`)
    .join('\n');
  
  // Encode pesan untuk URL (mailto body)
  const encodedMessage = encodeURIComponent(quotedMessage);

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f5f5f5; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                      📬 New Contact Form Submission
                    </h1>
                    <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 14px;">
                      You have received a new message from your website
                    </p>
                  </td>
                </tr>
                
                <!-- Sender Details -->
                <tr>
                  <td style="padding: 30px;">
                    <div style="background: #f8f9fa; border-radius: 10px; padding: 25px; margin-bottom: 20px;">
                      <h2 style="color: #667eea; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">
                        👤 Sender Details
                      </h2>
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse: collapse;">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #495057; width: 100px;">
                            Name:
                          </td>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529;">
                            ${data.name}
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; font-weight: 600; color: #495057;">
                            Email:
                          </td>
                          <td style="padding: 12px 0; color: #212529;">
                            <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none; font-weight: 500;">
                              ${data.email}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
                
                <!-- Message -->
                <tr>
                  <td style="padding: 0 30px 30px 30px;">
                    <div style="background: #f8f9fa; border-radius: 10px; padding: 25px;">
                      <h2 style="color: #667eea; margin: 0 0 15px 0; font-size: 20px; font-weight: 600;">
                        💬 Message
                      </h2>
                      <div style="background: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
                        <p style="margin: 0; white-space: pre-wrap; color: #495057; line-height: 1.6; font-size: 15px;">
${data.message}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
                
                <!-- Reply Button -->
                <tr>
                  <td style="padding: 0 30px 30px 30px;">
                    <div style="background: linear-gradient(135deg, #e8f0fe 0%, #f3e8ff 100%); border-radius: 10px; padding: 25px; text-align: center;">
                      <p style="margin: 0 0 20px 0; color: #495057; font-size: 15px;">
                        Click the button below to reply directly to <strong>${data.name}</strong>
                      </p>
                      <a href="mailto:${data.email}?subject=Re: Your message to Daniel Wijaya&body=Hi ${data.name},%0D%0A%0D%0AThank you for reaching out.%0D%0A%0D%0ARegarding your message:%0D%0A${encodedMessage}%0D%0A%0D%0A[Tulis balasan Anda di sini]%0D%0A" 
                         style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 40px; border-radius: 50px; font-weight: 600; font-size: 16px; transition: transform 0.2s; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
                        ↩️ Reply to ${data.name}
                      </a>
                      <p style="margin: 20px 0 0 0; color: #6c757d; font-size: 13px;">
                        💡 <strong>Quick Tip:</strong> Your email client will automatically address the reply to ${data.email}
                      </p>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background: #f8f9fa; padding: 25px; text-align: center; border-top: 1px solid #e9ecef;">
                    <p style="margin: 0; color: #6c757d; font-size: 13px;">
                      📅 Received on: ${currentTime}
                    </p>
                    <p style="margin: 10px 0 0 0; color: #adb5bd; font-size: 12px;">
                      This email was automatically sent from your website contact form
                    </p>
                    <p style="margin: 10px 0 0 0; color: #adb5bd; font-size: 12px;">
                      <a href="https://danielwijaya.com" style="color: #667eea; text-decoration: none;">danielwijaya.com</a>
                    </p>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};

export const generateOwnerNotificationSubject = (name: string): string => {
  return `📧 New Message from ${name} - Website Contact Form`;
};