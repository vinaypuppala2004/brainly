import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import {contentModel, UserModel, tagModel, LinkModel} from "./db.js";
import userauth from "./middlewares.js"
import crypto from "crypto";

const app = express();
app.use(express.json());

const JWT_PASSWORD = "1234567890"
app.post("/api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        await UserModel.create({
        username: username,
        password: password
        })

        res.status(201).json({message: "admin registered successfully"});
    }

    catch(e) {
        res.status(411).json({message: "user already exists"});
    }
    
})

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const exist = await UserModel.findOne({
        username,
        password
    })

    if(exist) {
        const token = jwt.sign({username}, JWT_PASSWORD);
        res.json({token})
    }
    else {
        res.status(403).json({message: "incorrect credentials"});
    }
})

app.post("/api/v1/content", userauth, async (req, res) => {
  try {
    const { link, title, tags } = req.body;

    const tagIds = [];

    for (const tagName of tags) {
      let tag = await tagModel.findOne({
        title: tagName,
      });

      // create new tag if not found
      if (!tag) {
        tag = await tagModel.create({
          title: tagName,
        });
      }

      tagIds.push(tag._id);
    }

    const content = await contentModel.create({
      link,
      title,
      tags: tagIds,

      // @ts-ignore
      userId: req.userId,
    });

    res.status(201).json({
      message: "content added successfully",
      content,
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({
      message: "error while adding contents",
    });
  }
});

app.delete("/api/v1/content", userauth, async (req, res) => {
    const contentId = req.body.contentId;

    try {
      await contentModel.deleteMany({
        contentId,
        // @ts-ignore
        userId: req.userId
      })
      
      res.json({message: "deleted"});
    } catch(e) {
      console.log(e);
      res.json({message:"error while deleting"});
    }
    
})
// view content
app.get("/api/v1/content", userauth, async (req, res) => {
  try {
    const content = await contentModel.find({
        // @ts-ignore
        userId: req.userId,
      }).populate("tags");

    res.json({content});

  } catch (e) {
    res.status(500).json({
      message: "error fetching content",
    });
  }
});

// to share link of content
app.post("/api/v1/brain/share", userauth, async (req, res) => {
  try {
    const existingLink = await LinkModel.findOne({
      // @ts-ignore
      userId: req.userId,
    });

    if (existingLink) {
      return res.json({
        hash: existingLink.hash,
      });
    }

    const hash = crypto.randomBytes(10).toString("hex");

    await LinkModel.create({
      hash,

      // @ts-ignore
      userId: req.userId,
    });

    res.json({
      hash,
    });
  } catch (e) {
    res.status(500).json({
      message: "error creating share link",
    });
  }
});

// to open the link by other user
app.get("/api/v1/brain/:shareLink", async (req, res) => {
  try {
    const hash = req.params.shareLink;

    const link = await LinkModel.findOne({
      hash,
    });

    if (!link) {
      return res.status(404).json({
        message: "invalid share link",
      });
    }

    const content = await contentModel
      .find({
        userId: link.userId,
      })
      .populate("tags");

    const user = await UserModel.findOne({
      _id: link.userId,
    });

    res.json({
      username: user?.username,
      content,
    });
  } catch (e) {
    res.status(500).json({
      message: "error fetching shared brain",
    });
  }
});

app.listen(3000);

console.log("listening");