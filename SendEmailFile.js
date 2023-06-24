const fs = require('fs');
const path = require('path');
const sendMail = require('./EmailSender');

const main = async () => {
  const fileAttachments = [
    {
      path: path.join(__dirname, './attachment2.txt'),
    },
  ];

  const options = {
    to: 'shubhamthite09@gmail.com',
    cc: 'thedreamerone0021@gmail.com, pj9009815223@gmail.com',
    replyTo: 'nhb668912@gmail.com',
    subject: 'Hlo Guys',
    text: 'This email is send by your Friend.',
    html: `<p>🙋🏻‍♀️ This is a test email from Me.</p>`,
    attachments: fileAttachments,
    textEncoding: 'base64',
    headers: [
      { key: 'X-Application-Developer', value: 'Suraj Singh' },
      { key: 'X-Application-Version', value: 'v1.0.0.2' },
    ],
  };

  const messageId = await sendMail(options);
  return messageId;
};

main()
  .then((messageId) => console.log('Message sent successfully:', messageId))
  .catch((err) => console.error(err));