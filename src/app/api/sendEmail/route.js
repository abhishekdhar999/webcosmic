require('dotenv').config();
import nodemailer from 'nodemailer';


export async function POST(req) {
  try {
    const { firstName,lastName, email, message,agreement1,agreement2,budget } = await req.json();

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'Gmail', // You can use other email services
      auth: {
        user: process.env.EMAIL ,
        pass: process.env.EMAIL_APPPASSWORD, // Your Gmail password or app password
      },
    });

    // Set up email data with unicode symbols
    let mailOptions = {
      from: process.env.EMAIL, // Sender address
      to: process.env.EMAIL, // List of receivers
      subject: `webcosmic contact form messages`, // Subject line
      text: message, // Plain text body
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #0044cc;">New Message from ${firstName} ${lastName}</h2>
        <p><strong>Email:</strong> ${email}</p>
    
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
          <h3 style="color: #0044cc;">Message Details</h3>
          <p style="font-size: 16px;">${message}</p>
          
          <h3 style="color: #0044cc;">Budget</h3>
          <p style="font-size: 16px;">${budget}</p>
          
          <h3 style="color: #0044cc;">Agreements</h3>
          <p style="font-size: 16px;">${agreement1}</p>
          <p style="font-size: 16px;">${agreement2}</p>
        </div>
        
        <hr style="margin-top: 20px;">
        <p style="font-size: 12px; color: #777;">This message was sent via your webcosmic contact form.</p>
      </div>
    `
      , // HTML body content
    };

    // Send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
  }
}
