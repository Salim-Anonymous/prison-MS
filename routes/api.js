var express = require("express");
var router = express.Router();
const prisma = require("@prisma/client");
const client = new prisma.PrismaClient();
/* GET home page. */
router.get("/visitors", function (req, res, next) {
  client.visitor.findMany().then((visitors) => {
    res.json(visitors);
  });
});

router.post("/visitors", function (req, res, next) {
  client.visitor
    .create({
      data: {
        name: req.body.name,
        inmate_name: req.body.inmate_name,
        pid: req.body.pid,
        cid: req.body.cid,
        contact: req.body.contact,
      },
    })
    .then((visitor) => {
      res.status(201).json(visitor);
    });
});

router.get("/inmates/:type/:query", function (req, res, next) {
  // res.json([
  //     {
  //         name: "John Doe",
  //         pid: "02160003",
  //         cid: 11223344556,
  //         dob: "11/11/11",
  //         gender: "male",
  //         village: "Lobesa",
  //         gewog: "Baap",
  //         dzongkhag: "Punakha",
  //         marital_status: "Single",
  //         nationality: "Bhutanese",
  //         height: 180,
  //         weight: 80,
  //         color_of_hair: "red",
  //         color_of_eyes: "brown",
  //         complexion: "fair",
  //         crimes_committed: [{ no: 2 }],
  //         sentence: 24,
  //         sentence_start: "11/11/16",
  //         sentence_end: "11/11/18",
  //         Prison_location: 1,
  //         Cell_no: 10,
  //     },
  //     {
  //         name: "Kuper Doe",
  //         pid: "02160099",
  //         cid: 11223344526,
  //         dob: "11/11/11",
  //         gender: "male",
  //         village: "Lobesa",
  //         gewog: "Baap",
  //         dzongkhag: "Punakha",
  //         marital_status: "Single",
  //         nationality: "Bhutanese",
  //         height: 180,
  //         weight: 80,
  //         color_of_hair: "red",
  //         color_of_eyes: "brown",
  //         complexion: "fair",
  //         crimes_committed: [{ no: 2 }],
  //         sentence: 24,
  //         sentence_start: "11/11/16",
  //         sentence_end: "11/11/18",
  //         Prison_location: 1,
  //         Cell_no: 10,
  //     },
  //     {
  //         name: "Jone Doe",
  //         pid: "02160001",
  //         cid: 11223344558,
  //         dob: "11/11/11",
  //         gender: "male",
  //         village: "Lobesa",
  //         gewog: "Baap",
  //         dzongkhag: "Punakha",
  //         marital_status: "Single",
  //         nationality: "Bhutanese",
  //         height: 180,
  //         weight: 80,
  //         color_of_hair: "red",
  //         color_of_eyes: "brown",
  //         complexion: "fair",
  //         crimes_committed: [{ no: 2 }],
  //         sentence: 24,
  //         sentence_start: "11/11/16",
  //         sentence_end: "11/11/18",
  //         Prison_location: 1,
  //         Cell_no: 10,
  //     },
  //     {
  //         name: "John Moe",
  //         pid: "02160004",
  //         cid: 11223344554,
  //         dob: "11/11/11",
  //         gender: "male",
  //         village: "Lobesa",
  //         gewog: "Baap",
  //         dzongkhag: "Punakha",
  //         marital_status: "Single",
  //         nationality: "Bhutanese",
  //         height: 180,
  //         weight: 80,
  //         color_of_hair: "red",
  //         color_of_eyes: "brown",
  //         complexion: "fair",
  //         crimes_committed: [{ no: 2 }],
  //         sentence: 24,
  //         sentence_start: "11/11/16",
  //         sentence_end: "11/11/18",
  //         Prison_location: 1,
  //         Cell_no: 10,
  //     },
  //     {
  //         name: "Jade Doe",
  //         pid: "02160002",
  //         cid: 11223344557,
  //         dob: "11/11/11",
  //         gender: "male",
  //         village: "Lobesa",
  //         gewog: "Baap",
  //         dzongkhag: "Punakha",
  //         marital_status: "Single",
  //         nationality: "Bhutanese",
  //         height: 180,
  //         weight: 80,
  //         color_of_hair: "red",
  //         color_of_eyes: "brown",
  //         complexion: "fair",
  //         crimes_committed: [{ no: 2 }],
  //         sentence: 24,
  //         sentence_start: "11/11/16",
  //         sentence_end: "11/11/18",
  //         Prison_location: 1,
  //         Cell_no: 10,
  //     }
  // ])
  const { query, type } = req.params;
  client.inmate
    .findMany({
      where: {
        [type]: {
          contains: query,
        },
      },
    })
    .then((inmates) => {
      res.json(inmates);
    });
});
module.exports = router;
