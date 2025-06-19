import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image 
        src=""
        alt="avatar"
        width={737}
        height={678}
        className=""
      />
    </div>
  );
};

export default Avatar;
