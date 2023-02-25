import React from "react";

const chapters = (props) => {
  const [chapIndex, setChapIndex] = React.useState(0);
  const chapter = [
    "Preamble",
    "Chapter 1",
    "Chapter 2",
    "Chapter 3",
    "Chapter 4",
    "Chapter 5",
    "Chapter 6",
    "Chapter 7",
    "Chapter 8",
    "Chapter 9",
    "Chapter 10",
    "Chapter 11",
    "Chapter 12",
    "Chapter 13",
    "Chapter 14",
    "Chapter 15",
    "Chapter 16",
    "Chapter 17",
    "Chapter 18",
    "Chapter 19",
    "Chapter 20",
    "Chapter 21",
    "Chapter 22",
    "Chapter 23",
  ];
  function cancelHandler() {
    props.onCancel();
  }
  const btnProp =
    "bg-[#00437A] text-white font-bold py-2 px-2 rounded-lg ml-auto border-none mt-5 mx-1 w-1/5";
  const hoverProp =
    "hover:bg-[#00437A] hover:text-white font-bold py-2 px-3 rounded-lg ml-auto border-none mt-5 mx-1 w-1/5";

  return (
    <div className="w-full">
      <div className="flex flex-col h-auto  justify-center  p-3">
        <div className="flex flex-row items-center">
          <h1 className="text-2xl text-center font-semibold ">
            Select a Chapter
          </h1>
          <button className={btnProp} onClick={cancelHandler}>
            X
          </button>
        </div>
        <div className="flex flex-wrap ">
          {chapter.map((chap, index) => {
            return (
              <button className={index == chapIndex ? btnProp : hoverProp}>
                {chap}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default chapters;
