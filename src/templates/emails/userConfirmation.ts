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

    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;600&display=swap"
        rel="stylesheet" />

    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            color: #121212;
        }

        h1,
        h2,
        h3 {
            font-family: 'Playfair Display', serif;
            color: #121212;
            font-weight: 600;
        }

        h1 {
            font-size: 48px;
        }

        h2 {
            font-size: 24px;
        }

        h3 {
            font-size: 20px;
        }

        p {
            font-family: 'Inter', sans-serif;
            color: #495057;
            font-size: 16px;
            line-height: 1.6;
        }

        a {
            color: #121212;
            text-decoration: underline;
            transition: opacity 0.1s ease, text-decoration 0.1s ease;
            margin: 5px 0;
            font-size: 13px;
        }

        a:hover {
            text-decoration: none;
            opacity: 0.5;
        }
    </style>
</head>

<body>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
        style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600"
                    style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

                    <!-- Header -->
                    <tr>
                        <td style="background: #121212; padding: 48px 16px; text-align: center;">
                            <span style="font-size: 64px; display: block; margin-bottom: 8px;">✅</span>
                            <h1 style="color: #ffffff; margin: 0;">Message Received!</h1>
                        </td>
                    </tr>

                    <!-- Greeting -->
                    <tr>
                        <td style="padding: 24px 24px 0px 30px;">
                            <h2>Hi ${data.name} 👋</h2>
                            <p>
                                Thank you for contacting me through my website. I have successfully received your
                                message and will get back to you as soon as possible.
                            </p>
                        </td>
                    </tr>

                    <!-- Message Summary -->
                    <tr>
                        <td style="padding: 20px 30px;">
                            <div style="background: #eeeeee; border-radius: 10px; padding: 24px; padding-top: 10px;">
                                <h3>
                                    Your Message Summary
                                </h3>
                                <div
                                    style="background: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #121212;">
                                    <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
                                </div>
                            </div>
                        </td>
                    </tr>


                    <!-- Response Time -->
                    <tr>
                        <td style="padding: 0px 30px 30px 30px;">
                            <p>
                                I typically respond within <strong>24 hours</strong>. Your inquiry is important to me,
                                and I'll make sure to address it promptly.
                            </p>
                        </td>

                        <!-- Signature -->
                    <tr>
                        <td
                            style="background: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
                            <p style="margin: 0;">Best regards,</p>
                            <p style="margin: 0; color: #121212; font-size: 22px; font-weight: 600;">
                                Daniel Wijaya
                            </p>
                            <div
                                style="display: block; padding-top: 0; margin-top: 12px;">
                                <div>📧 <a href="mailto:wijayadaniel19@gmail.com">wijayadaniel19@gmail.com</a></div>
                                <div>🌐 <a href="https://danielwijaya.com" target="_blank" rel="noopener noreferrer">danielwijaya.com</a></div>
                            </div>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td
                            style="background: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
                            <p style="margin: 0; font-size: 12px;">
                                This is an automated confirmation email. Please do not reply to this message.
                            </p>
                            <p style="margin: 10px 0 0 0; color: #888888; font-size: 11px;">
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

