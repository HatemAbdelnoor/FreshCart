
import nodemailer from 'nodemailer';

  const  sendEmail=async ({to,cc,bcc,subject, text,html,attachments=[]}={})=>{ 
const transporter = nodemailer.createTransport({
  service :"gmail",
    auth: {
      user:"hatemabdelnoor@gmail.com",
      pass: "pvksmxathfsjxkrw"
    }
  });

  const info = await transporter.sendMail({
    from: `"Hatem Abdelnoor" <"hatemabdelnoor@gmail.com>"`, 
    to, 
    cc,
    bcc, 
    subject, 
    text ,
    html ,
    attachments
  });
  console.log(info);
}
export default sendEmail