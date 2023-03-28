const {name} = require("../server.js")
console.log( name);
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
</head>
<body>
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
            <td align="center" bgcolor="#ffffff" style="padding: 40px 0 30px 0;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg" alt="Logo">
            </td>
        </tr>
        <tr>
            <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td style="font-size: 20px; font-weight: bold; padding-bottom: 20px;">Hello! ${name}</td>
                    </tr>
                    <tr>
                        <td style="font-size: 16px; line-height: 24px; padding-bottom: 20px;">
                            This is an example email template. You can modify the contents of this email to suit your needs.
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 16px; line-height: 24px;">
                            Thank you for your attention.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#333333" style="color: #ffffff; font-size: 14px; text-align: center; padding: 20px;">
                &copy; 2023 Example Company. All rights reserved.
            </td>
        </tr>
    </table>
</body>
</html>`

module.exports = {html}
