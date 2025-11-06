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

        .logo {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-bottom: 12px;
        }

        .contact {
            margin-top: 12px;
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
                            <span class="emoji">✅</span>
                            <h1 style="color: #ffffff;">Message Received!</h1>
                        </td>
                    </tr>

                    <!-- Greeting -->
                    <tr>
                        <td class="content">
                            <h2>Hi ${data.name} 👋</h2>
                            <p>Thank you for contacting me through my website. I have successfully received your message and will get back to you as soon as possible.</p>
                        </td>
                    </tr>

                    <!-- Message Summary -->
                    <tr>
                        <td class="message-section">
                            <h3>Your Message Summary</h3>
                            <div class="message-box">
                                <p style="white-space: pre-wrap;">${data.message}</p>
                            </div>
                        </td>
                    </tr>

                    <!-- Response Time -->
                    <tr>
                        <td class="response-section">
                            <p>*I typically respond within <strong>24 hours</strong>. Your inquiry is important to me, and I'll make sure to address it promptly.</p>
                        </td>
                    </tr>

                    <!-- Signature -->
                    <tr>
                        <td class="signature">
                            <img src="https://danielwijaya.com/favicon.png" alt="Daniel Wijaya" class="logo">
                            <p>Best regards,</p>
                            <p style="color: #121212; font-size: 22px; font-weight: 600; margin: 8px 0;">Daniel Wijaya</p>
                            <div class="contact">
                                <div>📧 <a href="mailto:wijayadaniel19@gmail.com">wijayadaniel19@gmail.com</a></div>
                                <div style="margin-top: 4px;">🌐 <a href="https://danielwijaya.com" target="_blank">danielwijaya.com</a></div>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td class="signature" style="border-top: none; padding-top: 0;">
                            <p style="font-size: 12px; color: #666;">This is an automated confirmation email. Please do not reply to this message.</p>
                            <p style="font-size: 11px; color: #888; margin-top: 8px;">© ${new Date().getFullYear()} Daniel Wijaya. All rights reserved.</p>
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
    return `Daniel Wijaya - Message Received ✅`;
};