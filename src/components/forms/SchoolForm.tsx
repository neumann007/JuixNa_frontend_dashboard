"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "./InputField";
import InputField from "./InputField";
import Image from "next/image";

const currentYear = new Date().getFullYear();

const schema = z.object({
  schoolName: z.string().min(1, { message: "Required" }),
  schoolID: z.number().min(10, { message: "Required" }),
  category: z.enum(["A", "B", "C"], { message: "Required" }),
  location: z.string().min(1, { message: "Required" }),
  accommodation: z.string().min(1, { message: "Required" }),
  genderClass: z.string().min(1, { message: "Required" }),
  schoolType: z.string(),
  sector: z.string(),
  programme: z.string(),
  denomination: z.string(),
  principal: z.string(),
  schoolCrestImg: z.instanceof(File, { message: "Image is required" }),
  extraCurricular: z.string().optional(),
  establishedYear: z.date().max(new Date(), {
    message: "Established year can't be greater than current year",
  }),
  motto: z.string(),
  vision: z.string(),
  anthem: z.string(),
  slogan: z.string(),
  address: z.string().min(1, { message: "Address is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  email: z.string().email({ message: "Invalid email address!" }),
  website: z.string().optional(),
  img: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

const SchoolForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmit}>
      <h1 className="text-2xl font-semibold">Add New School Information</h1>
      <span className="flex flex-1 text-xs text-gray-400 font-medium gap-1">
        Basic
        Info
        <div className="flex-1 w-[90%] pt-2">
          <hr className="border-gray-200" />
        </div>
      </span>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row justify-start md:gap-10">
          <InputField
            label="School Name"
            name="schoolName"
            defaultValue={data?.schoolName}
            register={register}
            error={errors?.schoolName}
          />
          <InputField
            label="School Name"
            name="schoolName"
            defaultValue={data?.schoolName}
            register={register}
            error={errors?.schoolName}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row justify-start md:gap-10">
          <InputField
            label="School Name"
            name="schoolName"
            defaultValue={data?.schoolName}
            register={register}
            error={errors?.schoolName}
          />

          <InputField
            label="School Name"
            name="schoolName"
            defaultValue={data?.schoolName}
            register={register}
            error={errors?.schoolName}
          />
        </div>
      </div>
      <span className="flex flex-1 text-xs text-gray-400 font-medium gap-1">
        Academic Information
        <div className="flex-1 w-[90%] pt-2">
          <hr className="border-gray-200" />
        </div>
      </span>
      <span className="flex flex-1 text-xs text-gray-400 font-medium gap-1">
        Institutional Information
        <div className="flex-1 w-[90%] pt-2">
          <hr className="border-gray-200" />
        </div>
      </span>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row justify-start md:gap-10">
          <div className="flex flex-col w-1/2">
            <label className="text-gray-500 bg-transparent text-sm font-semibold px-1 pb-1">
              Category
            </label>
            <select
              id="category"
              className="text-gray-800 text-sm border-none bg-white rounded-md px-3 py-2 transition box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.1) 0px 18px 36px -18px inset;duration-300 ease focus:outline-none focus:border-none focus:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] shadow-sm"
              {...register("category")}
              defaultValue={data?.category}
            >
              <option value="" selected>
                Select a Category
              </option>
              <option value="A">Category A</option>
              <option value="B">Category B</option>
              <option value="C">Category C</option>
            </select>
            {errors.category?.message && (
              <p className="text-xs text-red-400 ">
                {errors.category.message.toString()}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row justify-start md:gap-10">
          <InputField
            label="School Name"
            name="schoolName"
            defaultValue={data?.schoolName}
            register={register}
            error={errors?.schoolName}
            type="date"
          />
          <div className="flex flex-col w-1/2">
            <label
              htmlFor="img"
              className="text-gray-500 flex flex-wrap bg-transparent text-sm font-semibold px-1 pb-1 items-center gap-2 cursor-pointer"
            >
              <Image src="/upload.png" alt="" width={18} height={18} />
              <span>Upload Image</span>
            </label>
            <input
              type="file"
              id="img"
              {...register("img")}
              className=" text-gray-800 text-sm border-none bg-white rounded-md px-3 py-2 transition box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.1) 0px 18px 36px -18px inset;duration-300 ease focus:outline-none focus:border-none focus:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] shadow-sm"
            />
            {errors.img?.message && (
              <p className="text-xs text-red-400 ">
                {errors.img.message.toString()}
              </p>
            )}
          </div>
        </div>
      </div>
      <span className="flex flex-1 text-xs text-gray-400 font-medium gap-1">
        Contact Information
        <div className="flex-1 w-[90%] pt-2">
          <hr className="border-gray-200" />
        </div>
      </span>
      <div className="justify-center items-center flex">
        <button className="bg-blue-400 text-white p-2 rounded-md w-[30%]">
          {type === "create" ? "Create" : "Update"}
        </button>
      </div>
    </form>
  );
};

export default SchoolForm;
