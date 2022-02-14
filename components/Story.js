import { Img } from "react-image";
import FallbackAvatar from "./FallbackAvatar";

function Story({ img, username }) {
  return (
    <div>
      <Img
        className="h-14 w-14 rounded-full p-[2px] border-2 border-red-500 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out  "
        src={img}
        unloader={<FallbackAvatar username={username} />}
        loader={<FallbackAvatar username={username} />}
      />

      <p className="text-xs w-14 truncate text-center"> {username}</p>
    </div>
  );
}

export default Story;
