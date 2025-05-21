import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image 
        src="/avatar1.gif"
        alt="avatar"
        width={737}
        height={678}
        className="flip"
      />
    </div>
  );
};

export default Avatar;
