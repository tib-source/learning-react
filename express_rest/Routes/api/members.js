const express = require("express");
const Router = express.Router();
const memebers = require("../../Members");
const members = require("../../Members");
const uuid = require("uuid");
const e = require("express");
idFilter = (req) => (member) => member.id === parseInt(req.params.id);

Router.get("/", (req, res) => {
  res.json(memebers);
});

Router.get("/:id", (req, res) => {
  const found = memebers.some(idFilter(req));

  if (found) {
    res.status(200);
    res.json(members.find(idFilter(req)));
  } else {
    res.status(404).json({
      message: `User with { id : ${req.params.id} } not found`,
    });
  }
});

Router.post("/", (req, res) => {
  const { name, email } = req.body;
  const newMember = {
    name,
    email,
    id: uuid.v4(),
    status: "active",
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ message: "Please send a name and email" });
  }
  memebers.push(newMember);
  res.status(201).json(newMember);
});

Router.put("/:id", (req, res) => {
  const { name, email, status } = req.body;
  const user = memebers.find(idFilter(req));
  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }
  const updtUser = {
    name: name || user.name,
    email: email || user.email,
    status: status || user.status,
  };

  memebers.push(updtUser);
  res.status(200).json({ msg: "Member updated", member: updtUser });
});

Router.delete("/:id", (req, res) => {
  const user = memebers.find(idFilter(req));
  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }
  const index = memebers.findIndex(idFilter(req));
  members.splice(index, 1);
  res.status(200).json(members);
});
module.exports = Router;
