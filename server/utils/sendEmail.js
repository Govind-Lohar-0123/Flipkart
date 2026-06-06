import nodeMailer from "nodemailer";
import dotenv from "dotenv"
dotenv.config();



const sendEmail = async (req, res) => {
    let { options } = req.body;

    try {

        
        const transporter = nodeMailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false, // Use SSL
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            },

        });

        const mailOptions = {
            from: process.env.SMTP_MAIL,
            to: options.to,
            subject: options.subject,
            html: options.msg,
        };

        await transporter.sendMail(mailOptions);
        
        res.send({ status: true, msg: "Please Check you email..." })

    }
    catch (err) {
       console.log(err)
        res.send({ status: false, msg: "Failed to send email" })
    }
};
export default sendEmail;