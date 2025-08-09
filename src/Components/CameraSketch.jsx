import React from "react";

const CameraSketch = () => {
  return (
    <div className="w-[100dvw] md:w-[50dvw] md:h-[30dvw] h-[60dvw] flex justify-center items-center">
      <div className="h-5/6 w-[90%] grid grid-rows-[2fr_5fr_1fr] border-none outline-none shadow-none">
        <div className="grid grid-rows-[6fr_1fr] border-none outline-none shadow-none">
          <div className="relative border-none outline-none shadow-none">
            <div className="bg-[#98896F] h-[50%] w-[15%] border-none outline-none shadow-none relative top-0 left-[5%] rounded-t-sm">
              <div className="h-[30%] w-[13%] border-none outline-none shadow-none bg-[#5c5740] absolute bottom-0 -left-[1px]" />
              <div className="h-[30%] w-[13%] border-none outline-none shadow-none bg-[#5c5740] absolute bottom-0 -right-[1px]" />
            </div>
            <div className="h-[50%] w-[10%] absolute top-0 left-[25%] bg-[#98896F] rounded-t-sm border-none outline-none shadow-none" />
            <div className="h-[50%] w-[50%] absolute top-0 left-[40%] bg-[#98896F] rounded-t-sm border-none outline-none shadow-none">
              <div className="bg-black h-[60%] w-[10%] absolute top-[40%] rounded-xs left-[5%] border-none outline-none shadow-none" />
              <div className="bg-black h-[120%] w-[20%] absolute top-[40%] rounded-sm right-[5%] z-10 border-none outline-none shadow-none">
                <div className="h-[40%] aspect-[1] rounded-full absolute left-1/2 top-1/2 transform -translate-1/2 bg-[#98896F] blur-xs border-none outline-none shadow-none" />
              </div>
            </div>
            <div className="h-[50%] w-[100%] bg-[#98896F] absolute bottom-0 rounded-t-sm border-none outline-none shadow-none" />
          </div>
          <div className="bg-[#000000] border-none outline-none shadow-none" />
        </div>

        <div className="bg-[#59270E] relative border-none outline-none shadow-none">
          <div className="h-[125%] aspect-[1] rounded-full absolute left-1/2 top-1/2 transform -translate-1/2 bg-[#98896F] border" />
          <div
            className="h-[100%] aspect-[1] rounded-full absolute left-1/2 top-1/2 transform -translate-1/2 bg-[#000000] border-none outline-none shadow-none"
            style={{
              boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          />
          <div className="h-[60%] aspect-[1] rounded-full absolute left-1/2 top-1/2 transform -translate-1/2 bg-[#232323] blur-md border-none outline-none shadow-none" />
          <div className="h-[30%] aspect-[1] rounded-full absolute left-1/2 top-1/2 transform -translate-1/2 bg-[#000000] blur-sm border-none outline-none shadow-none" />
        </div>

        <div className="grid grid-rows-[1fr_4fr] border-none outline-none shadow-none">
          <div className="bg-[#000000] border-none outline-none shadow-none" />
          <div className="bg-[#98896F] rounded-b-sm border-none outline-none shadow-none" />
        </div>
      </div>
    </div>
  );
};

export default CameraSketch;
