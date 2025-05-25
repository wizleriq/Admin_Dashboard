"use client"
import Image from "next/image";
import ProductTable from "@/components/productTable/ProductTable";
import {Bell, CircleHelp, ChevronDown, DollarSign, Filter, CirclePlus, Search, User, ArrowUpRight} from 'lucide-react'
import PostTable from "@/components/posts/PostTable";
import { Pagination } from "@/components/ui/pagination";
import profilepic from "@/components/Img/profilepic.jpeg";
import Circ from "@/components/Img/Circ.png"
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Navbar from "@/components/Navbar";

export default function Page() {
  const [isClicked, setIsClicked]= useState(false);

  const filter =()=> setIsClicked(!isClicked);
  

  return (
    <div className="lg:w-[1200px] lg:h-[1024px] w-[430px] h-[1250.13px] top-[-87px] left-[1454px] gap-[0px]
     lg:bg-[#FAFAFA] bg-[#FAFAFA] ">
      
    {/*nav bar */}
   <section className="lg:w-[1200px] lg:h-[67px] lg:left-[298px] lg:pt-[13.5px] lg:pr-[10px] lg:pb-[13.5px] lg:pl-[10px] lg:gap-[0px] lg:border-t-[0px] lg:border-r-[0px]  lg:border-b-[0.5px]  lg:border-l-[0px]  lg:border-[#DCDCDC] lg:block hidden  ">
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
   <Navbar />
   {/* <div className=" bg-red-500 pl-[0px] lg:mx-8 mx-5 lg:w-[0px] lg:h-[0px] lg:top-[0px] lg:left-[0px] 
   lg:gap-[0px] w-[376px] h-[3206.78px] top-[-14px] left-[6229px] gap-[0px] " > */}
      <div  className="lg:w-[254px] lg:h-[48px] lg:bg-transparent lg:top-[83px] lg:hidden block lg:left-[291px]
   bg-transparent lg:gap-0 gap-[8px] lg:pr-0 lg:ml-8 lg:mt-3 mt-[10px] top-[12px] w-[430px] h-[50px] lg:pl-0 pl-7">
<div  className="lg:w-[254px] lg:h-[29px] bg-transparent w-[382px] h-[25px]">

<h2 className="lg:font-medium  lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#525252]
font-medium text-[20px] leading-[24.81px] text-left text-[#525252]">
Products
</h2>

</div>
<div  className="lg:w-[254px] lg:h-[19px] w-[382px] h-[19px] bg-transparent">
<p className="lg:font-normal  lg:text-[16px] lg:leading-[19.36px] lg:text-[#525252] lg:text-left
font-normal text-[13.37px] leading-[16.54px] text-left text-[#525252]">Showing records from the last sign in</p>
</div>
</div>
      <div className=" bg-[plum] lg:pl-0 lg:pr-0 pl-[25.3px] pr-[22px] lg:mx-8 lg:w-[0px] lg:h-[0px] lg:top-[0px] lg:left-[0px] 
 lg:gap-[0px] w-[430px] h-[1500.99px] top-[95px] gap-[32px] lg:bg-green-400" >
   

     <section className="lg:w-[1044px]  lg:h-[134px] lg:top-[97px] lg:gap-[16px] lg:items-center  lg:flex  lg:justify-between  lg:bg-green lg:mt-5 mt-5 w-[376px] h-[450px] top-[-14px] left-[6229px] gap-[0px] lg:bg-transparent ">
   
 <div className="lg:w-[337.33px] lg:h-[134px] lg:pt-[23px] lg:pr-[24px] lg:pb-[28px] lg:pl-[24px] lg:gap-[3px] lg:rounded-xl
  lg:border-t-[0px] lg:border-r-[0px] lg:border-b-[0px] lg:border-l-[0px]  w-[382px]  h-[134px] pt-[23px] pr-[24px] pb-[28px]
   pl-[24px] gap-[3px] rounded-lg border-t-[0.5px] border-r-[0px] border-b-[0px] border-l-[0px] lg:bg-white bg-white flex-col 
   justify-center items-center lg:mt-0 lg:shadow-2xl 
 "> 
  <div className="lg:flex lg:w-[289.33px] lg:h-[24px] lg:gap-[0px] lg:justify-between flex w-[334px]
  h-[24px] gap-[0px] justify-between lg:bg-none lg:items-center items-center">
    
  
  <h4 className="lg:w-[110px] lg:h-[17px] lg:gap-[0px] lg:font-medium lg:text-[14px] lg:leading-[16.94px] lg:text-left
   lg:text-[#0A0A0A] w-[95px] h-[17px] g-[0px] text-[14px] font-medium leading-[16.94px] text-left  lg:items-center
    items-center text-[#0A0A0A]">
  Total Revenue
  </h4>
  <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px] w-[24px] h-[24px]"><DollarSign className="lg:top-[5px] lg:left-[6px] lg:gap-[0px] lg:border-none " /></p>
  </div>
 
  <div className="lg:w-[289.33px] lg:h-[44px] lg:gap-[0px] w-[334px] h-[44px] gap-[0px] items-center justify-center"> 
 <div className="lg:w-[289.33px] lg:h-[29px] lg:gap-[0px] w-[334px] h-[29px] gap-[0px]">
 <h1 className="lg:font-semibold lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#0A0A0A] text-[24px] 
 font-semibold leading-[29.05px] text-left text-[#0A0A0A] lg:items-center items-center justify-center">
$85,000.00
 </h1>
 </div>
 <div className="lg:w-[289.33px] lg:h-[15px] lg:gap-[0px] w-[334px] h-[15px] gap-[0px] lg:mt-1 mt-1">
 {/* width: 334px;
height: 15px;
gap: 0px;
opacity: 0px; */}

 <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#525252] font-normal text-[12px]
  leading-[14.52px] text-left lg:items-center items-center text-[#525252]"> 
+10% from last month
 </p>
 </div>
  </div>
 </div>

 <div className="lg:w-[337.33px] lg:h-[134px] lg:pt-[23px] lg:pr-[24px] lg:pb-[28px] lg:pl-[24px] lg:gap-[3px] lg:rounded-xl
  lg:border-t-[0px] lg:border-r-[0px] lg:border-b-[0px] lg:border-l-[0px]  w-[382px]  h-[134px] pt-[23px] pr-[24px] pb-[28px]
   pl-[24px] gap-[3px] rounded-lg border-t-[0.5px] border-r-[0px] border-b-[0px] border-l-[0px] lg:bg-white bg-white flex-col 
   justify-center items-center lg:mt-0 lg:shadow-2xl mt-3">

  <div className="lg:flex lg:w-[289.33px] lg:h-[24px] lg:gap-[0px] lg:justify-between flex w-[334px]
  h-[24px] gap-[0px] justify-between lg:bg-none lg:items-center items-center">
  <h4 className="lg:w-[95px] lg:h-[17px] lg:gap-[0px] lg:font-medium lg:text-[14px] lg:leading-[16.94px] lg:text-left
   lg:text-[#0A0A0A] w-[95px] h-[17px] g-[0px] text-[14px] font-medium leading-[16.94px] text-left  lg:items-center
    items-center text-[#0A0A0A]">
  Active Budget
  </h4>
  <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px] w-[24px] h-[24px]"><DollarSign className="lg:top-[5px] lg:left-[6px] 
  lg:gap-[0px] lg:border-none " /></p>
   {/* <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px] "> <Image src={Circ} alt="Profile Picture" className=""/></p> */}
  </div>
 
  <div className="lg:w-[289.33px] lg:h-[44px] lg:gap-[0px] w-[336px] h-[44px] gap-[0px] items-center justify-center"> 
 <div className="lg:w-[289.33px] lg:h-[29px] lg:gap-[0px] w-[336px] h-[29px] gap-[0px]">
 <h1 className="lg:font-semibold lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#0A0A0A] text-[24px] 
 font-semibold leading-[29.05px] text-left text-[#0A0A0A] lg:items-center items-center justify-center">
 $100,000.00

 </h1>
 </div>
 <div className="lg:w-[289.33px] lg:h-[15px] lg:gap-[0px] w-[334px] h-[15px] gap-[0px] lg:mt-1 mt-1">
 <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#525252] font-normal text-[12px]
  leading-[14.52px] text-left lg:items-center items-center text-[#525252]"> 
+20% from last month
 </p>
 </div>
  </div>
 </div>

 <div className="lg:w-[337.33px] lg:h-[134px] lg:pt-[23px] lg:pr-[24px] lg:pb-[28px] lg:pl-[24px] lg:gap-[3px] lg:rounded-xl 
 lg:border-t-[0px] lg:border-r-[0px] lg:border-b-[0px] lg:border-l-[0px] w-[382px]  h-[134px] pt-[23px] pr-[24px] pb-[28px]
   pl-[24px] gap-[3px] rounded-lg border-t-[0.5px] border-r-[0px] border-b-[0px] border-l-[0px] lg:bg-white bg-white flex-col 
   justify-center items-center lg:mt-0 lg:shadow-2xl mt-3">


  <div className="lg:flex lg:w-[289.33px] lg:h-[24px] lg:gap-[0px] lg:justify-between flex w-[334px]
  h-[24px] gap-[0px] justify-between lg:bg-none lg:items-center items-center">
  <h4 className="lg:w-[95px] lg:h-[17px] lg:gap-[0px] lg:font-medium lg:text-[14px] lg:leading-[16.94px] lg:text-left
   lg:text-[#0A0A0A]  w-[95px] h-[17px] g-[0px] text-[14px] font-medium leading-[16.94px] text-left  lg:items-center
    items-center text-[#0A0A0A]">
 Total Savings
  </h4>
  <p className="lg:w-[24px] lg:h-[24px] lg:gap-[0px] w-[24px] h-[24px]"><DollarSign className="lg:top-[5px] lg:left-[6px]
   lg:gap-[0px] lg:border-none  " /></p>
   

  </div>
 
  <div className="lg:w-[289.33px] lg:h-[44px] lg:gap-[0px] w-[336px] h-[44px] gap-[0px] items-center justify-center"> 
 <div className="lg:w-[289.33px] lg:h-[29px] lg:gap-[0px] w-[336px] h-[29px] gap-[0px]">
 <h1 className="lg:font-semibold lg:text-[24px] lg:leading-[29.05px] lg:text-left lg:text-[#0A0A0A] text-[24px] 
 font-semibold leading-[29.05px] text-left text-[#0A0A0A] lg:items-center items-center justify-center">
 $72,000.00
 </h1>
 </div>
 <div className="lg:w-[289.33px] lg:h-[15px] lg:gap-[0px] w-[334px] h-[15px] gap-[0px] lg:mt-1 mt-1">
 <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#525252] font-normal text-[12px]
  leading-[14.52px] text-left lg:items-center items-center text-[#525252]"> 
+150% from last month
 </p>
 </div>
  </div>
 </div>


    </section>
    <section className="lg:w-[1044px] lg:h-[59px] lg:top-[259px] lg:left-[328px] lg:gap-[0px] lg:justify-between lg:mt-5  w-[376px] h-[59px] top-[259px] left-[328px] gap-[0px] justify-between mt-3 lg:flex flex lg:items-center items-center">
  <div className="lg:w-[1044px] lg:h-[59px] lg:gap-[10px] w-[430px] h-[42.65px] lg:flex lg:bg-transparent
   bg-transparent  lg:justify-between pt-[0px] pr[24px] p-[0px] justify-between flex item-center text-center" >
    <div className="lg:w-[328px] lg:h-[34px] lg:gap-[0px] lg:bg-transparent bg-green-300 mt-0  
    lg:pr-[24px] lg:mt-0 pr-[24px] gap-[6.65px] justify-between  w-[162px] h-[42.65px] flex " >  
      <div className="lg:w-[328px] lg:h-[50px] lg:g-[0px] lg:bg-transparentw-[162px] h-[42.65px]
      gap-[6.65px] ">
     <div className="lg:w-[328px] lg:h-[34px] w-[162px] h-[23px] lg:bg-transparent  ">
     <h2 className="lg:font-semibold lg:text-[28px] lg:leading-[33.89px] lg:text-left lg:text-[#000000] 
     text-[18.63px] font-semibold leading-[22.55px] text-left text-[#000000] lg:items-center items-center 
     justify-center" >
Products
</h2>
     </div>

     
<div className="lg:w-[328px] lg:h-[15px] lg:gap-[0px] w-[162px] h-[13px] lg:mt-2 gap-[0px] lg:bg-transparent
 mt-[5.5px] " >
    <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#000000] 
    font-normal text-[10.65px] leading-[12.88px] text-left text-[#000000] lg:block hidden  lg:items-center
     items-center justify-center">
    Manage your products and view their sales performance.
    </p>
    <p className="lg:font-normal lg:text-[12px] lg:leading-[14.52px] lg:text-left lg:text-[#000000] lg:hidden
     block lg:items-center items-center justify-center font-normal text-[12px] leading-[14.52px] text-left 
     text-[#000000]">Manage your products </p>
    </div>
      </div>
    </div>

    <div className=" lg:w-[238px] lg:h-[40px] lg:gap-[10px]  w-[159.18px] h-[42.65px] gap-[6px] lg:flex flex lg:justify-between 
  justify-between lg:items-center items-center lg:bg-transparent   bg-green-600"> 
    <div className="lg:w-[88px] lg:h-[40px]  lg:pt-[10px] lg:pr-[5px] lg:pb-[10px] lg:pl-[5px] lg:gap-[0px] 
    lg:rounded-md   lg:border-[0.5px]  lg:border-[#CBD5E1] lg:flex flex lg:justify-between lg:items-center 
    w-[59.27px] h-[26.61px]  pt-[6.65px] gap-[6.65px] rounded-sm  border-[0.5px]  
    border-[#CBD5E1]">
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
 <div className="lg:flex flex lg:justify-between justify-between lg:w-[140px] lg:h-[40px]  lg:pt-[8px] lg:pr-[16px]
  lg:pb-[8px] lg:pl-[16px] lg:gap-[8px] rounded-sm lg:bg-[#F97316] bg-[#F97316] w-[93.26px] h-[26/65px]
  pt-[5.32px] pr-[10.65px] pb-[5.32px] pl-[10.65px] gap-[5.32px]">
 <div className="lg:w-[16px] lg:h-[16px] lg:gap-[0px] w-[10.65px] h-[10.65px] ">
     <CirclePlus className=" lg:w-[17px] lg:h-[20.33px] lg:top-[1.33px] lg:left-[1.33px] lg:gap-[0px]
      lg:text-[#fff]  lg:justify-between lg:items-center  w-[10.65px] h-[10.65px] text-[#ffffff] mt-[3px]" />
     </div>
     <div className="lg:w-[284px] lg:h-[24px] lg:gap-[0px] w-[56px] h-[16px] ">
    <h3 className="lg:font-medium lg:text-[12px] lg:leading-[24px] lg:text-left lg:text-[#fff] text-[9.31px] font-medium
    leading-[15.97px] text-left text-[#FFFFFF]">
    Add Product
    </h3>
     </div>
 </div>
    </div>
   

  </div>

  {/* <div className=" lg:w-[238px] lg:h-[40px] lg:gap-[10px]  w-[159.18px] h-[26.65px] gap-[6px] lg:flex flex lg:justify-between 
  justify-between lg:items-center items-center lg:bg-transparent  bg-red-600 "> 
    <div className="lg:w-[88px] lg:h-[40px]  lg:pt-[10px] lg:pr-[5px] lg:pb-[10px] lg:pl-[5px] lg:gap-[0px] 
    lg:rounded-md   lg:border-[0.5px]  lg:border-[#CBD5E1] lg:flex flex lg:justify-between lg:items-center 
    w-[59.27px] h-[26.61px]  pt-[6.65px] gap-[6.65px] rounded-sm  border-[0.5px]  
    border-[#CBD5E1]">
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
 <div className="lg:flex flex lg:justify-between justify-between lg:w-[140px] lg:h-[40px]  lg:pt-[8px] lg:pr-[16px]
  lg:pb-[8px] lg:pl-[16px] lg:gap-[8px] border rounded-sm lg:bg-[#F97316] bg-[#F97316] w-[93.26px] h-[26/65px]
  pt-[5.32px] pr-[10.65px] pb-[5.32px] pl-[10.65px] gap-[5.32px]">
 <div className="lg:w-[16px] lg:h-[16px] lg:gap-[0px] w-[10.65px] h-[10.65px] ">
     <CirclePlus className=" lg:w-[17px] lg:h-[20.33px] lg:top-[1.33px] lg:left-[1.33px] lg:gap-[0px]
      lg:text-[#fff]  lg:justify-between lg:items-center  w-[10.65px] h-[10.65px] text-[#ffffff] mt-[3px]" />
     </div>
     <div className="lg:w-[284px] lg:h-[24px] lg:gap-[0px] w-[56px] h-[16px] ">
    <h3 className="lg:font-medium lg:text-[12px] lg:leading-[24px] lg:text-left lg:text-[#fff] text-[9.31px] font-medium
    leading-[15.97px] text-left text-[#FFFFFF]">
    Add Product
    </h3>
     </div>
 </div>
    </div> */}
    </section> 
    <ProductTable name="princess" />  
    <Pagination />

     
    </div>
   </div>

  )}