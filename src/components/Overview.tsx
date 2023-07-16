import Image from "next/image";
import React from "react";
import assesmentIcon from "../assets/icons/view_agenda.svg";
import candidateIcon from "../assets/icons/candidates.svg";
import candidateSourceIcon from "../assets/icons/candidate_source.svg";
import totalPurposeIcon from "../assets/icons/total_purpose.svg";

type Props = {
  show:boolean;
};

const Overview = ({show}: Props) => {
  return (
    <div className={`w-full lg:h-40 flex-col justify-start items-start gap-4 transition-all ease-in duration-200 sm:inline-flex origin-top ${show?"opacity-100 flex visible h-fit scale-y-100":"opacity-0 sm:opacity-100 invisible sm:visible sm:scale-y-100 scale-y-0 sm:h-fit h-0"}`}>
      <div className="text-blue-900 text-lg font-medium leading-relaxed">
        Assessments Overview
      </div>
      <div className="w-full grid grid-cols-2 grid-rows-3 lg:flex-nowrap flex-wrap overflow-hidden rounded-xl border border-gray-300 justify-start items-start gap-px lg:inline-flex">
        <div className="lg:w-1/6 w-full col-start-1 col-end-2  self-stretch px-5 border-r border-b-2 lg:border-b-0  border-r-gray-300 py-4 bg-white flex-col justify-start items-start gap-4 inline-flex">
          <div className="text-blue-900 text-lg lg:text-sm font-semibold leading-tight">
            Total Assessment
          </div>
          <div className="justify-start items-center gap-2.5 inline-flex">
            <div className="w-10 h-10 p-2.5 bg-violet-100 rounded-lg justify-center items-center flex">
              <Image
                src={assesmentIcon}
                alt="Assesment"
                width={10}
                height={10}
                className="w-5 h-5"
              />
            </div>
            <div className="text-blue-900 text-xl font-bold leading-7">34</div>
          </div>
        </div>
        <div className="grow lg:w-2/6 w-full col-start-1 border-b-2 lg:border-b-0 row-start-2 col-span-2 shrink basis-0 self-stretch px-5 py-4 border-r-0 lg:border-r lg:border-r-gray-300 bg-white flex-col justify-start items-start gap-4 inline-flex">
          <div className="text-blue-900 text-lg lg:text-sm font-semibold leading-tight">
            Candidates
          </div>
          <div className="justify-start items-center gap-5 inline-flex">
            <div className="w-10 h-10 relative bg-violet-100 rounded-lg">
              <Image
                src={candidateIcon}
                alt="Candidate"
                width={10}
                height={10}
                className="w-10 h-10"
              />{" "}
            </div>

            <div className="flex-col justify-start items-start gap-px inline-flex ">
              <div className="justify-start items-center gap-1 inline-flex">
                <div className="text-blue-900 text-xl font-bold leading-7">
                  11,145
                </div>
                <div className="text-green-500 text-xs font-medium leading-none">
                  +89
                </div>
              </div>
              <div className="text-blue-900 text-xs whitespace-nowrap font-medium leading-none">
                Total Candidate
              </div>
            </div>
            <hr className="border-r-2 h-full w-1" />
            <div className="flex-col justify-start items-start gap-px inline-flex">
              <div className="justify-start items-center gap-1 inline-flex">
                <div className="text-blue-900 text-xl font-bold leading-7">
                  1,14
                </div>
                <div className="text-green-500 text-xs font-medium leading-none">
                  +89
                </div>
              </div>
              <div className="text-blue-900 text-xs whitespace-nowrap font-medium leading-none">
                Who Attamped
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/6 w-full row-start-3 col-start-1 col-span-2 self-stretch px-5 py-4  lg:border-r border-r-gray-300 bg-white flex-col justify-start items-start gap-4 inline-flex">
          <div className="text-blue-900 text-lg lg:text-sm font-semibold leading-tight">
            Candidates Source
          </div>
          <div className="justify-start items-center gap-3 sm:gap-5 w-full inline-flex">
            <div className="w-10 h-10 relative bg-pink-100 rounded-lg">
              <Image
                src={candidateSourceIcon}
                alt="Candidate Source"
                width={10}
                height={10}
                className="w-full h-full"
              />
            </div>
            <div className="flex-col justify-start items-start gap-px inline-flex">
              <div className="justify-start items-center gap-1 inline-flex">
                <div className="text-blue-900 text-xl font-bold leading-7">
                  11,000
                </div>
                <div className="text-green-500 text-xs font-medium leading-none">
                  +89
                </div>
              </div>
              <div className="text-blue-900 text-xs font-medium leading-none">
                E-mail
              </div>
            </div>

            <hr className="border-r-2 h-full w-1" />
            <div className="flex-col justify-start items-start gap-px inline-flex">
              <div className="justify-start items-center gap-1 inline-flex">
                <div className="text-blue-900 text-xl font-bold leading-7">
                  145
                </div>
                <div className="text-green-500 text-xs font-medium leading-none">
                  +89
                </div>
              </div>
              <div className="text-blue-900 text-xs font-medium whitespace-nowrap leading-none">
                Social Share
              </div>
            </div>

            <hr className="border-r-2 h-full w-1" />
            <div className="flex-col justify-start items-start gap-px inline-flex">
              <div className="justify-start items-center gap-1 inline-flex">
                <div className="text-blue-900 text-xl font-bold leading-7">
                  145
                </div>
                <div className="text-green-500 text-xs font-medium leading-none">
                  +89
                </div>
              </div>
              <div className="text-blue-900 text-xs font-medium whitespace-nowrap leading-none">
                Unique Link
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/6 w-full border-b-2 lg:border-b-0 col-start-2 self-stretch pl-5 pr-12 py-4 bg-white flex-col justify-start items-start gap-4 inline-flex">
          <div className="text-blue-900 text-lg  lg:text-sm font-semibold leading-tight">
            Total Purpose
          </div>
          <div className="justify-start items-center gap-2.5 inline-flex">
            <Image
              src={totalPurposeIcon}
              alt="Total Purpose"
              width={10}
              height={10}
              className="w-10 h-10"
            />

            <div className="text-blue-900 text-xl font-bold leading-7">11</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
