interface UserConfirmationData {
  name: string;
  email: string;
  message: string;
}

export const generateUserConfirmationEmail = (data: UserConfirmationData): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Message Received - Daniel Wijaya</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f5f5f5; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                    <div style="background: rgba(255, 255, 255, 0.2); width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px auto; display: flex; align-items: center; justify-content: center;">
                      <span style="font-size: 40px;">✅</span>
                    </div>
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                      Message Received!
                    </h1>
                    <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 14px;">
                      Thank you for reaching out
                    </p>
                  </td>
                </tr>
                
                <!-- Greeting -->
                <tr>
                  <td style="padding: 40px 30px 20px 30px;">
                    <h2 style="color: #212529; margin: 0 0 15px 0; font-size: 22px; font-weight: 600;">
                      Hi ${data.name} 👋
                    </h2>
                    <p style="color: #495057; margin: 0; line-height: 1.6; font-size: 16px;">
                      Thank you for contacting me through my website. I have successfully received your message and will get back to you as soon as possible.
                    </p>
                  </td>
                </tr>
                
                <!-- Message Summary -->
                <tr>
                  <td style="padding: 20px 30px;">
                    <div style="background: #f8f9fa; border-radius: 10px; padding: 25px;">
                      <h3 style="color: #667eea; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                        📝 Your Message Summary
                      </h3>
                      <div style="background: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
                        <p style="margin: 0; white-space: pre-wrap; color: #6c757d; line-height: 1.6; font-size: 15px;">
${data.message}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
                
                <!-- Response Time -->
                <tr>
                  <td style="padding: 20px 30px 30px 30px;">
                    <div style="background: linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%); border-radius: 10px; padding: 25px; border-left: 4px solid #4caf50;">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td style="padding-right: 15px; vertical-align: top;">
                            <span style="font-size: 32px;">⏱️</span>
                          </td>
                          <td>
                            <h3 style="margin: 0 0 8px 0; color: #2e7d32; font-size: 18px; font-weight: 600;">
                              Expected Response Time
                            </h3>
                            <p style="margin: 0; color: #558b2f; font-size: 15px; line-height: 1.5;">
                              I typically respond within <strong>24 hours</strong>. Your inquiry is important to me, and I'll make sure to address it promptly.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
                
                <!-- What's Next -->
                <tr>
                  <td style="padding: 0 30px 30px 30px;">
                    <div style="background: #f8f9fa; border-radius: 10px; padding: 25px;">
                      <h3 style="color: #667eea; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                        🚀 What Happens Next?
                      </h3>
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td style="padding: 10px 0;">
                            <span style="color: #667eea; font-weight: 600; margin-right: 10px;">1.</span>
                            <span style="color: #495057;">I'll review your message carefully</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0;">
                            <span style="color: #667eea; font-weight: 600; margin-right: 10px;">2.</span>
                            <span style="color: #495057;">You'll receive a personalized response via email</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0;">
                            <span style="color: #667eea; font-weight: 600; margin-right: 10px;">3.</span>
                            <span style="color: #495057;">We can continue our conversation from there</span>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
                
                <!-- CTA Section -->
                <tr>
                  <td style="padding: 0 30px 40px 30px; text-align: center;">
                    <p style="margin: 0 0 20px 0; color: #495057; font-size: 15px;">
                      In the meantime, feel free to explore more of my work
                    </p>
                    <a href="https://danielwijaya.com" 
                       style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 50px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
                      🌐 Visit My Website
                    </a>
                  </td>
                </tr>
                
                <!-- Signature -->
                <tr>
                  <td style="background: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
                    <p style="margin: 0 0 8px 0; color: #495057; font-size: 15px;">
                      Best regards,
                    </p>
                    <p style="margin: 0 0 15px 0; color: #667eea; font-size: 20px; font-weight: 600;">
                      Daniel Wijaya
                    </p>
                    <div style="border-top: 2px solid #e9ecef; padding-top: 20px; margin-top: 20px;">
                      <p style="margin: 0 0 5px 0; color: #6c757d; font-size: 13px;">
                        📧 <a href="mailto:wijayadaniel19@gmail.com" style="color: #667eea; text-decoration: none;">wijayadaniel19@gmail.com</a>
                      </p>
                      <p style="margin: 5px 0; color: #6c757d; font-size: 13px;">
                        🌐 <a href="https://danielwijaya.com" style="color: #667eea; text-decoration: none;">danielwijaya.com</a>
                      </p>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background: #212529; padding: 20px; text-align: center;">
                    <p style="margin: 0; color: #adb5bd; font-size: 12px;">
                      This is an automated confirmation email. Please do not reply to this message.
                    </p>
                    <p style="margin: 10px 0 0 0; color: #6c757d; font-size: 11px;">
                      © ${new Date().getFullYear()} Daniel Wijaya. All rights reserved.
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

export const generateUserConfirmationSubject = (): string => {
  return `✅ Message Received - I'll Get Back to You Soon | Daniel Wijaya`;
};

