const prisma = require("../utils/prisma");

const addInmate = (req, res) => {
  const { data } = req.body;
  const {
    identityParticulars,
    PhysicalDetails,
    CaseDetails,
    PrisonDetails,
    EmergencyContacts,
    UploadImage,
  } = data;
  const inmateData = {
    FirstName: identityParticulars.FirstName,
    MiddleName: identityParticulars.MiddleName,
    LastName: identityParticulars.LastName,
    DOB: identityParticulars.DOB,
    CIDNo: identityParticulars.CIDNo,
    Sex: identityParticulars.Sex,
    Village: identityParticulars.Village,
    Gewog: identityParticulars.Gewog,
    Dzongkhag: identityParticulars.Dzongkhag,
    MaritalStatus: identityParticulars.MaritalStatus,
    Nationality: identityParticulars.Nationality,
    Height: PhysicalDetails.Height,
    Weight: PhysicalDetails.Weight,
    ColorOfEyes: PhysicalDetails.ColorOfEyes,
    ColorOfHair: PhysicalDetails.ColorOfHair,
    Complexion: PhysicalDetails.Complexion,
    CrimesCommitted: CaseDetails.CrimesCommitted,
    Sentence: CaseDetails.Sentence,
    TimeServeStarts: CaseDetails.TimeServeStarts,
    TimeServeEnds: CaseDetails.TimeServeEnds,
    PrisonId: PrisonDetails.PrisonId,
    Image: UploadImage.Image,
    EmergencyPersonName: EmergencyContacts.Name,
    EmergencyPersonContact: EmergencyContacts.Contact,
    EmergencyPersonRelationship: EmergencyContacts.Relationship,
  };
  prisma.inmates
    .create({
      data: inmateData,
    })
    .then((inmate) => {
      res.status(201).json(inmate);
    })
    .catch((err) => {
      if (err.code === "P2002") {
        res.status(409).send({ message: "Inmate already exists" });
      }
    });
};

const searchInmate = async(req, res) => {
  const { type, query } = req.params;
  if (type === "id") {

    await prisma.inmates
      .findMany({
        where: {
          CIDNo: {
            contains: query,
          },
        },
      })
      .then((inmates) => {
        console.log(inmates);
        res.status(200).json(inmates);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: err.message });
      });
  } else if (type === "name") {
    await prisma.inmates
      .findMany({
        where: {
          OR: [
            {
              FirstName: {
                contains: query,
              },
            },
            {
              MiddleName: {
                contains: query,
              },
            },
            {
              LastName: {
                contains: query,
              },
            },
          ],
        },
      })
      .then((inmates) => {
        console.log(inmates);
        res.status(200).json(inmates);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};

const getInmate = async(req, res) => {
  const { id } = req.params;
  await prisma.inmates.findFirst({
    where: {
      CIDNo: id,
    },
  }).then((inmate) => {
    res.status(200).json(inmate);
  }
  ).catch((err) => {
    res.status(500).send({ message: err.message });
  }
  );
};

module.exports = {
  addInmate,
  searchInmate,
  getInmate,
};
