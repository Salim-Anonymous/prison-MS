type Inmate = {
  FirstName: string;
  MiddleName: string;
  LastName: string;
  CIDNo: string;
  DOB: Date;
  Sex: string;
  Village: string;
  Gewog: string;
  Dzongkhag: string;
  MaritalStatus: string;
  Nationality: string;
  Height: number;
  Weight: number;
  ColorOfHair: string;
  ColorOfEyes: string;
  Complexion: string;
  CrimesCommitted: string;
  Sentence: string;
  TimeServeStarts: Date;
  TimeServeEnds: Date;
  PrisonId: number;
  Image: string;
  EmergencyPersonName: string;
  EmergencyPersonContact: string;
  EmergencyPersonRelationship: string;
};

const InmateCard = ({ inmate }: { inmate: Inmate }) => {
  return (
    <div className="flex p-4 flex-col mt-10 h-96 w-64 bg-white rounded-md">
      <div className="flex">
        <img
          src="https://avatars.githubusercontent.com/u/73750430?s=40&v=4"
          className="relative right-10 bottom-10 w-20 h-20 rounded-full shadow-sm md:mr-2 border-4 border-black"
          alt="inmate image"
        />
      </div>
    </div>
  );
};

export default InmateCard;
