const nodeMailer = require("nodemailer");
const adminEmail = "dominhtrung2k@gmail.com";
const adminPassword = "qzhuqsixihqonach";
//  host của google - gmail
const mailHost = "smtp.gmail.com";
// 587 là một cổng tiêu chuẩn và phổ biến trong giao thức SMTP
const mailPort = 465;
const sendMail = (email, subject, name, mentor, reviewtime, meetingUrl) => {
  // Khởi tạo một thằng transporter object sử dụng chuẩn giao thức truyền tải SMTP với các thông tin cấu hình ở trên.
  const transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: true, // nếu các bạn dùng port 465 (smtps) thì để true, còn lại hãy để false cho tất cả các port khác
    auth: {
      user: adminEmail,
      pass: adminPassword,
    },
  });
  const options = {
    from: adminEmail,
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
  // hàm transporter.sendMail() này sẽ trả về cho chúng ta một Promise
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
