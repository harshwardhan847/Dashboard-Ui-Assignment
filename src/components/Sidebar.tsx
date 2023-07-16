import Image from "next/image";
import React from "react";
import dashboardIcon from "../assets/icons/dashboard.svg";
import Admin from "../assets/icons/admin_meds.svg";
import Note from "../assets/icons/note_alt.svg";
import Quiz from "../assets/icons/quiz.svg";
import cutIcon from "../assets/icons/cut.svg";
type Props = {
  show: boolean;
  setShow: any;
};
const Sidebar = ({ show, setShow }: Props) => {
  return (
    <div
      className={`w-[90%] z-50 bg-sky-50  sm:w-36 h-[992px] pl-[30px] pr-5 pt-4 pb-5 sm:bg-white justify-start items-start gap-2.5 inline-flex fixed sm:static top-0 left-0 ease-in-out duration-300 ${
        show ? "translate-x-0" : "translate-x-[-100%]"
      }  sm:translate-x-0`}
    >
      <div className="flex-col w-full justify-start items-center gap-4 inline-flex">
        <div className="w-full mt-6 sm:hidden h-9 justify-between items-start gap-2.5 inline-flex">
          <div className="text-blue-900 text-lg  sm:text-base font-medium leading-tight">
            Menu
          </div>
          <Image
            src={cutIcon}
            alt="cancel"
            width={10}
            height={10}
            className="w-7 h-7"
            onClick={()=>setShow(()=>!show)}
          />{" "}
        </div>
        <div className="w-full sm:w-[90px] pb-2.5 flex-col justify-start items-start gap-4 sm:gap-0.5 flex">
          <div className="w-full sm:w-[90px] flex-row h-fit sm:h-[70px] px-5 py-5 sm:py-2.5 bg-transparent sm:bg-white rounded-lg sm:flex-col justify-start sm:justify-center items-center gap-1.5 flex">
            <Image
              src={dashboardIcon}
              className="w-5 h-5"
              alt="Dashboard"
              width={10}
              height={10}
            />
            <div className="text-blue-900 text-lg sm:text-xs font-medium leading-none">
              Dashboard
            </div>
            <div className="w-[7px] h-[7px] left-[78px] top-[5px] absolute opacity-0 bg-orange-700 rounded-[10px]" />
          </div>
          <div className="w-full sm:w-[90px] h-fit sm:h-[70px] px-5 py-5 sm:py-2.5 bg-sky-100 rounded-lg border border-sky-600 flex-row sm:flex-col justify-start sm:justify-center items-center gap-1.5 flex">
            <Image
              src={Note}
              className="w-5 h-5"
              alt="Note"
              width={10}
              height={10}
            />
            <div className="text-sky-600 text-lg sm:text-xs font-medium leading-none">
              Assessment
            </div>
            <div className="w-[7px] h-[7px] left-[78px] top-[5px] absolute opacity-0 bg-orange-700 rounded-[10px]" />
          </div>
          <div className="w-full sm:w-[90px] h-fit sm:h-[70px] px-5 py-5 sm:py-2.5 sm:bg-white bg-transparent rounded-lg flex-row sm:flex-col justify-start sm:justify-center items-center gap-1.5 flex">
            <Image
              src={Quiz}
              className="w-5 h-5"
              alt="Quiz"
              width={10}
              height={10}
            />
            <div className="text-blue-900 text-lg sm:text-xs text-center font-medium whitespace-nowrap leading-none">
              My Library
            </div>
          </div>
        </div>
        <div className="self-stretch h-fit sm:h-[120px] flex-row w-full sm:flex-col justify-start items-center gap-4 flex">
          <div className="flex-row-reverse sm:flex-col justify-between sm:justify-start items-center pt-5 sm:p-0 gap-1.5 flex w-full  border-t-2 border-t-slate-300 border-dashed">
            <div className="h-[18px]  px-2 py-1.5 bg-rose-100 rounded-[22px] border border-orange-700 justify-start sm:mt-6 items-center gap-1.5 inline-flex">
              <div className="text-orange-700 text-[10px] font-medium">
                Admin
              </div>
            </div>
            <div className="sm:h-20 h-fit px-5 py-5 sm:py-2.5 sm:bg-white bg-transparent rounded-lg flex-row w-full sm:flex-col sm:justify-center justify-start items-center gap-1.5 flex">
              <Image
                src={Admin}
                className="w-5 h-5"
                alt="Admin"
                width={10}
                height={10}
              />
              <div className="text-center text-blue-900 text-lg sm:text-xs font-medium leading-none">
                Round
                <br className="hidden sm:static" />
                 {" "}
                Status
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
