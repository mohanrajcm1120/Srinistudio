const express=require('express')
const nodemailer=require('nodemailer')
const cors=require('cors')

const app=express()

app.use(express.json())
app.use(cors({origin:'https://srinistudio.vercel.app'}))



app.post('/submit-form',(req,res)=>{
    const { name, email, message } = req.body;
  console.log(name,email,message)
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "studiossrini@gmail.com",
        pass: "jhhp zucb woej cfou",
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: "studiossrini@gmail.com",
    subject: `Message from Customer ${name}` ,
    text: `Name : ${name}\nemail: ${email}\nmessage: ${message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      res.sendStatus(500)
    } else {
      console.log("Email sent: ", info.response);
      res.sendStatus(201)
    }
  });
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
