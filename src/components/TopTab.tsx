import Image from "next/image";
import React from "react";
import MobileIcon from "../assets/icons/mobile_screen_share.svg";
import HamIcon from "../assets/icons/segment.svg";
type Props = {
  show: boolean;
  setshow: any;
};

const TopTab = ({ show, setshow }: Props) => {
  return (
    <>
      <div className="w-full h-16 px-5 bg-white sm:rounded-t-3xl sm:border-b border-zinc-200 flex-col justify-center items-start gap-6 inline-flex">
        <div className="self-stretch grow shrink basis-0 justify-between items-center inline-flex">
          <Image
            src={HamIcon}
            onClick={() => setshow(() => !show)}
            alt="Menu"
            width={10}
            height={10}
            className="w-10 h-10 p-1 sm:hidden bg-sky-50 rounded-full flex items-center justify-center mr-2"
          />
          <div className="w-full self-stretch justify-start items-center gap-5 flex">
            <div className="text-blue-900 text-xl font-semibold leading-7">
              Assessment
            </div>
            <div className="border-r-2 hidden sm:static  h-[70%] w-[3px]"></div>
            <div className="justify-start hidden items-start gap-5 sm:flex">
              <div className="w-auto h-16 py-2.5 bg-white border-b border-sky-600 justify-center items-center gap-2.5 flex">
                <div className="text-sky-600 text-sm font-semibold">
                  My Assessments
                </div>
              </div>
            </div>
          </div>
          <div className="w-10 h-10 p-1 bg-white rounded-3xl justify-center items-center gap-2.5 flex">
            <Image
              src={MobileIcon}
              alt="mobile"
              width={10}
              height={10}
              className="w-10 h-10"
            />
          </div>
        </div>
      </div>
      <div className="w-full sm:hidden h-12 justify-start items-start inline-flex">
        <div className="grow shrink basis-0 h-12 py-2.5 bg-white border-b-2 border-sky-600 justify-center items-center gap-2.5 flex">
          <div className="text-sky-600 text-base font-medium">My Assessments</div>
        </div>
        <div className="grow shrink basis-0 h-12 py-2.5 bg-white border-b-2 border-slate-100 justify-center items-center gap-2.5 flex">
          <div className="text-slate-500 text-base font-medium">
            Unstop Assessments
          </div>
        </div>
      </div>
    </>
  );
};

export default TopTab;
