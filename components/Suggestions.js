import { Img } from "react-image";
import { useEffect, useState } from "react";
import faker from "faker";
import FallbackSuggestion from "./FallbackSuggestion";
function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <Img
            className="w-10 h-10 rounded-full border p-[2px]"
            src={profile.avatar}
            unloader={<FallbackSuggestion username={profile.username} />}
            loader={<FallbackSuggestion username={profile.username} />}
          />
          {/* <img
            className="w-10 h-10 rounded-full border p-[2px] "
            src={profile.avatar}
            alt=""
          /> */}
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400 truncate ">
              {" "}
              Works at{profile.company.name}
            </h3>
          </div>
          <button className="text-blue-400 text-xs ">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
