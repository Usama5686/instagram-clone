import faker from "faker";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Story from "./Story";
function Stories() {
  const { data: session } = useSession();
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(10)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200  rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black ">
      {session && (
        <Story img={session?.user.image} username={session?.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;

// import { useState } from "react";

// function Story({ img, username }) {
//   const [loading, setLoading] = useState(false);
//   return (
//     <div className={`${loading && "hidden"}`}>
//       <img
//         className={`h-14 w-14 rounded-full p-[1.5px] border-2 border-red-500 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out  `}
//         src={img}
//         alt={username}
//         onError={(event) => {
//           event.target.style.display = "none";

//           setLoading(true);
//         }}
//       />
//       {!loading && (
//         <p className="text-xs w-14 truncate text-center"> {username}</p>
//       )}
//     </div>
//   );
// }

// export default Story;
