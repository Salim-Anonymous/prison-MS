var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/visitors', function(req, res, next) {
  res.json([
        {name: 'John', age: 20},
        {name: 'Jane', age: 21},
        {name: 'Jack', age: 22},
    ]
  );
});

router.get('/inmates',function(req,res,next){
    res.json([
        {
            name: "John Doe",
            pid: "02160003",
            cid: 11223344556,
            dob: "11/11/11",
            gender: "male",
            village: "Lobesa",
            gewog: "Baap",
            dzongkhag: "Punakha",
            marital_status: "Single",
            nationality:"Bhutanese",
            height: 180,
            weight: 80,
            color_of_hair: "red",
            color_of_eyes: "brown",
            complexion: "fair",
            crimes_committed: [{no: 2}],
            sentence: 24,
            sentence_start: "11/11/16",
            sentence_end: "11/11/18",
            Prison_location: 1,
            Cell_no: 10,
        }
    ])
})
module.exports = router;
