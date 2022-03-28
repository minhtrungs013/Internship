const nodeMailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const sendMail = (email, subject, name, mentor, reviewtime, meetingUrl) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.mailHost,
    port: process.env.mailPort,
    secure: true,
    auth: {
      user: process.env.adminEmail,
      pass: process.env.adminPassword,
    },
  });
  const options = {
    from: process.env.adminEmail,
    to: email,
    subject: subject,
    html: `<h3 style="color: red;"> Xin chào ${name}</h3>
    <p>Như đã qua trao đổi bằng điện thoại, chúng tôi xin mời bạn đến với cuộc phỏng vấn chi tiết với trưởng dự án bằng link dưới đây.</p>
    <ul>
      <li>Thời gian: ${reviewtime} PM</li>
      <li>Cuộc họp: <a href=${meetingUrl}>${meetingUrl}</a></li>
      <li>Người phỏng vấn: <a href="#">${mentor}</a></li>
    </ul>
    <p>Vui lòng xác nhận nếu bạn nhận được email này. Nếu bạn có bất kì câu hỏi nào, chỉ cần liên hệ với chúng tôi qua.<br> 
      Hotline: <a href="#">0977.465.083</a> 
      <br>  
      Email: intern-binhdinh@tma.com.vn | Website: www.tma-binhdinh.vn
    </p>
  `,
  };
  return transporter.sendMail(options, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({ message: "ok nha" });
    }
  });
};
module.exports = {
  sendMail: sendMail,
};
