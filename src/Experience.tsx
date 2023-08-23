import { useNavigate } from "react-router-dom";

export default function Experience() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-16 w-full h-full text-gray-500">
      <button className="flex mx-10 text-white" onClick={() => navigate("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <p className="font-semibold px-3">Back to Home</p>
      </button>
      <p className="text-gray-300 pt-10 font-semibold text-2xl  mx-10">
        Experience
      </p>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-white h-full border"
          style={{ left: "50%" }}
        ></div>
        <div className="mb-8 flex justify-between items-center w-full right-timeline ">
          <div className="order-1 w-5/12"></div>
          <div className="z-20  flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1  border border-1 border-gray-700 bg-[#101010] rounded-lg shadow-xl w-5/12 px-6 py-4">
            <div>
              <img
                src="./assets/pupilfirst.png"
                className="float-left sm:mb-3 object-cover h-44 w-44 rounded-full mr-4 "
                alt="weblaunch"
              />
              <h3 className=" font-bold text-gray-300 text-xl">
                Full Stack Intern
              </h3>
            </div>
            <h3 className="mb-3 font-bold text-gray-400 text-xl">
              Pupilfirst Pvt. Ltd.
            </h3>
            <p className="text-sm leading-snug tracking-wide text-opacity-100">
              Improvised the user experience and interface by adding UI
              components to the web app built using React JS. Contributed in
              integrating a Next JS app with a Large Language Model to provide
              health based prompts.
            </p>
          </div>
        </div>
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-[#101010]  border border-1 border-gray-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <img
              src="./assets/weblaunch.png"
              className="float-left h-44 w-44 rounded-full mr-4 sm:mb-3"
              alt="weblaunch"
            />
            <h3 className="font-bold text-gray-300 text-xl">
              Web Developer Intern
            </h3>
            <h3 className="mb-3 font-bold text-gray-400 text-xl">
              Weblaunch India
            </h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-opacity-100">
              Built projects using React JS. Conducted a training session on UI/
              UX using Figma to elevate the UI skills of my subordinates. Worked
              on a UI/ UX projects to manage student's portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
