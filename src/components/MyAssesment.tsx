"use client";
import Image from "next/image";
import React, { useState } from "react";
import AddIcon from "../assets/icons/add.svg";
import AssignmentCard from "./AssignmentCard";
import AddNewPopup from "./AddNewPopup";

type Props = {
  showOverview: boolean;
  setShowOverview: any;
};

const MyAssesment = ({ showOverview, setShowOverview }: Props) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="flex flex-col h-fit transition-all ease-in duration-200">
      <AddNewPopup show={showPopup} setShow={setShowPopup} />
      <div className="w-full h-10 justify-between items-end gap-2.5 inline-flex mb-4">
        <div className="text-blue-900 text-lg font-bold lg:font-medium leading-relaxed">
          My Assessment
        </div>
        <div className="justify-end sm:hidden items-center gap-4 flex">
          {/* search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <g clip-path="url(#clip0_0_1035)">
              <path
                d="M14.2083 12.8333H13.4842L13.2275 12.5858C14.1258 11.5408 14.6667 10.1842 14.6667 8.70833C14.6667 5.4175 11.9992 2.75 8.70833 2.75C5.4175 2.75 2.75 5.4175 2.75 8.70833C2.75 11.9992 5.4175 14.6667 8.70833 14.6667C10.1842 14.6667 11.5408 14.1258 12.5858 13.2275L12.8333 13.4842V14.2083L17.4167 18.7825L18.7825 17.4167L14.2083 12.8333ZM8.70833 12.8333C6.42583 12.8333 4.58333 10.9908 4.58333 8.70833C4.58333 6.42583 6.42583 4.58333 8.70833 4.58333C10.9908 4.58333 12.8333 6.42583 12.8333 8.70833C12.8333 10.9908 10.9908 12.8333 8.70833 12.8333Z"
                fill="#1C4980"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_1035">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {/* filter */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_0_1037)">
              <path
                d="M4.25 5.66C4.35 5.79 9.99 12.99 9.99 12.99V19C9.99 19.55 10.44 20 11 20H13.01C13.56 20 14.02 19.55 14.02 19V12.98C14.02 12.98 19.51 5.96 19.77 5.64C20.03 5.32 20 5 20 5C20 4.45 19.55 4 18.99 4H5.01C4.4 4 4 4.48 4 5C4 5.2 4.06 5.44 4.25 5.66Z"
                fill="#1C4980"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_1037">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {/* bor chart icon */}
          <div
            onClick={() => setShowOverview(() => !showOverview)}
            className={`${
              showOverview && "border-2 origin-center bg-sky-100 text-sky-400 transition-all ease-in-out duration-150 border-blue-500 rounded-full p-2"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M0 16V5H4V16H0ZM6 16V0H10V16H6ZM12 16V9H16V16H12Z"
                fill="#1C4980"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full  justify-start items-start gap-7 inline-grid md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-3">
        {/* Add Assignment Card */}
        <div
          onClick={() => setShowPopup(() => !showPopup)}
          className="grow cursor-pointer shrink basis-0 self-stretch p-7 bg-slate-50 rounded-xl border border-gray-300 flex-col justify-center items-center gap-3 inline-flex"
        >
          <div className="flex-col justify-start items-center gap-2.5 flex">
            <div className="w-16 h-16 p-2.5 bg-white rounded-3xl justify-center items-center gap-2.5 inline-flex">
              <Image
                src={AddIcon}
                alt="Add"
                width={10}
                height={10}
                className="w-10 h-10"
              />
            </div>
            <div className="text-center text-blue-900 text-lg font-medium">
              New Assessment
            </div>
          </div>
          <div className="self-stretch text-center text-blue-900 text-xs font-medium">
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </div>
        </div>
        <AssignmentCard />
        <AssignmentCard single={false} />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
      </div>
      <div className="w-96 h-36" />
    </div>
  );
};

export default MyAssesment;
