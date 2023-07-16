import Image from "next/image";
import React from "react";

import SuitCaseIcon from "../assets/icons/suitcase.svg";
import LinkIcon from "../assets/icons/link.svg";
import MenuIcon from "../assets/icons/3 dot.svg";
import CalenderIcon from "../assets/icons/calendar_today.svg";
type Props = {
  single?: boolean;
};

const AssignmentCard = ({ single = true }: Props) => {
  return (
    <div className="grow shrink basis-0 self-stretch p-4 bg-white rounded-xl border border-gray-300 flex-col justify-start items-start gap-4 inline-flex">
      <div className="self-stretch justify-between items-start gap-2.5 inline-flex">
        <div className="flex-col justify-center items-start gap-2.5 inline-flex">
          <Image
            src={SuitCaseIcon}
            alt="Briefcase"
            width={10}
            height={10}
            className="w-12 h-12"
          />
          <div className="flex-col justify-start items-start gap-0.5 flex">
            <div className="text-blue-900 text-lg font-medium leading-relaxed">
              Math Assessment
            </div>
            <div className="justify-start items-center gap-2.5 inline-flex">
              <div className="w-6 h-5 text-blue-900 text-sm font-semibold leading-tight">
                Job
              </div>
              <div className="h-full w-1 bg-slate-300" />
              <div className="w-24 justify-start items-start gap-1 flex">
                <Image
                  src={CalenderIcon}
                  alt="Briefcase"
                  width={10}
                  height={10}
                  className="w-3.5 h-3.5"
                />{" "}
                <div className="text-slate-400 text-xs font-medium">
                  20 Apr 2023
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-7 h-7 bg-white rounded-3xl justify-center items-center gap-2.5 flex">
          <Image
            src={MenuIcon}
            alt="Briefcase"
            width={10}
            height={10}
            className="w-5 h-5"
          />{" "}
        </div>
      </div>
      <div className="w-full h-1 border-b-2 border-dashed" />
      <div className="self-stretch justify-between items-center gap-5 inline-flex">
        <div className="justify-start items-start gap-3.5 flex">
          <div className="flex-col justify-start items-start inline-flex">
            <div className="text-blue-900 text-sm font-semibold leading-tight">
              00
            </div>
            <div className="text-blue-900 text-xs font-medium leading-none">
              Duration
            </div>
          </div>
          <div className="flex-col justify-start items-start inline-flex">
            <div className="text-blue-900 text-sm font-semibold leading-tight">
              00
            </div>
            <div className="text-blue-900 text-xs font-medium leading-none">
              Questions
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-2.5 flex">
          <div className="w-20 pl-1.5 pr-2 py-0.5 bg-white rounded-3xl border border-blue-900 justify-center items-center gap-1 flex">
            <Image
              src={LinkIcon}
              alt="Briefcase"
              width={10}
              height={10}
              className="w-5 h-5"
            />{" "}
            <div className="text-blue-900 text-sm font-medium leading-tight">
              Share
            </div>
          </div>
          {single ? (
            <div className="justify-start items-center gap-1 flex">
              <div className="w-7 h-7 px-1.5 py-1 bg-indigo-600 rounded-3xl border border-white flex-col items-center justify-center gap-2.5 inline-flex">
                <div className="text-center text-white text-sm font-bold">
                  LP
                </div>
              </div>
            </div>
          ) : (
            <div className="h-7 justify-start items-center gap-1 inline-flex">
              <div className="justify-center items-center flex relative sm:mr-6">
                <div className="w-7 h-7 px-1.5 py-1 bg-indigo-600 rounded-3xl border border-white flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-white text-sm font-bold">
                    LP
                  </div>
                </div>
                <div className="w-7 h-7 px-1.5 py-1 bg-blue-500 rounded-3xl border border-white flex-col justify-center absolute top-0 left-3 items-center gap-2.5 inline-flex">
                  <div className="text-center text-white text-sm font-bold">
                    LP
                  </div>
                </div>
                <div className="w-7 h-7 px-1.5 py-1 bg-pink-600 rounded-3xl border border-white flex-col justify-center absolute top-0 left-6 items-center gap-2.5 inline-flex">
                  <div className="text-center text-white text-sm font-bold">
                    LP
                  </div>
                </div>
              </div>
              <div className="text-center sm:hidden text-blue-900 text-xs font-semibold ml-6">
                +324
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
