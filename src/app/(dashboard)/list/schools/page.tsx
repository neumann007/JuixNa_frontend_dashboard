import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, schoolsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type School = {
  id: number;
  schoolId: string;
  name: string;
  email?: string;
  photo: string;
  category: string;
  location: string;
  schoolType: string;
  genderClass: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  // {
  //   header: "School ID",
  //   accessor: "schoolID",
  //   className: "hidden md:table-cell",
  // },
  {
    header: "Category",
    accessor: "category",
    className: "hidden lg:table-cell px-7",
  },
  {
    header: "Location",
    accessor: "location",
    className: "hidden md:table-cell",
  },
  {
    header: "School Type",
    accessor: "schoolType",
    className: "hidden lg:table-cell",
  },
  {
    header: "Gender",
    accessor: "genderClass",
    className: "hidden lg:table-cell px-9",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "md:table-cell",
  },
];

const SchoolsListPage = () => {
  const renderRow = (item: School) => (
    <tr
      key={item.id}
      className="border-t border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-foePurple"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      {/* <td className="hidden md:table-cell">{item.schoolId}</td> */}
      <td className="hidden lg:table-cell px-12">{item.category}</td>
      <td className="hidden md:table-cell">{item.location}</td>
      <td className="hidden lg:table-cell">{item.schoolType}</td>
      <td className="hidden lg:table-cell px-10">{item.genderClass}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/schools/${item.id}`}>
            <FormModal table="school" type="update" id={item.id} />
          </Link>
          {role === "admin" && (
            <FormModal table="school" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Schools</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-foeYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>{" "}
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-foeYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>{" "}
            {/* <button className="w-8 h-8 flex items-center justify-center rounded-full bg-foeYellow">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button> */}
            <FormModal table="school" type="create" />
          </div>
        </div>
      </div>
      {/* list */}

      <Table
        columns={columns}
        renderRow={renderRow}
        headerClass=""
        data={schoolsData}
      />

      {/* pagination */}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default SchoolsListPage;
