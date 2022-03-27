// Create one framework of Node.js that is express
const express = require('express');

// Create body-parser constant for req anything from body
const bodyParser = require('body-parser');

// We use ejs for Add Dynamic content in our different pages
const ejs = require("ejs");

// We use MongoDB as our database so we use mongoose library for simple and easy code
const mongoose = require("mongoose");

// use lodash for links acceptance
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

let getTitle;

// Create one Schema of our Requested Documents
const postArtsSchema = {
    postTitle: String,
    postDetails: String,
    postEligibility: String,
    postAdmission: String,
    postScope: String,
    postJob: String
}

const formSchema={
    postTitle: String,
    postDetails: String,
    postEligibility: String,
    postAdmission: String,
    postScope: String,
    postJob: String
};

// create one mongoose model
// mongoose model wants two inputs one is- which model you wants to creates and 2ns is-> according to which schema-
const PostArt = mongoose.model("PostArt", postArtsSchema);
const PostSci = mongoose.model("PostSci", postArtsSchema);
const PostCom = mongoose.model("PostCom", postArtsSchema);
const PostGen = mongoose.model("PostGen", postArtsSchema);
const PostMed = mongoose.model("PostMed", postArtsSchema);
const PostEng = mongoose.model("PostEng", postArtsSchema);

const Form=mongoose.model("Form",formSchema);


// --------------Create every Compose page-----------------

// compose Arts Section
// When we get "/composeArt" route then we render the composeArt Page ->As simple as that
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

    const form=new Form({
        postTitle: req.body.postTitle,
        postDetails: req.body.postDetails,
        postEligibility: req.body.postEligibility,
        postAdmission: req.body.postAdmission,
        postScope: req.body.postScope,
        postJob: req.body.postJob
    });
    // then just simply save the post without any error .
    // and redirect to home page for showing
    form.save();
    postArt.save(function (err) {
        if (!err) {
            res.redirect("/arts");
        }
    });
   

})

//create compose science Section-----
app.get("/composeSci", function (req, res) {
    res.render("composeSci");
});
app.post("/composeSci", function (req, res) {

    const postSci = new PostSci({
        postTitle: req.body.postTitle,
        postDetails: req.body.postDetails,
        postEligibility: req.body.postEligibility,
        postAdmission: req.body.postAdmission,
        postScope: req.body.postScope,
        postJob: req.body.postJob
    });
    const form=new Form({
        postTitle: req.body.postTitle,
        postDetails: req.body.postDetails,
        postEligibility: req.body.postEligibility,
        postAdmission: req.body.postAdmission,
        postScope: req.body.postScope,
        postJob: req.body.postJob
    });
    form.save();
    postSci.save(function (err) {
        if (!err) {
            res.redirect("/science");
        }
    });

})
//create compose commerce Section-----
app.get("/composeCom", function (req, res) {
    res.render("composeCom");
});
app.post("/composeCom", function (req, res) {

    const postCom = new PostCom({
        postTitle: req.body.postTitle,
        postDetails: req.body.postDetails,
        postEligibility: req.body.postEligibility,
        postAdmission: req.body.postAdmission,
        postScope: req.body.postScope,
        postJob: req.body.postJob
    });
    const form=new Form({
        postTitle: req.body.postTitle,
        postDetails: req.body.postDetails,
        postEligibility: req.body.postEligibility,
        postAdmission: req.body.postAdmission,
        postScope: req.body.postScope,
        postJob: req.body.postJob
    });
    form.save();
    postCom.save(function (err) {
        if (!err) {
            res.redirect("/commerce");
        }
    });

})
//create compose General Section-----
app.get("/composeGen", function (req, res) {
    res.render("composeGen");
});
app.post("/composeGen", function (req, res) {

    const postGen = new PostGen({
        postTitle: req.body.postTitle,
        postDetails: req.body.postDetails,
        postEligibility: req.body.postEligibility,
        postAdmission: req.body.postAdmission,
        postScope: req.body.postScope,
        postJob: req.body.postJob
    });
    const form=new Form({
        postTitle: req.body.postTitle,
        postDetails: req.body.postDetails,
        postEligibility: req.body.postEligibility,
        postAdmission: req.body.postAdmission,
        postScope: req.body.postScope,
        postJob: req.body.postJob
    });
    form.save();
    postGen.save(function (err) {
        if (!err) {
            res.redirect("/general");
        }
    });

})
//create compose General Section-----
app.get("/composeMed", function (req, res) {
    res.render("composeMed");
});
app.post("/composeMed", function (req, res) {

    const postMed = new PostMed({
        postTitle: req.body.postTitle,
        postDetails: req.body.postDetails,
        postEligibility: req.body.postEligibility,
        postAdmission: req.body.postAdmission,
        postScope: req.body.postScope,
        postJob: req.body.postJob
    });
    const form=new Form({
        postTitle: req.body.postTitle,
        postDetails: req.body.postDetails,
        postEligibility: req.body.postEligibility,
        postAdmission: req.body.postAdmission,
        postScope: req.body.postScope,
        postJob: req.body.postJob
    });
    form.save();
    postMed.save(function (err) {
        if (!err) {
            res.redirect("/medical");
        }
    });

})
//create compose Engineering Section-----
app.get("/composeEng", function (req, res) {
    res.render("composeEng");
});
app.post("/composeEng", function (req, res) {

    const postEng = new PostEng({
        postTitle: req.body.postTitle,
        postDetails: req.body.postDetails,
        postEligibility: req.body.postEligibility,
        postAdmission: req.body.postAdmission,
        postScope: req.body.postScope,
        postJob: req.body.postJob
    });
    const form=new Form({
        postTitle: req.body.postTitle,
        postDetails: req.body.postDetails,
        postEligibility: req.body.postEligibility,
        postAdmission: req.body.postAdmission,
        postScope: req.body.postScope,
        postJob: req.body.postJob
    });
    form.save();
    postEng.save(function (err) {
        if (!err) {
            res.redirect("/engineer");
        }
    });

})

// for forms
app.post("/form",function(req,res){
    // getTitle=req.interestName;
    // console.log(getTitle);
    
    // res.redirect("/medical");

    console.log(req.body.interestName);
    // console.log(res);
    Form.findOne({postTitle:req.body.interestName}, function (err, post) {
        // console.log(post);
        res.render("postScis", {
            postTitle: post.postTitle,
            postDetails: post.postDetails,
            postEligibility: post.postEligibility,
            postAdmission: post.postAdmission,
            postScope: post.postScope,
            postJob: post.postJob
        });
    });
    
});



// -----------------render Every Stream Page-----------------
// In home page we must try to find all the posts and then render home page
app.get("/", function (req, res) {
    Form.find({}, function (err, forms) {
        res.render("index", {
            forms: forms
        });
    });
});




// app.get("/form",function(req,res){
//     // console.log(getTitle);
//     PostMed.find({}, function (err, postMeds) {
//         res.render("medical", {
//             postMeds: postMeds
//         });
//     });
// })
// Engineering page
app.get("/engineer", function (req, res) {
    PostEng.find({}, function (err, postEngs) {
        res.render("engineer", {
            postEngs: postEngs
        });
    });
});
// Render arts page
app.get("/arts", function (req, res) {
    PostArt.find({}, function (err, postArts) {
        if(!err){
            res.render("arts", {
                postArts: postArts
            }); 
        }
        
    });
});
// Render Science page
app.get("/science", function (req, res) {
    PostSci.find({}, function (err, postScis) {
        res.render("science", {
            postScis: postScis
        });
    });
});
app.get("/commerce", function (req, res) {
    PostCom.find({}, function (err, postComs) {
        res.render("commerce", {
            postComs: postComs
        });
    });
});
app.get("/general", function (req, res) {
    PostGen.find({}, function (err, postGens) {
        res.render("general", {
            postGens: postGens
        });
    });
});
app.get("/medical", function (req, res) {
    PostMed.find({}, function (err, postMeds) {
        res.render("medical", {
            postMeds: postMeds
        });
    });
});
app.get("/aboutUs", function (req, res) {

    res.render("aboutUs");
});



//----------------- Code for getting every post as a single Page-----------------
app.get("/postEngs/:postId", function (req, res) {
    // we use id for access all new post in single page
    const requestedPostId = req.params.postId;
    PostEng.findOne({ _id: requestedPostId }, function (err, post) {
        res.render("postEngs", {
            postTitle: post.postTitle,
            postDetails: post.postDetails,
            postEligibility: post.postEligibility,
            postAdmission: post.postAdmission,
            postScope: post.postScope,
            postJob: post.postJob
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
// for postScience render evert post single page----
app.get("/postScis/:postId", function (req, res) {
    // we use id for access all new post in single page
    const reqPostId = req.params.postId;
    PostSci.findOne({ _id: reqPostId }, function (err, post) {
        res.render("postScis", {
            postTitle: post.postTitle,
            postDetails: post.postDetails,
            postEligibility: post.postEligibility,
            postAdmission: post.postAdmission,
            postScope: post.postScope,
            postJob: post.postJob
        });
    });

});
// for postCommerce render evert post single page----
app.get("/postComs/:postId", function (req, res) {
    // we use id for access all new post in single page
    const reqPoId = req.params.postId;
    PostCom.findOne({ _id: reqPoId }, function (err, post) {
        res.render("postComs", {
            postTitle: post.postTitle,
            postDetails: post.postDetails,
            postEligibility: post.postEligibility,
            postAdmission: post.postAdmission,
            postScope: post.postScope,
            postJob: post.postJob
        });
    });

});
app.get("/postGens/:postId", function (req, res) {
    // we use id for access all new post in single page
    const reqId = req.params.postId;
    PostGen.findOne({ _id: reqId }, function (err, post) {
        res.render("postGens", {
            postTitle: post.postTitle,
            postDetails: post.postDetails,
            postEligibility: post.postEligibility,
            postAdmission: post.postAdmission,
            postScope: post.postScope,
            postJob: post.postJob
        });
    });

});
app.get("/postMeds/:postId", function (req, res) {
    // we use id for access all new post in single page
    const reqPId = req.params.postId;
    PostMed.findOne({ _id: reqPId }, function (err, post) {
        res.render("postMeds", {
            postTitle: post.postTitle,
            postDetails: post.postDetails,
            postEligibility: post.postEligibility,
            postAdmission: post.postAdmission,
            postScope: post.postScope,
            postJob: post.postJob
        });
    });

});




// port setting---------------------
let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function () {
    console.log("The app is started successfully.");
});