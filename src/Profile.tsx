import { useNavigate } from "react-router-dom";
import profile_img from "./assets/profile_img.png";
import cv from "./assets/Yogesh's Resume.pdf";

export default function Profile() {

  const navigator = useNavigate()

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <img
          className="h-64 w-64 ring-2 ring-gray-600 rounded-full p-1"
          src={profile_img}
          alt="Yogesh Bhutkar"
        ></img>
        <h2 className="text-center text-4xl font-oleoScript pt-2">
          Yogesh Bhutkar
        </h2>
        <div className="flex justify-between pt-6 space-x-5">
          <a
            href={cv}
            download="Yogesh Bhutkar"
            target="_blank" 
            rel="noreferrer"
          >
            <button className="bg-[#202020]  border border-1 border-gray-700 px-4 py-2 rounded-lg">
            <p className="text-md font-semibold text-gray-300 ">
              Download CV
            </p>
            </button>
          </a>
          <button onClick={()=>navigator('/projects')} className="flex pt-2 bg-[#202020] border border-1 border-gray-700 px-4 py-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-rose-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            <p className="pl-2 bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500  text-md font-semibold text-transparent ">
              Projects
            </p>
          </button>
        </div>
      </div>
        <div className="fixed bottom-16 flex items-center justify-center pb-5">
        <button onClick={()=>navigator('/experience')} className="flex pt-2 mt-5 px-4 py-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-rose-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            <p className="pl-2 bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500  text-md font-semibold text-transparent ">
              View Industry Experience
            </p>
          </button>
          </div>
    </div>
  );
}
