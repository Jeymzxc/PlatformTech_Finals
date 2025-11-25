const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'image' folder
app.use("/image", express.static("image"));

app.get("/", (req, res) => {
  const page = `
    <html>
      <head>
        <title>My Info Page</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(to right, #74ebd5, #ACB6E5);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .card {
            display: flex;
            align-items: center;
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            max-width: 700px;
            transition: transform 0.3s;
          }
          .card:hover {
            transform: translateY(-5px);
          }
          .profile-img {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 30px;
            border: 4px solid #74ebd5;
          }
          .info {
            text-align: left;
          }
          h1 {
            margin: 0;
            color: #333;
          }
          p {
            font-size: 18px;
            margin: 5px 0;
            color: #555;
          }
          .quote {
            margin-top: 15px;
            font-style: italic;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <img src="/image/about_me.png" alt="My Photo" class="profile-img">
          <div class="info">
            <h1>James Marlo B. Peñaflor</h1>
            <p><strong>Class Section:</strong> BSIT NT - 4101</p>
            <p class="quote">"Your Life doesn't get better by chance. It gets better by change."</p>
          </div>
        </div>
      </body>
    </html>
  `;
  res.send(page);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
