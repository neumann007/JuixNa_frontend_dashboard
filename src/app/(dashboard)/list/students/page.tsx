import Image from "next/image";

const SchoolDetailsPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* school info card */}
          <div className="bg-foeBlue py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="/gctu.png"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover "
              />
            </div>
          </div>
          <div className="w-2/3 flex flex-col justify-between gap-4"></div>
          {/* cards */}
          <div className="flex-1"></div>
        </div>
        {/* bottom */}
        <div className="">profile</div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/2"></div>
    </div>
  );
};

export default SchoolDetailsPage;
