const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({ origin: 'https://srinistudio.vercel.app' }));

const upload = multer();

app.post('/submit-form', upload.single('photo'), async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;
        const image = req.file ? req.file.buffer : null; // Get the image data as a Buffer
        
        console.log(name, email, phone, address, image);

        if (!image) {
            throw new Error('No image uploaded');
        }

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
            subject: 'Order Details',
            html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Address: ${address}</p>
                <img src="cid:myImg" style="width:400px;height:400px;"/>
            `,
            attachments: [
                {
                    filename: 'order-image.jpg',
                    content: image, // Attach the image buffer directly
                    cid: 'myImg',
                },
            ],
        };

        await transporter.sendMail(mailOptions);
        console.log("Image sent successfully");
        res.sendStatus(201);
    } catch (error) {
        console.error("Error sending email: ", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(7000, () => {
    console.log("Server is running on port 7000");
});
