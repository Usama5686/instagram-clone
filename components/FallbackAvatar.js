import Avatar from "react-avatar";

function FallbackAvatar({ username }) {
  return (
    <div className=" border-2 p-[2px] border-red-500 rounded-full  cursor-pointer hover:scale-110 transition transform duration-200 ease-out relative">
      <Avatar name={username} round={true} className="!h-[48px] !w-[48px]" />
    </div>
  );
}

export default FallbackAvatar;
