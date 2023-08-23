import { useNavigate } from "react-router-dom";
import db from "./db.json";

export default function Projects() {
    const navigate = useNavigate();
  return (
    <div className="text-white mx-16 space-y-5 py-16">
      <button className="flex mx-10 " onClick={()=>navigate('/')}>
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
      <div className="pt-7 space-y-5">
        {db.data.map((item) => (
          <div key={item.id} className="px-[10%]">
            <a href={item.github_link} target="_blank">
            <div className="rounded-2xl flex mx-2 overflow-hidden bg-[#101010] text-white shadow-lg  border border-gray-700">
              <div className="">
                <img
                  className="h-52 w-64 object-cover items-center"
                  src={item.image}
                  alt="Thumbnail"
                />
              </div>
              <div className="px-6 py-6 inline">
                <div className="font-bold text-xl mb-2">
                  {item.project_name}
                </div>
                <p className="text-gray-400 text-base font-semibold">{item.description}</p>
                <div className="mt-7">
                {
                item.tags.map(tag=>
                    <p className="inline me-5 bg-zinc-800 px-2 py-1 rounded-full font-bold text-gray-400" key={tag.id}>#{tag.tag}</p>
                )
              }</div>
              </div>
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
