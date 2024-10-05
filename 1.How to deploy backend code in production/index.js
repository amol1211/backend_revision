require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "amol1211",
  id: 78840333,
  node_id: "MDQ6VXNlcjc4ODQwMzMz",
  avatar_url: "https://avatars.githubusercontent.com/u/78840333?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/amol1211",
  html_url: "https://github.com/amol1211",
  followers_url: "https://api.github.com/users/amol1211/followers",
  following_url: "https://api.github.com/users/amol1211/following{/other_user}",
  gists_url: "https://api.github.com/users/amol1211/gists{/gist_id}",
  starred_url: "https://api.github.com/users/amol1211/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/amol1211/subscriptions",
  organizations_url: "https://api.github.com/users/amol1211/orgs",
  repos_url: "https://api.github.com/users/amol1211/repos",
  events_url: "https://api.github.com/users/amol1211/events{/privacy}",
  received_events_url: "https://api.github.com/users/amol1211/received_events",
  type: "User",
  site_admin: false,
  name: "Amol Shinde",
  company: null,
  blog: "",
  location: "India",
  email: null,
  hireable: true,
  bio: "Hey😊, I'm Amol!",
  twitter_username: null,
  public_repos: 28,
  public_gists: 0,
  followers: 2,
  following: 7,
  created_at: "2021-02-10T05:50:49Z",
  updated_at: "2024-09-21T08:26:54Z",
};

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/x", (req, res) => {
  res.send("amol_twits");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at Amols form</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Amol is good at computer programming.</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
