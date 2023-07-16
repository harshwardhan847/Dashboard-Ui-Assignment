"use client"
import MyAssesment from "@/components/MyAssesment";
import Overview from "@/components/Overview";
import Sidebar from "@/components/Sidebar";
import TopTab from "@/components/TopTab";
import { useState } from "react";

export default function Home() {
  const [showSidebar, setSetshowSidebar] = useState(false)
  const [showOverview,setShowOverview] = useState(false);
  return (
    <div className="h-full w-fit sm:w-screen flex items-start relative bg-slate-100  min-h-[100vh]">
      {/* side bar */}
      <Sidebar show={showSidebar} setShow={setSetshowSidebar} />
      <main className="w-full h-full x-4 sm:mx-5">
        <TopTab show={showSidebar} setshow={setSetshowSidebar} />
        <main className="w-full h-fit p-5 bg-white rounded-b-xl">
          <Overview show={showOverview} />
          <MyAssesment showOverview={showOverview} setShowOverview={setShowOverview}/>
        </main>
      </main>
    </div>
  );
}
