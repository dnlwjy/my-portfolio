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

  // Encode message for URL (mailto body)
  const encodedMessage = encodeURIComponent(data.message);

  return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - Daniel Wijaya</title>

    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: #121212;
        }

        table {
            border-collapse: collapse;
        }

        h1, h2, h3 {
            margin: 0;
            color: #121212;
            font-weight: 600;
        }

        h1 { font-size: 48px; }
        h2 { font-size: 24px; }
        h3 { font-size: 16px; }

        p {
            margin: 0;
            color: #495057;
            font-size: 16px;
            line-height: 1.6;
        }

        a {
            color: #121212;
            text-decoration: underline;
            font-size: 13px;
        }

        .container {
            max-width: 600px;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .header {
            background: #121212;
            padding: 48px 16px;
            text-align: center;
        }

        .emoji {
            font-size: 64px;
            display: block;
            margin-bottom: 8px;
        }

        .content {
            padding: 24px 30px 0;
        }

        .message-section {
            padding: 20px 30px;
        }

        .message-box {
            background: #eeeeee;
            padding: 16px;
            border-radius: 8px;
            border-left: 4px solid #121212;
            margin-top: 12px;
        }

        .response-section {
            padding: 0 30px 30px;
        }

        .signature {
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e9ecef;
        }

        .sender-details {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 12px 0;
        }

        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #e9ecef;
        }

        .detail-row:last-child {
            border-bottom: none;
        }

        .reply-button {
            display: inline-block;
            background: #121212;
            color: #ffffff;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            margin: 16px 0;
        }

        @media only screen and (max-width: 600px) {
            .outer { padding: 20px 10px !important; }
            .container { border-radius: 8px !important; }
            .header { padding: 30px 16px !important; }
            .content, .message-section, .response-section { padding-left: 16px !important; padding-right: 16px !important; }
            .signature { padding: 24px 16px !important; }
            .emoji { font-size: 40px !important; }
            .message-box { padding: 12px !important; }
            h1 { font-size: 28px !important; }
            h2 { font-size: 20px !important; }
            h3 { font-size: 15px !important; }
            p { font-size: 14px !important; line-height: 1.5 !important; }
            a { font-size: 12px !important; }
        }
    </style>
</head>

<body>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="outer" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" class="container">
                    
                    <!-- Header -->
                    <tr>
                        <td class="header">
                            <span class="emoji">📬</span>
                            <h1 style="color: #ffffff;">New Contact Message!</h1>
                        </td>
                    </tr>

                    <!-- Sender Details -->
                    <tr>
                        <td class="content">
                            <h2>Message from ${data.name}</h2>
                            <div class="sender-details">
                                <div class="detail-row">
                                    <strong>Name:</strong>
                                    <span>${data.name}</span>
                                </div>
                                <div class="detail-row">
                                    <strong>Email:</strong>
                                    <span><a href="mailto:${data.email}">${data.email}</a></span>
                                </div>
                                <div class="detail-row">
                                    <strong>Received:</strong>
                                    <span>${currentTime}</span>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <!-- Message -->
                    <tr>
                        <td class="message-section">
                            <h3>Message Content</h3>
                            <div class="message-box">
                                <p style="white-space: pre-wrap;">${data.message}</p>
                            </div>
                        </td>
                    </tr>

                    <!-- Reply Action -->
                    <tr>
                        <td class="response-section">
                            <p>Click the button below to reply directly to ${data.name}:</p>
                            <div style="text-align: center; margin: 20px 0;">
                                <a href="mailto:${data.email}?subject=Re: Your message to Daniel Wijaya&body=Hi ${data.name},%0D%0A%0D%0AThank you for reaching out.%0D%0A%0D%0A[Your reply here]%0D%0A" class="reply-button">
                                    Reply to ${data.name}
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td class="signature">
                            <p style="font-size: 12px; color: #666;">This email was automatically sent from your website contact form.</p>
                            <p style="font-size: 11px; color: #888; margin-top: 8px;">
                                <a href="https://danielwijaya.com" target="_blank">danielwijaya.com</a>
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