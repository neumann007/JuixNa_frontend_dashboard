import Table from "@/components/Table";
import { programmes } from "@/lib/data";
import Image from "next/image";

type Programme = {
  id: string;
  name: string;
  electives: [string];
};

const programmeColumns = [
  {
    header: "Programme",
    accessor: "programme",
    className: "table-cell w-1/2",
  },
  {
    header: "Electives",
    accessor: "electives",
    className: "table-cell w-1/2",
  },
];

const SchoolInfoPage = () => {
  const renderRow = (item: Programme) => (
    <div className="flex">
      <tr
        key={item.id}
        className="flex-1 flex-col border-t border-gray-200 text-sm text-gray-500 w-1/5"
      >
        <td className="table-cell px-2">{item.name}</td>
      </tr>
      <tr
        key={item.id}
        className="flex-1 flex-col border-t border-gray-300 even:bg-gray-100 text-sm w-4/5"
      >
        <td className="table-cell px-2">
          {item.electives.map((elect) => (
            <ul key={elect}>
              <li className="py-2">{elect}</li>
            </ul>
          ))}
        </td>
      </tr>
    </div>
  );

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-full">
        {/* top */}
        <div className="flex flex-col sm:flex lg:flex-row gap-6">
          {/* school info card */}
          <div className="bg-gray-300 py-6 px-4 rounded-md flex w-full lg:flex-col lg:w-1/4 gap-4 h-fit">
            <div className="items-center text-center">
              <Image
                src="/presec.png"
                alt=""
                width={146}
                height={146}
                className="w-50 h-50 rounded-full object-cover "
              />
            </div>
            <div className="w-full flex flex-col lg:flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Presec Legon SHS</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full flex flex-row items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>Legon, Accra, Greater Accra Region, Ghana.</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full flex flex-row items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>Established1938</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full flex flex-row items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>info@preseclegon.edu.gh</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full flex flex-row items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+233 30 250 0737</span>
                </div>
              </div>
            </div>
          </div>
          {/* cards */}
          {/* <div className=" flex flex-col gap-4 justify-between flex-wrap">
            
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
          </div> */}
          {/* details */}
          <div className="flex-1 overflow-y-scroll no-scrollbar scrollbar-hide bg-white rounded-md">
            <div>
              <h1 className="text-2xl font-bold justify-start px-4 py-2 ">
                Presbyterian Boys Secondary School
              </h1>
            </div>
            <div className="pl-5">
              <hr className="border-gray-100 w-[99%]" />
              {/* sub-sections */}
              <div className="flex flex-1 flex-row p-5">
                <div className=" w-1/5 gap-4">
                  <h1 className="text-gray-400 text-md font-semibold">
                    Profile
                  </h1>
                </div>
                <div className="w-3/5 gap-2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer arcu sem, dignissim in ultricies quis, hendrerit at
                    ex. Praesent et ex tincidunt urna cursus varius. Vestibulum
                    vehicula molestie lorem, quis imperdiet risus aliquam at.
                    Donec nec ultricies eros. Integer consectetur porttitor
                    enim, at hendrerit arcu efficitur sed. Nullam sed lorem eget
                    magna euismod gravida. Vivamus malesuada elit neque, eget
                    vehicula enim congue nec. Nunc blandit vulputate tellus, vel
                    lobortis felis sagittis vitae.
                  </p>
                </div>
                <div className="hidden w-1/5 justify-start text-center">
                  <span>Edit</span>
                </div>
              </div>
              <hr className="border-gray-100 w-[99%]" />
              {/* sub-sections */}
              <div className="flex flex-1 flex-row p-5">
                <div className=" w-1/5 gap-4">
                  <h1 className="text-gray-400 text-md font-semibold">
                    Accommodation
                  </h1>
                </div>
                <div className="w-3/5 gap-2">
                  <p>Boarding Facilities Only</p>
                </div>
                <div className="hidden w-1/5 justify-start text-center">
                  <span>Edit</span>
                </div>
              </div>
              <hr className="border-gray-100 w-[99%]" />
              {/* sub-sections */}
              <div className="flex flex-1 flex-row p-5">
                <div className=" w-1/5 gap-4">
                  <h1 className="text-gray-400 text-md font-semibold">
                    Sector
                  </h1>
                </div>
                <div className="w-3/5 gap-2">
                  <p>Public</p>
                </div>
                <div className="hidden w-1/5 justify-start text-center">
                  <span>Edit</span>
                </div>
              </div>
              <hr className="border-gray-100 w-[99%]" />
              {/* sub-sections */}
              <div className="flex flex-1 flex-row p-5">
                <div className=" w-1/5 gap-4">
                  <h1 className="text-gray-400 text-md font-semibold">
                    Gender Classification
                  </h1>
                </div>
                <div className="w-3/5 gap-2">
                  <p>Boys</p>
                </div>
                <div className="hidden w-1/5 justify-start text-center">
                  <span>Edit</span>
                </div>
              </div>
              <hr className="border-gray-100 w-[99%]" />
              {/* sub-sections */}
              <div className="flex flex-1 flex-row p-5">
                <div className=" w-1/5 gap-4">
                  <h1 className="text-gray-400 text-md font-semibold">Type</h1>
                </div>
                <div className="w-3/5 gap-2">
                  <p>Senior High School (SHS)</p>
                </div>
                <div className="hidden w-1/5 justify-start text-center">
                  <span>Edit</span>
                </div>
              </div>
              <hr className="border-gray-100 w-[99%]" />

              {/* sub-sections */}
              <div className="flex flex-1 flex-row p-5">
                <div className=" w-1/5 gap-6">
                  <h1 className="text-gray-400 text-md font-semibold">
                    Programmes
                  </h1>
                </div>
                <div className="w-4/6 gap-2 px-10">
                  <Table
                    columns={programmeColumns}
                    renderRow={renderRow}
                    headerClass="flex"
                    data={programmes}
                  />
                </div>
                <div className="hidden  w-1/5 justify-start text-center">
                  <span>Edit</span>
                </div>
              </div>
              <hr className="border-gray-100 w-[99%]" />

              {/* sub-sections */}
              <div className="flex flex-1 flex-row p-5">
                <div className=" w-1/5 gap-4">
                  <h1 className="text-gray-400 text-md font-semibold">
                    Extra-Curricular
                    <br /> Activities
                  </h1>
                </div>
                <div className="w-3/5 gap-2">
                  <p>
                    <ul className="">
                      <li className="">
                        Sports (e.g., football, basketball, athletics)
                      </li>
                      <li className="pt-2">Debate and Drama clubs</li>
                      <li className="pt-2">Science and Mathematics clubs</li>
                      <li className="pt-2">Cultural and Music groups</li>
                      <li className="pt-2">Religious groups and societies</li>
                    </ul>
                  </p>
                </div>
                <div className="hidden w-1/5 justify-start text-center">
                  <span>Edit</span>
                </div>
              </div>
              <hr className="border-gray-100 w-[99%]" />

              {/* sub-sections */}
              <div className="flex flex-1 flex-row p-5">
                <div className=" w-1/5 gap-4">
                  <h1 className="text-gray-400 text-md font-semibold">
                    Denomination
                  </h1>
                </div>
                <div className="w-3/5 gap-2">
                  <p>Presbyterian</p>
                </div>
                <div className="hidden w-1/5 justify-start text-center">
                  <span>Edit</span>
                </div>
              </div>
              <hr className="border-gray-100 w-[99%]" />

              {/* sub-sections */}
              <div className="flex flex-1 flex-row p-5">
                <div className=" w-1/5 gap-4">
                  <h1 className="text-gray-400 text-md font-semibold">
                    Headmaster
                  </h1>
                </div>
                <div className="w-3/5 gap-2">
                  <p>David Odjija</p>
                </div>
                <div className="hidden w-1/5 justify-start text-center">
                  <span>Edit</span>
                </div>
              </div>
              <hr className="border-gray-100 w-[99%]" />

              {/* sub-sections */}
              <div className="flex flex-1 flex-row p-5">
                <div className=" w-1/5 gap-4">
                  <h1 className="text-gray-400 text-md font-semibold">
                    School Crest
                  </h1>
                </div>
                <div className="w-3/5 gap-2">
                  <p>
                    {`The school's crest features a shield with the Presbyterian symbol—the St. Andrew's Cross (Scottish flag) with the Swiss flag embedded and a burning torch in the middle—encapsulated by the school's motto, 'In Lumine Tuo Videbimus Lumen.'`}
                  </p>
                </div>
                <div className="hidden w-1/5 justify-start text-center">
                  <span>Edit</span>
                </div>
              </div>
              <hr className="border-gray-100 w-[99%]" />

              {/* sub-sections */}
              <div className="flex flex-1 flex-row p-5">
                <div className=" w-1/5 gap-4">
                  <h1 className="text-gray-400 text-md font-semibold">
                    Anthem
                  </h1>
                </div>
                <div className="w-3/5 gap-2">
                  <p>{`'Happy Are We,' written by J. L. Anang and transcribed by Stephen Appiah Danquah`}</p>
                </div>
                <div className="hidden w-1/5 justify-start text-center">
                  <span>Edit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-4 py-5">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Edit School Data
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Delete School Data
          </button>
        </div>
      </div>
      {/* right */}
      {/* <div className="w-full xl:w-1/5"></div> */}
    </div>
  );
};

export default SchoolInfoPage;
