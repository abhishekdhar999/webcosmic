


import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { email } = await req.json();

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'Gmail', // You can use other email services
      auth: {
        user: "piratedgdtot@gmail.com" ,
        pass: "ucdrklkvletkcffp", // Your Gmail password or app password
      },
    });

    // Set up email data with unicode symbols
    let mailOptions = {
      from: "piratedgdtot@gmail.com", // Sender address
      to: "piratedgdtot@gmail.com", // List of receivers
      subject: `webcosmic subscribe newsletter messages`, // Subject line
      text: "subscribe news letter email", // Plain text body
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
       
        <p><strong>Email:</strong> ${email}</p>
    
        
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
