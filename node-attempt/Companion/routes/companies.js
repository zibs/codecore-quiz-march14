var express = require("express");
var router = express.Router();
var Company = require("../models/company");

router.get("/", function(req, res){
  Company.find({}, function(errs, companies) {
    if(errs) {
      res.render("error", {message: "Error Happened!", error: {status: 500}});
    } else {
    console.log(companies);
    res.render("companies/index", { companies: companies });
    }
  });
});
router.get("/new", function(request, response, next) {
  // response object, can call end on it, we can finish the request and can send something back to the user. End(text) Render(template) Redirect(url).
  // response.end("Create New Question");
  response.render("companies/new", {errors: {}});
});

router.post("/", function(request, response, next){
  var company = new Company({name: request.body.name});
  company.save(function(err, company){
    if(err){
      response.render("companies/new", {errors: err.errors});
    } else {
        // response.end(question._id.toString());
        response.redirect("/companies");
      }
  });
});

module.exports = router;
