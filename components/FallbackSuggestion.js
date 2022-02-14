import Avatar from "react-avatar";

function FallbackAvatar({ username }) {
  return (
    <div className=" border p-[2px]  rounded-full  cursor-pointer ">
      <Avatar name={username} round={true} className="!w-[34px] !h-[34px] " />
    </div>
  );
}

export default FallbackAvatar;
