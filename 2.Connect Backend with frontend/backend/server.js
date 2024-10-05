import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Construct __dirname manually for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/* app.use(express.static("/frontend/dist")); */

app.use(express.static(path.join(__dirname, "../frontend/dist")));

/* app.get("/", (req, res) => {
  res.send("Server is ready");
}); */

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "The third joke",
      content: "This is the third joke",
    },
  ];
  res.send(jokes);
});

// Fallback to serve the frontend's index.html for all non-API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
