const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");
const mongoose = require("mongoose");
// use lodash for links
var _ = require('lodash');
// connect mongoDb wit mongoose
mongoose.connect("mongodb+srv://admin-amit:Admin-2022@cluster0.vcyqt.mongodb.net/project?retryWrites=true&w=majority", { useNewUrlParser: true });

// create app
const app = express();
// set the ejs as view engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
// for use public folder only---for style.css and all others
app.use(express.static(__dirname + '/public'));

// let posts=[];
// create one new postSchema for create new post
const postSchema = {
    postTitle: String,
    postDetails: String,
    postEligibility: String,
    postHowToApply: String,
    postExpectedSalary: String
}
const postArtsSchema = {
    postTitle: String,
    postDetails: String,
    postEligibility: String,
    postAdmission: String,
    postScope: String,
    postJob: String
}
// create one mongoose model
const Post = mongoose.model("Post", postSchema);
const PostArt = mongoose.model("PostArt", postArtsSchema);

app.get("/compose", function (req, res) {
    res.render("compose");
});
app.post("/compose", function (req, res) {
// create one new post with small 'p'--> and it access all the compose form
    const post = new Post({
        postTitle: req.body.postTitle,
        postDetails: req.body.postDetails,
        postEligibility: req.body.postEligibility,
        postHowToApply: req.body.postHowToApply,
        postExpectedSalary: req.body.postExpectedSalary
    });
    // then just simply save the post without any error .
    // and redirect to home page for showing
    post.save(function (err) {
        if (!err) {
            res.redirect("/");
        }
    });

})


// compose Arts Section------
app.get("/composeArts", function (req, res) {
    res.render("composeArts");
});
app.post("/composeArts", function (req, res) {
// create one new post with small 'p'--> and it access all the compose form
    const postArt = new PostArt({
        postTitle: req.body.postTitle,
        postDetails: req.body.postDetails,
        postEligibility: req.body.postEligibility,
        postAdmission: req.body.postAdmission,
        postScope: req.body.postScope,
        postJob: req.body.postJob
    });
    // then just simply save the post without any error .
    // and redirect to home page for showing
    postArt.save(function (err) {
        if (!err) {
            res.redirect("/arts");
        }
    });

})
// In home page we must try to find all the posts and then render home page
app.get("/", function (req, res) {
    Post.find({}, function (err, posts) {
        res.render("index", {
            posts: posts
        });
    });
});
app.get("/arts", function (req, res) {
    PostArt.find({}, function (err, postArts) {
        res.render("arts", {
            postArts: postArts
        });
    });
});
app.get("/posts/:postId", function (req, res) {
    // we use id for access all new post in single page
    const requestedPostId = req.params.postId;
    Post.findOne({ _id: requestedPostId }, function (err, post) {
        res.render("post", {
            postTitle: post.postTitle,
            postDetails: post.postDetails,
            postEligibility: post.postEligibility,
            postHowToApply: post.postHowToApply,
            postExpectedSalary: post.postExpectedSalary
        });
    });

});

// for postArts render single page----
app.get("/postArts/:postId", function (req, res) {
    // we use id for access all new post in single page
    const requestPostId = req.params.postId;
    PostArt.findOne({ _id: requestPostId }, function (err, post) {
        res.render("postArts", {
            postTitle: post.postTitle,
            postDetails: post.postDetails,
            postEligibility: post.postEligibility,
            postAdmission: post.postAdmission,
            postScope: post.postScope,
            postJob: post.postJob
        });
    });

});
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
    console.log("The app is started successfully.");
});