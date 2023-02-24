import React from "react";
import { useState } from "react";
import Chapters from "./chapters";

const PrisonAct = () => {
  const [chaptersForm, setChaptersForm] = useState(false);

  function closeForm() {
    setChaptersForm(false);
  }
  return (
    <div>
      <div className="flex flex-row">
        <h1 className="text-2xl font-semibold fixed ">
          Prison Act Of Bhutan,2009
        </h1>
        <button
          className="bg-[#00437A] text-white font-bold py-2 px-4 rounded-lg fixed right-0 top 0 border-none"
          onClick={() => {
            setChaptersForm(!chaptersForm);
          }}
        >
          Chapters
        </button>
      </div>
      <div className="w-1/3 mx-auto -mt-72">
        {chaptersForm && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 ">
            <div className="relative mx-auto  rounded-lg bg-white shadow-lg py-8 px-8 w-1/3">
              <Chapters onCancel={closeForm} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrisonAct;
