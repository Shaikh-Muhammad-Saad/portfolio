// * Import necessary modules
import multer from 'multer';
import { createRouter } from 'next-connect';
import { createTransport } from 'nodemailer';

// * Function to generate HTML email content
const getMessage = (name, email, message, phone) => {
  return `
    <!DOCTYPE html>
  <html>
  
  <head>
      <title>Thanks For Contacting, ${name}
      </title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
      <style>
          body {
              font-family: Arial, sans-serif;
              color: #444444;
              background-color: #f5f5f5;
              padding: 20px;
              margin: 0;
          }
  
          h1 {
              font-size: 24px;
              font-weight: bold;
              margin-top: 0;
              margin-bottom: 20px;
              color: #3c3c3c;
          }
  
          p {
              font-size: 16px;
              line-height: 1.5;
              margin-top: 0;
              margin-bottom: 20px;
          }
  
          .code {
              font-size: 20px;
              font-weight: bold;
              color: #55e6a5;
          }
  
          .link {
              font-size: 20px;
              font-weight: bold;
              color: #55e6a5;
              text-decoration: underline;
          }
      </style>
  </head>
  
  <body>
      <h1>New Lead Submission from website - ${name}</h1>
      <p>
          Hello Usama Irfan,
              A new potential customer has contacted through the website. Please get in touch with the customer ASAP.
      </p>
      <h4>Email: </h4>
      <blockquote>
          ${email}
      </blockquote>
      <h4>Phone: </h4>
      <blockquote>
          ${phone}
      </blockquote>
      <h4>Customer Message: </h4>
      <blockquote>
          ${message}
      </blockquote>
      <p>Regards,<br />Team Usama Irfan</p>
      <p><small>This is an auto-generated email on submission of contact form on the Usama Irfan website.</small></p>
  </body>
  
  </html>`;
};

// * Initialize a new router
const apiRoute = createRouter();

// * Middleware for handling file uploads with multer.
// * Limits to one file of maximum size 2MB.

apiRoute.use(multer().none());

apiRoute.post((req, res) => {
  // * Email configuration from environment variables
  const config = {
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    secure: false, // ! Not using SSL/TLS
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_SENDER_EMAIL,
      pass: process.env.NEXT_PUBLIC_EMAIL_SENDER_PASSWORD,
    },
  };
  const transporter = createTransport(config); // * Initialize email transporter

  const fields = req.body; // * Extract form data from request body

  // * Configure email details
  const ownerMessage = {
    from: process.env.NEXT_PUBLIC_EMAIL_SENDER_REPLY_TO,
    to: process.env.NEXT_PUBLIC_EMAIL_SEND_TO,
    subject: fields?.subject ?? 'New Website Lead',
    text: fields?.message,
    html: getMessage(
      fields?.name ?? fields?.email,
      fields?.email,
      fields?.message,
      fields?.phone
    ),
  };

  // * Send email
  transporter.sendMail(ownerMessage, async (err) => {
    if (err) {
      res.status(500).json({ data: {}, error: err }); // ! Return error if email sending fails
    } else {
      res.status(250).json({ data: 'success', statusCode: 250 }); // * Success response
    }
  });
});

// * Export the route with error and no-match handlers
export default apiRoute.handler({
  onError(error, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method "${req.method}" Not Allowed` });
  },
});

// * Configuration to disable body parsing for Next.js API routes
// ! We're handling parsing ourselves with multer.
export const config = {
  api: {
    bodyParser: false,
  },
};
