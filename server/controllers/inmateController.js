const prisma  = require("../utils/prisma");

const addInmate = (req, res) => {
    const { data } = req.body;
    const { identityParticulars,PhysicalDetails,CaseDetails,PrisonDetails,EmergencyContacts,UploadImage } = data;
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
    }
    prisma.inmates.create({
        data: inmateData
    }).then((inmate) => {
        res.status(201).json(inmate);
    }).catch((err) => {
        if(err.code === "P2002"){
            res.status(409).send({message: "Inmate already exists"});
        }
    });

}

module.exports = {
    addInmate,
}