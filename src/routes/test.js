const express = require("express");
const db = require("../../database/testdb");
const router = express.Router();

//ex) http://172.10.18.179/test/add/id1?pwd=1234
router.get("/add/:id", (req,res) =>{
    db.add(
        req.params.id, 
        req.query.pwd,
        ()=> {
        res.status(200).send();
    });
});
router.get("/delete", (req,res) => {
    db.deleteAll(
        ()=> {
            res.status(200).send();
    });
});
router.get("/", (req, res) => {
    db.getAll((item) => {res.json(item)
    });
});

module.exports = router;