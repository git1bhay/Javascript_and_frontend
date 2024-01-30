import React,{useState} from "react";


const bgChanger = () => {
  const [color, setColor] = useState("olive");
  const colorObj = {
    backgroundColor: color,
  };
  return (
    <div className="w-full h-screen duration-200" style={colorObj}>
      <div
        className="fixed flex flex-wrap justify-center bottom-12
      inset-x-0 px-2
      "
      >
        <div
          className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl
        "
        >
          <button
            className="outline-none px-4 py-1 rounded-full text-white bg-red-500"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white bg-yellow-500"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white bg-blue-500"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white bg-gray-500"
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
};

export default bgChanger;
