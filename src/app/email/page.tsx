// import React from 'react'
"use client"
import Image from "next/image";
import UserTable from "../../components/UserTable"
import {Bell, CircleHelp, ChevronDown, ArrowUpRight, Filter, CirclePlus, DollarSign, Search, User,} from 'lucide-react'
// import PostTable from "@/components/posts/PostTable";
import EmailTable from "@/components/emailTable";
import { Pagination } from "@/components/ui/pagination";
import profilepic from "@/components/Img/profilepic.jpeg";
import Circ from "@/components/Img/Circ.png"
// import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div className="lg:w-[1200px] lg:h-[1024px] lg:gap-[0px] w-[430px] h-[956px] top-[95px] left-[1454px] gap-[32px] lg:bg-[#FAFAFA] bg-[#FAFAFA]">
      


        <section className="lg:w-[1200px] lg:h-[67px] lg:left-[298px]  lg:pt-[13.5px] lg:pr-[10px] lg:pb-[13.5px] lg:pl-[10px] lg:gap-[0px] lg:border-t-[0px] lg:border-r-[0px]  lg:border-b-[0.5px]  lg:border-l-[0px]  lg:border-[#DCDCDC] lg:block hidden  ">
    {/* <div className="lg:flex lg:justify-between"> */}
    <div className="lg:flex lg:justify-between">
     
    <div className="lg:w-[266px] lg:h-[40px] lg:rounded-md lg:border lg:border-gray-300 lg:relative">
  <Search className="lg:absolute lg:w-[16px] lg:[p-2.13px] lg:h-[16px] lg:left-3 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:text-gray-500" />

  <input 
    type="text" 
    placeholder="Search option..." 
    className="lg:w-full lg:h-full lg:pl-10 lg:pr-[12px] lg:py-[0px] lg:border-none rounded-sm lg:outline-none lg:text-[14px] lg:font-normal lg:leading-[20px] lg:text-left lg:text-[#525252]"
  />
</div>


    <div className="lg:flex lg:justify-between lg:w-[152px] lg:h-[40px] lg:gap-[20px] lg:items-center">
     <div className="lg:w-[24px] lg:h-[24px] lg:gap-[0px]">
     <Bell className="lg:w-[20] lg:h-[20px] lg:gap-[0px] lg:t-[2px] lg:left-[3px] lg:border-t-[0px] lg:border-r-[0px]  lg:border-b-[0px]  lg:border-l-[0px] " />
      </div>
      <div className="lg:w-[24px] lg:h-[24px] lg:gap-[0px]">
        <CircleHelp className="lg:w-[20px] lg:h-[20px] lg:gap-[0px] lg:t-[2px] lg:left-[2px] lg:border-t-[0px] lg:border-r-[0px]  lg:border-b-[0px]  lg:border-l-[0px] " />
      </div>
   
      <div className="lg:w-[64px] lg:h-[40px] lg:gap-[4px] lg:flex lg:justify-between">
        <div className="lg:w-[40px] lg:h-[40px] lg:gap-[0px]">
     <Image src={profilepic} alt="Profile Picture" className="lg:w-[40px] lg:h-[40px] lg:gap-[0px] lg:rounded-full"  />
       
      </div>
        <div className="lg:w-[20px] lg:h-[20px] lg:gap-[0px]  lg:pt-[5px] lg:pr-[0px] lg:pb-[5px] lg:pl-[0px]">
        <DropdownMenu>
          <DropdownMenuTrigger>
          <ChevronDown className="lg:w-[20px] lg:h-[20px]  lg:top-[7.5px] lg:left-[15px] lg:gap-[0px] lg:pt-[2px] lg:pr-[0px] lg:pb-[0px] lg:pl-[0px] lg:text-[#525252]" />
          </DropdownMenuTrigger>
          {/* <DropdownMenuContent> */}
          <DropdownMenuContent className=" lg:mt-5">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </div>
    </div>
    </div>
  
   </section>
   <Navbar/>
   <div className="lg:w-[254px] lg:h-[48px] lg:bg-transparent lg:top-[83px] lg:left-[291px] bg-transparent lg:gap-0
    gap-[8px] lg:pr-0 lg:ml-8 lg:mt-3 lg:justify-between justify-between mt-[10px] top-[12px] w-[430px] h-[50px] lg:pl-0 pl-6">
        <div className="lg:w-[302px] lg:h-[29px] lg:mb-0 mb-2 bg-transparent w-[382px] h-[25px] ">
          <h2 className="lg-font-semibold lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#525252]
font-semibold text-[20.5px] leading-[24.81px] text-left text-[#525252]">
Email Template Overview
          </h2>
        </div>
        <div className="lg:w-[302px] lg:h-[19px] w-[382px] h-[17px] bg-transparent">        
          <p className="lg:font-normal  lg:text-[16px] lg:leading-[19.36px] lg:text-[#525252] lg:text-left
font-normal text-[13.37px] leading-[16.54px]  text-left text-[#525252]">
  Showing records from the last .....</p>
        </div>
      </div>
   <div className="lg:mx-8 mx-0 lg:w-[0px] lg:bg-transparent bg-transparent lg: lg:h-[400px] w-[430px]  h-[830px] lg:top-[0px] lg:left-[0px] lg:gap-[0px]  top-[-14px] left-[6229px] gap-[0px] " >
   {/* w-[376px] h-[3206.78px]  h-[956px] lg:h-[0px] */}
        <section className="lg:w-[1044px] lg:h-[134px] lg:top-[97px] lg:pl-0 lg:pr-0 lg:gap-[16px] lg:items-center  lg:flex  lg:justify-between  lg:bg-transparent lg:mt-5 
        mt-5 w-[430px]  h-[430px] top-[-14px] left-[6229px] gap-[0px] bg-transparent pl-[24px] pr-[24px]">
    <div className="lg:w-[337.33px] lg:h-[134px] lg:pt-[23px] lg:pr-[24px] lg:pb-[28px] lg:pl-[24px] lg:gap-[3px] lg:rounded-xl lg:border-t-[0px] lg:border-r-[0px] lg:border-b-[0px] lg:border-l-[0px] 
     w-[382px]  h-[134px] pt-[23px] pr-[24px] pb-[28px] pl-[24px] gap-[3px] rounded-lg border-t-[1px] border-r-[0px] border-b-[0px] border-l-[0px] lg:bg-white bg-white flex-col justify-center items-center lg:mt-0 lg:shadow-2xl ">

     <div className="lg:flex lg:w-[289.33px] lg:h-[24px] lg:gap-[0px] lg:justify-between flex w-[334px]
     h-[24px] gap-[0px] justify-between lg:bg-none lg:items-center items-center">
     <h4 className="lg:w-[115px] lg:h-[17px] lg:gap-[0px] lg:font-medium lg:text-[14px] lg:leading-[16.94px] lg:text-left lg:text-[#0A0A0A] w-[105px] h-[20px] g-[0px] text-[14px] font-medium leading-[16.94px] text-left  lg:items-center items-center text-[#0A0A0A]">
     Total Templates
     </h4>
     <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px]"><DollarSign className="lg:top-[5px] lg:left-[6px] lg:gap-[0px] lg:border-none w-[24px] h-[24px]" /></p>
     </div>
    
     <div className="lg:w-[289.33px] lg:h-[44px] lg:bg-transparent bg-transparent lg:gap-[0px] w-[336px] h-[44px] gap-[0px] items-center justify-center"> 
    <div className="lg:w-[289.33px] lg:h-[29px] lg:gap-[0px] w-[334px] h-[29px] gap-[0px]">
    <h1 className="lg:font-semibold lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#0A0A0A] text-[24px] font-semibold leading-[29.05px] 
    text-left text-[#0A0A0A] lg:items-center items-center justify-center">
    $45,000.00
    </h1>
    </div>
    <div className="lg:w-[289.33px] lg:h-[15px] lg:gap-[0px] w-[334px] h-[15px] gap-[0px] lg:mt-1 mt-1">
    <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#525252] font-normal text-[12px]
     leading-[12.52px] text-left lg:items-center items-center text-[#525252]"> 
   +20% from last month
    </p>
    </div>
     </div>
    </div>
   
    <div className="lg:w-[337.33px] lg:h-[134px] lg:pt-[23px] lg:pr-[24px] lg:pb-[28px] lg:pl-[24px] lg:gap-[3px] lg:rounded-xl lg:border-t-[0px] lg:border-r-[0px] lg:border-b-[0px] lg:border-l-[0px]
      w-[382px]  h-[134px] pt-[23px] pr-[24px] pb-[28px] pl-[24px] gap-[3px] rounded-lg border-t-[1px] border-r-[0px] border-b-[0px] border-l-[0px] lg:bg-white bg-white flex-col justify-center items-center lg:mt-0  lg:shadow-2xl mt-3">
   
     <div className="lg:flex lg:w-[351px] lg:h-[24px] lg:gap-[0px] lg:justify-between lg:bg-transparent bg-transparent flex  w-[334px]
     h-[24px] gap-[0px] justify-between lg:bg-none lg:items-center items-center">
     <h4 className="lg:w-[115px] lg:h-[17px] lg:gap-[0px] lg:font-medium lg:text-[14px] lg:leading-[16.94px] lg:text-left lg:text-[#0A0A0A] w-[115px] h-[17px] g-[0px] text-[14px] font-medium leading-[16.94px] text-left lg:items-center items-center text-[#0A0A0A]">
     Recent Additions
     </h4>
     <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px] "><User className="lg:top-[5px] lg:left-[6px] 
     lg:gap-[0px] lg:border-none w-[24px] h-[24px] " /></p>
      {/* <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px] "> <Image src={Circ} alt="Profile Picture" className=""/></p> */}
     </div>
    
     <div className="lg:w-[289.33px] lg:h-[44px] lg:gap-[0px] w-[336px] h-[44px] gap-[0px] items-center justify-center"> 
    <div className="lg:w-[289.33px] lg:h-[29px] lg:gap-[0px] w-[334px] h-[29px] gap-[0px]">
    
    <h1 className="lg:font-semibold lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#0A0A0A] text-[24px] font-semibold leading-[29.05px] text-left text-[#0A0A0A] lg:items-center items-center justify-center">
   4,000
    </h1>
    </div>
    <div className="lg:w-[289.33px] lg:h-[15px] lg:gap-[0px] w-[334px] h-[15px] gap-[0px] lg:mt-1 mt-1">
    <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#525252] font-normal text-[12px]
     leading-[12.52px] text-left lg:items-center items-center text-[#525252]"> 
   +10% from last month
    </p>
    </div>
     </div>
    </div>
   
    <div className="lg:w-[337.33px] lg:h-[134px] lg:pt-[23px] lg:pr-[24px] lg:pb-[28px] lg:pl-[24px] lg:gap-[3px] lg:rounded-xl lg:border-t-[0px] lg:border-r-[0px] lg:border-b-[0px] lg:border-l-[0px] 
     w-[382px]  h-[134px] pt-[23px] pr-[24px] pb-[28px] pl-[24px] gap-[3px] rounded-lg  border-t-[1px] border-r-[0px] border-b-[0px] border-l-[0px] lg:bg-white bg-white flex-col justify-center items-center lg:mt-0  lg:shadow-2xl mt-3">
     <div className="lg:flex lg:w-[289.33px] lg:h-[24px] lg:gap-[0px] lg:justify-between flex  w-[334px]
     h-[24px] gap-[0px] justify-between lg:bg-none lg:items-center items-center">
     <h4 className="lg:w-[108px] lg:h-[17px] lg:gap-[0px] lg:font-medium lg:text-[14px] lg:leading-[16.94px] lg:text-left lg:text-[#0A0A0A] w-[108px] h-[17px] g-[0px] text-[14px] font-medium leading-[16.94px] text-left  lg:items-center items-center text-[#0A0A0A]">
     Pending actions
     </h4>
     <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px] h-[24px] w-[24px] "><ArrowUpRight className="lg:top-[5px] lg:left-[6px] lg:gap-[0px] lg:border-none h-[24px] w-[24px]" /></p>
     </div>
    
     <div className="lg:w-[289.33px] lg:h-[44px] lg:gap-[0px] w-[336px] h-[44px] gap-[0px] items-center justify-center"> 
    <div className="lg:w-[289.33px] lg:h-[29px] lg:gap-[0px] w-[334px] h-[29px] gap-[0px]">
    <h1 className="lg:font-semibold lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#0A0A0A] text-[24px] font-semibold leading-[29.05px] text-left text-[#0A0A0A] lg:items-center items-center justify-center">
    $450,000.00
    </h1>
    </div>
    <div className="lg:w-[289.33px] lg:h-[15px] lg:gap-[0px] w-[336px] h-[15px] gap-[0px] lg:mt-1 mt-1">
    <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#525252] font-normal text-[12px]
     leading-[12.52px] text-left lg:items-center items-center text-[#525252]"> 
   +150% from last month
    </p>
   </div>
     </div>
    </div>
   
   
       </section>
       {/* <section className="lg:w-[1044px] lg:bg-green-300 lg:h-[59px] lg:top-[259px] lg:left-[328px] lg:gap-[0px] lg:justify-between lg:mt-5  w-[376px] h-[59px] top-[259px] left-[328px] gap-[0px] justify-between
        mt-3 lg:flex flex lg:items-start items-center">
       <div className="lg:w-[583px] bg-red-400 lg:h-[40px] lg:top-[321px] lg:left-[813px] lg:gap-[20px] lg:justify-start lg:items-end lg:float-left lg:m-auto
       w-[376px] h-[59px] top-[259px] left-[328px] gap-[0px] justify-between mt-3 lg:flex flex items-center m-auto">

</div>

  <div className="lg:w-[328px] lg:h-[59px] lg:gap-[10px] w-[170px] h-[59px]  lg:block block lg:justify-between  justify-between " >

    <div className="lg:w-[328px] lg:h-[34px] lg:gap-[0px] w-[180px] h-[38px] gap-[0px] " >
      <div className="lg:w-[328px] lg:h-[50px] lg:g-[0px] ">
      <h2 className="lg:font-semibold lg:text-[28px] lg:leading-[33.89px] lg:text-left lg:text-[#000000] text-[28px font-semibold leading-[33.89px] text-left text-[#000000] lg:items-center items-center justify-center" >
Users
</h2>
<div className="lg:w-[328px] lg:h-[15px] lg:gap-[0px]  h-[24px] lg:mt-2 gap-[0px] " > 
    <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#000000] font-normal text-[12px] leading-[14.52px] text-left text-[#000000] lg:block hidden  lg:items-center items-center justify-center">
    Manage Users & Track Activity.
  
    </p>
    <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#000000] lg:hidden block lg:items-center items-center justify-center font-normal text-[12px] leading-[14.52px] text-left text-[#000000]">Manage your products </p>
    </div>
      </div>
    </div>
  </div>

  <div className=" lg:w-[200px] lg:h-[40px] lg:gap-[10px]  w-[193px] h-[40px] gap-[10px] lg:flex flex lg:justify-between  justify-between lg:items-center items-center lg:bg-transparent  sm:bg-red-600 "> 
    <div className="lg:w-[88px] lg:h-[40px]  lg:pt-[10px] lg:pr-[5px] lg:pb-[10px] lg:pl-[5px] lg:gap-[0px] lg:rounded-md   lg:border-[0.5px]  lg:border-[#CBD5E1] lg:flex flex lg:justify-between lg:items-center  w-[50px] h-[40px]  pt-[10px] pr-[5px] pb-[10px] pl-[5px] gap-[0px]  rounded-md  border-[0.5px]  border-[#CBD5E1]">

      <div className="lg:w-[20px] lg:h-[20px] lg:pt-[2.5px] lg:pr-[1.67px] lg:pb-[2.5px] lg:pl-[1.67px] lg:gap-[0px] w-[20px] h-[20px] pt-[1.5px] pr-[0px] pb-[1.5px] pl-[0px] gap-[0px] lg:bg-transparent ">
      <Filter className="lg:w-[16.67px] lg:h-[15px] lg:top-[2.5px] lg:left-[1.67px] lg:gap-[0px] w-[16.67px] h-[15px] top-[2.5px] left-[1.67px] gap-[0px]" />
      </div>

    <p className=" hidden lg:block lg:w-[38px] lg:h-[19px] lg:gap-[0px] lg:font-normal lg:text-[16px] lg:leading-[19.36px] lg:text-left lg:text-[#000000] ">Filter</p>
    </div>
 <div className="lg:flex flex lg:justify-between justify-between lg:w-[115px] lg:h-[40px]  lg:pt-[8px] lg:pr-[16px] lg:pb-[8px] lg:pl-[16px] lg:gap-[8px] border rounded-md lg:bg-[#F97316] bg-[#F97316]">

 <div className="lg:w-[16px] lg:h-[16px] lg:gap-[0px]">
     <CirclePlus className=" lg:w-[17px] lg:h-[20.33px] lg:top-[1.33px] lg:left-[1.33px] lg:gap-[0px] lg:text-[#fff]  lg:justify-between lg:items-center" />
     
     </div>
     <div className="lg:w-[284px] lg:h-[24px] lg:gap-[0px]">
    <h3 className="lg:font-medium lg:text-[12px] lg:leading-[24px] lg:text-left lg:text-[#fff]">
    Add User
    </h3>
     </div>
 </div>
    </div>
    </section>  */}
    <section className="lg:w-[1044px] lg:h-[59px] lg:mt-4 lg:pl-0 lg:pr-0 lg:bg-transparent lg:top-[259px] lg:left-[328px] lg:gap-[0px] lg:items-center lg:justify-end 
     lg:px-4 w-[430px] h-[32px] top-[259px] justify-between pr-[24px] pl-[24px]  bg-transparent left-[328px] gap-[0px] mt-5 lg:flex flex items-center">
  <div className="lg:w-[583px] lg:h-[40px] bg-transparent  items-center lg:ml-80 lg:flex lg:justify-between
  h-[32px] justify-between flex w-[420px]">
    <Search className="absolute lg:w-[16px] lg:h-[16px] lg:left-[560px] lg:fixed text-gray-500 ml-2 w-[12.7px] h-[12.7px] left-[130px] " />
    <input type="text" placeholder=" Search option..." className="lg:w-[266px] lg:h-[40px] lg:outline-none lg:rounded-md lg:border lg:border-[#E4E4E7]
     lg:placeholder:font-normal lg:placeholder:text-[14px] placeholder:leading-[20px] lg:placeholder:text-center placeholder:text-left
      placeholder:ml-[60px] w-[140px] h-[32px] border-[0.8px] rounded-md text-[11.16px] font-normal outline-none items-center text-left" />
  
  <div className=" lg:w-[297px] lg:h-[40px] lg:gap-[10px]  w-[203px] h-[26.64px] gap-[6.65px] lg:flex flex lg:justify-between 
  justify-between lg:items-center items-center lg:bg-transparent  bg-transparent lg:mr-0 ml-[40px]"> 
    <div className="lg:w-[88px] lg:h-[40px]  lg:pt-[10px] lg:pr-[5px] lg:pb-[10px] lg:pl-[5px] lg:gap-[0px] 
    lg:rounded-md   lg:border-[0.5px]  lg:border-[#CBD5E1] lg:flex flex lg:justify-between lg:items-center 
    w-[59.27px] h-[26.61px]  p-[6.65px] gap-[6.65px] rounded-sm  border-[0.5px] border-[#CBD5E1]">
      <div className="lg:w-[20px] lg:h-[20px] lg:pt-[2.5px] lg:pr-[1.67px] lg:pb-[2.5px] lg:pl-[1.67px]
       lg:gap-[0px] w-[13.31px] h-[13.31px] pt-[1.66px] pr-[1.11px] pb-[1.66px] pl-[1.11px] gap-[0px]
        lg:bg-transparent ">
      <Filter className="lg:w-[16.67px] lg:h-[15px] lg:top-[2.5px] lg:left-[1.67px] lg:gap-[0px]
       w-[11.09px] h-[9.98px] top-[1.66px] left-[1.11px] gap-[0px] " />
      </div>
<div className="lg:w-[38px] lg:h-[19px] w-[26px] h-[13px] lg:mb-0">
<p className="lg:block lg:w-[38px] lg:mr-[6px] lg:h-[19px] lg:gap-[0px] lg:font-normal lg:text-[16px]
     lg:leading-[19.36px] lg:text-left lg:text-[#000000] lg:items-center text-[10.65px] w-[10.65px] leading-[12.88px]
     text-left">Filter</p>
</div>
    
    </div>
 <div className="lg:flex flex lg:justify-between justify-between lg:w-[199px] lg:h-[40px] lg:pt-[8px] lg:pr-[23px]
  lg:pb-[8px] lg:pl-[23px] lg:gap-[8px] rounded-sm lg:bg-[#F97316] bg-[#F97316] w-[134.25px] h-[26.65px]
  pt-[5.32px] pr-[10.65px] pb-[5.32px] pl-[10.65px] gap-[5.32px]">
 <div className="lg:w-[16px] lg:h-[16px] lg:gap-[0px] w-[10.65px] h-[10.65px] ">
     <CirclePlus className=" lg:w-[17px] lg:h-[20.33px] lg:top-[1.33px] lg:left-[1.33px] lg:gap-[0px]
      lg:text-[#fff]  lg:justify-between lg:items-center  w-[10.65px] h-[10.65px] text-[#ffffff] mt-[3px]" />
     </div>
     <div className="lg:w-[284px] lg:h-[24px] lg:gap-[0px] w-[97px] h-[16px] ">
    
    <h3 className="lg:font-medium lg:text-[12px] lg:leading-[24px] lg:text-left lg:text-[#fff] text-[9.31px] font-medium
    leading-[15.97px] text-left text-[#FFFFFF]">
  Create new Template
    </h3>
     </div>
 </div>
    </div>
  </div>
  
</section>

       <EmailTable name="princess" />  
       <Pagination />
       </div>
       
          
          </div>
  )
}

export default page