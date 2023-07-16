import Image from "next/image";
import React from "react";
import cutIcon from "../assets/icons/cut.svg";
import arrowDownIcon from "../assets/icons/keyboard_arrow_down.svg";
import Tag from "./Tag";
type Props = {
  show: boolean;
  setShow: any;
};

const AddNewPopup = ({ show, setShow }: Props) => {
  return (
    <div
      className={`bg-[rgba(0,0,0,20%)] w-full h-full fixed top-0 left-0   ${
        show ? "visible z-50" : "invisible -z-10"
      }`}
    >
      <div
        className={`${
          show
            ? "translate-y-0 sm:translate-y-[-50%]"
            : "sm:translate-y-0 translate-y-[100%]"
        } sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] transition-all ease-linear duration-200 w-full sm:w-[35rem] h-[80%] flex-col fixed bottom-0 left-0  z-50  justify-start items-start inline-flex`}
      >
        <div className="self-stretch h-16 p-7 bg-white rounded-tl-lg rounded-tr-lg border border-gray-300 justify-between items-center gap-2.5 inline-flex">
          <div className="text-center hidden sm:flex text-blue-900 text-xl font-semibold">
            Create new assessment
          </div>
          <div className="text-center sm:hidden text-blue-900 text-xl font-semibold">
            Sub-Section Details
          </div>
          <Image
            src={cutIcon}
            alt="Cancel"
            width={10}
            height={10}
            className="w-8 h-8 cursor-pointer"
            onClick={() => setShow(() => !show)}
          />
        </div>
        <div className="self-stretch h-full overflow-y-scroll no-scrollbar  px-7 py-5 bg-white border border-gray-300 flex-col justify-start items-start gap-5 flex">
          <div className="self-stretch h-20 flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch h-5 flex-col justify-start items-start gap-1 flex">
              <div className="text-center text-blue-900 text-base font-medium">
                Name of assessment
              </div>
            </div>
            <div className="self-stretch h-12 p-3.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
              <input
                type="text"
                placeholder="Type Here"
                className="text-blue-900 placeholder:text-blue-900 text-sm font-medium appearance-none outline-none w-full h-full text-start"
              />
            </div>
          </div>
          <div className="self-stretch h-20 flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch h-5 flex-col justify-start items-start gap-1 flex">
              <div className="text-center text-blue-900 text-base font-medium">
                Purpose of the test is
              </div>
            </div>
            <div className="self-stretch h-12 p-3.5 bg-white rounded-lg border border-gray-300 justify-between items-center gap-2.5 inline-flex">
              <div className="text-center text-blue-900 text-sm font-medium">
                Select
              </div>
              <Image
                src={arrowDownIcon}
                alt="options"
                width={10}
                height={10}
                className="h-6 w-6"
              />{" "}
            </div>
          </div>
          <div className="self-stretch h-20 flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch h-5 flex-col justify-start items-start gap-1 flex">
              <div className="text-center text-blue-900 text-base font-medium">
                Description
              </div>
            </div>
            <div className="self-stretch h-12 p-3.5 bg-white rounded-lg border border-gray-300 justify-between items-center gap-2.5 inline-flex">
              <div className="text-center text-blue-900 text-sm font-medium">
                Select
              </div>
              <Image
                src={arrowDownIcon}
                alt="options"
                width={10}
                height={10}
                className="h-6 w-6"
              />
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch h-5 flex-col justify-start items-start gap-1 flex">
              <div className="text-center text-blue-900 text-base font-medium">
                Skills
              </div>
            </div>
            <div className="self-stretch h-fit flex-col justify-start items-start flex">
              <div className="self-stretch h-full p-4 rounded-tl-lg rounded-tr-lg border border-zinc-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch justify-start items-start gap-2.5 flex-wrap flex">
                  <Tag text="UI/UX and Design" />
                  <Tag text="No of Question" />
                  <Tag text="Web Development" />
                  <Tag text="UI/UX and Design" />
                  <Tag text="Web Development" />
                </div>
              </div>
              <div className="self-stretch h-12 p-4 rounded-bl-lg rounded-br-lg border border-zinc-200 flex-col justify-start items-start gap-2.5 flex">
                <input
                  className="appearance-none outline-none placeholder:text-blue-900 w-full h-full text-start text-blue-900 text-sm font-medium"
                  type="text"
                  placeholder="Type here"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-20 flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch h-5 flex-col justify-start items-start gap-1 flex">
              <div className="text-center text-blue-900 text-base font-medium">
                Duration of assessment
              </div>
            </div>
            <div className="self-stretch h-12 p-3.5 bg-white rounded-lg border border-gray-300 justify-between items-center gap-2.5 inline-flex">
              <input
                type="text"
                placeholder="HH:MM:SS"
                className="text-blue-900 placeholder:text-blue-900 text-sm font-medium appearance-none outline-none w-full h-full text-start"
              />

              <div className="w-6 h-6 relative opacity-0" />
            </div>
          </div>
        </div>
        <div className="self-stretch h-20 px-7 py-5 bg-white rounded-bl-lg rounded-br-lg shadow border-l border-r border-b border-gray-300 flex-col justify-center items-start gap-5 flex">
          <div className="self-stretch h-10 px-7 py-2.5 bg-sky-600 rounded-lg justify-center items-center gap-1 inline-flex">
            <div className="text-white text-sm font-semibold">Save</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewPopup;
