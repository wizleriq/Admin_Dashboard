import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
import Link from 'next/link';
import productpost from '@/data/productpost';
import { Post } from '@/types/post';
import { EllipsisVertical } from 'lucide-react'
// import { Post } from '@/types/post';
import Image from 'next/image';

interface UserTableProps {
  name?: string;
  email?: string;
}

const PostTable = ({ name }: UserTableProps) => {
  return (
    <div className='  lg:mt-7 lg:w-[1039px] lg:h-[447px] lg:top-[358px] lg:left-[328px]  lg:gap-[0px]
     w-[376px] h-[480px] top-[-14px] left-[6229px] gap-[0px] lg:bg-transparent bg-white'>
      {/* <h3>
      {name ? name : 'Posts me'}
      </h3> */}
      <section className='lg:w-full'>
        <Table >
          {/* <TableCaption> shooping site </TableCaption> */}
          <TableHeader >
            <TableRow >
              <TableHead className='lg:w-[350px] lg:flex lg:text-center lg:h-[51px] lg:p-[16px] lg:gap-[8px]
               lg:bg-[#FFF7F2] lg:text-black w-[197px] text-center h-[28.21px] p-[6.1px] gap-[8px]
               bg-[#d18556] text-black flex pt-[3.05px]
                pr-[6.1px] pb-[3.05px pl-[18.1px]'>
                     <input type='checkbox' className='lg:ml-1 lg:mr-0'/>
                <h3 className='lg:w-[45px] lg:text-center lg:h-[19px] lg:gap-[0px] lg:text-[16px] lg:font-normal 
                lg:leading-[19.36px] lg:text-black w-[45px] text-center h-[19px] gap-[0px] text-[15px] font-normal 
                leading-[19.36px] text-black'>
                  Name
                </h3>
              </TableHead>
              

              <TableHead className='lg:w-[164px] lg:h-[51px] lg:p-[16px] lg:gap-[8px] lg:bg-[#FFF7F2]
               lg:text-black w-[114.46px] h-[28.21px] pt-[6.1px] gap-[8px] bg-[#FFF7F2] text-black lg:table-cell hidden'>
                {/* width: Fill (114.46px)px;
height: Fixed (28.21px)px;
padding: 6.1px 0px 0px 0px;
gap: 3.05px;
opacity: 0px; */}

              <h3 className='lg:w-[100px] lg:text-center lg:h-[19px] lg:gap-[0px] lg:text-[16px] lg:font-normal
               lg:leading-[19.36px] lg:text-black w-[114.46px] h-[28.21px] text-center gap-[0px] text-[14px] font-medium leading-[19.36px}
             text-black'>
                User Details
                </h3>
              </TableHead>
               <TableHead className='lg:w-[164px] lg:h-[51px] lg:pt-0 lg:p-[16px] lg:gap-[8px] lg:bg-[#FFF7F2] lg:text-black 
              w-[114.46px] h-[28.21px] pt-[6.1ppx] gap-[3.05px] bg-[#FFF7F2] text-black text-center  items-center'>
              <h3 className='lg:w-[65px] lg:text-center lg:h-[19px] lg:gap-[0px] lg:text-[16px] lg:font-normal lg:leading-[19.36px]
               lg:text-black w-[29px] text-center h-[15px] gap-[0px] text-[14px] font-normal leading-[19.36px]
           text-black flex justify-between items-center'>
               Quantity
                </h3>
              </TableHead>
              {/* <TableHead 
  className='lg:w-[164px] lg:h-[51px] lg:pt-0 lg:p-[16px] lg:gap-[8px] lg:bg-[#FFF7F2] lg:text-black 
             w-[114.46px] h-[28.21px] pt-[6.1px] gap-[3.05px] bg-[#FFF7F2] text-black text-center 
             flex justify-center items-center'>
  <h3 
    className='lg:w-[65px] lg:h-[19px] lg:text-center lg:text-[16px] lg:font-normal lg:leading-[19.36px] 
               w-[29px] h-[15px] text-[14px] font-normal leading-[19.36px] text-black flex justify-center items-center'>
    Quantity
  </h3>
</TableHead> */}

              <TableHead className='lg:w-[157px] lg:h-[51px] lg:p-[16px] lg:gap-[8px] lg:bg-[#FFF7F2] hidden  md:table-cell lg:table-cell lg:text-black '>
              <h3 className='lg:w-[100px] lg:h-[19px] lg:gap-[0px] lg:text-center lg:text-[16px] lg:mx-auto lg:font-normal lg:leading-[19.36px}
                 lg:text-black'>
              Date Added
                </h3>
              </TableHead>
             
              <TableHead className='lg:w-[107px] lg:h-[51px] lg:p-[16px] lg:gap-[8px] lg:bg-[#FFF7F2] lg:text-black   g:w-[135.25px] h-[51px] 
              p-[16px] gap-[8px] bg-[#FFF7F2] text-black lg:table-cell hidden'>
              <h3 className='lg:text-center  lg:gap-[0px] lg:text-[16px] 
              lg:items-center lg:justify-center  lg:w-full lg:h-full lg:font-normal lg:leading-[19.36px] lg:text-black
               w-[49px] text-center h-[19px] gap-[0px] text-[16px] font-normal leading-[19.36px]
                text-black'>
                Status
                </h3>
              </TableHead>
             
              <TableHead className='lg:w-[135.25px] lg:h-[51px] lg:p-[16px] lg:gap-[8px] lg:bg-[#FFF7F2] block 
              md:table-cell lg:table-cell lg:text-black w-[69.06px] h-[28.21px] pt-[6.1px] '>
                {/* width: Fill (69.06px)px;
height: Fixed (28.21px)px;
padding: 6.1px 0px 0px 0px;
gap: 3.05px;
opacity: 0px; */}

              <h3 className='lg:w-[49px] lg:text-center lg:h-[19px] lg:gap-[0px] lg:text-[16px] lg:font-normal lg:leading-[19.36px}
            lg:text-black'>
                Action
              </h3>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productpost.map((post) => (
              <TableRow key={post.id}>
                <TableCell className='lg:w-[350px] lg:h-[69px] lg:bg-white lg:p-[16px] lg:gap-[8px] 
                lg:border-b-[1px] lg:justify-between lg:items-center w-[197px] h-[26.33px] bg-green-300 pt-[3.05px]
                pr-[6.1px] pb-[3.05px pl-[6.1px] gap-[8px] border-b-[0.38px] justify-between items-center'>
                  
                    <Link href={'/userdetails'}>
                  <div className='lg:w-[300px] lg:h-[69px] lg:gap-[0px] lg:justify-between lg:flex lg:items-center
                   justify-between flex items-center lg:bg-transparent  bg-red-300  w-[197px] h-[26.33px]
                    pt-[3.05px] pr-[6.1px] pb-[3.05px pl-[6.1px] gap-[8px] '>
                    <div className='lg:w-[350px] lg:h-[69px] lg:gap-[0px]  lg:lg:bg-white  lg:text-black w-[100px]  gap-[0px]  text-black'>
                      <div className='lg:w-[227px] lg:h-[69px] lg:flex flex justify-start lg:bg-transparent bg-[plum]
                      w-[197px] h-[26.33px] pt-[3.05px] pr-[6.1px] pb-[3.05px pl-[6.1px] gap-[8px]'>
                        <input type='checkbox' className='lg:ml-1 lg:mr-2'/>
                      <div className='lg:justify-center lg:items-center lg:flex lg:mr-2'>
                      {/* {post.image} */}
                      <Image src={post.image} alt='' width={43} height={43} className=' rounded-full 
                      lg:w-[43px] lg:h-[43px] lg:object-cover lg:block hidden' />
                      </div>
                     <h3 className='lg:text-[16px] lg:font-medium lg:leading-[24px] lg:items-center
                     lg:flex lg:text-left lg:text-black
                     text-[12px] font-medium leading-[16.94px] text-left text-black '>
                        {post.id}
                      </h3>
                      </div>
                      {/* <div className='lg:w-[227px] lg:h-[17px]'>
                      <h3 className='lg:text-[14px] lg:font-normal lg:leading-[16.94px] lg:text-left lg:text-[#525252]
                     text-[12px] font-medium leading-[16.94px] text-left text-[#525252] '>
                        {post.email}
                      </h3>
                      </div> */}
                    </div>
                  </div>
                  </Link>
                </TableCell>

                <TableCell className='lg:w-[164px] lg:h-[69px] lg:p-[16px] lg:gap-[8px] lg:border-b-[1px]  lg:bg-white
                 lg:border-[#CBD5E1] lg:items-center lg:justify-center w-[60px] h-[99px] p-[16px] gap-[8px] 
                border-b-[1px]  bg-white border-[#CBD5E1] items-center justify-center lg:table-cell hidden' >
                  <div className='lg:w-[124px] lg:h-[17px] lg:gap-[0px] w-[55px] h-[17px] gap-[0px]'>
                  <h3 className='lg:text-right lg:text-[14px] lg:font-medium lg:leading-[16.94px] lg:text-black
                     text-[12px] font-medium leading-[16.94px] text-left text-black  '>
                  </h3> {post.userdetails}
                  </div>
                 
                </TableCell>
                   <TableCell className='lg:w-[164px] lg:h-[69px] lg:p-[16px] lg:gap-[8px] lg:border-b-[1px] 
                    lg:bg-white lg:border-[#CBD5E1] lg:items-center lg:justify-center w-[114.46px] h-[26.33px]
                     pt-[3.05px] pr-[6.1px] pb-[3.05px] pl-[6.1px] gap-[3.05px] 
                border-b-[1px]  bg-[plum] border-[#CBD5E1] items-center justify-center lg:table-cell' >
                <div className='lg:w-[61px] lg:h-[17px] lg:gap-[0px] w-[102.25px] h-[15px] gap-[0px] lg:text-center
                 lg:items-center lg:flex lg:justify-center lg:bg-transparent bg-red-400 '>
                  {/*width: Fixed (114.46px)px;
height: Fixed (26.33px)px;
padding: 3.05px 6.1px 3.05px 6.1px;
gap: 3.05px;
border: 0px 0px 0.38px 0px;
opacity: 0px;

 */}

                <h3 className=' lg:text-[14px] lg:text-center lg:items-center lg:font-medium lg:leading-[16.94px] lg:text-black
                     text-[12px] font-medium leading-[14.5px] text-center items-center text-black '>
                    {post.quantity}
                  </h3>
                  </div>
                  

                </TableCell>
                <TableCell className='lg:w-[157px] lg:h-[69px] lg:p-[16px] lg:gap-[8px] lg:border-b-[1px]  lg:bg-white lg:border-[#CBD5E1] hidden  md:table-cell lg:table-cell'>
                  <div className='lg:text-[14px] lg:text-center lg:w-[157px] lg:h-[17px] lg'>
                    {`${post.createdAt[0]} ${post.createdAt[1]}`}
                  </div>
                </TableCell>

                <TableCell className='lg:w-[107px] lg:h-[68.5px] lg:p-[16px] lg:gap-[8px] lg:border-b-[1px]  lg:bg-white lg:border-[#CBD5E1] lg:items-center lg:justify-center w-[60px] h-[99px] p-[16px] gap-[8px] 
                border-b-[1px]  bg-white border-[#CBD5E1] items-center justify-center lg:table-cell hidden' >
                <div className='lg:w-[92px] lg:h-[27px] lg:text-center lg:justify-center lg:items-center lg:flex lg:bg-[#F814041F] lg:rounded-full lg:gap-[0px] w-[18px] h-[17px] gap-[0px]'>
                 <h3 className=' lg:w-[72px] lg:h-[15px] lg:text-center lg:justify-center lg:items-center lg:flex lg:text-[12px] lg:font-normal lg:leading-[16.94px] lg:text-[#F81404]
                     text-[12px] font-medium leading-[16.94px] text-left text-[#F81404]  '>
                    {post.status}
                    </h3>
                 </div>
                 
                </TableCell> 
                {/* <TableCell className='lg:w-[86px] lg:h-[69px] lg:p-[16px] lg:gap-[8px] lg:border-b-[1px]  lg:bg-blue-500 lg:border-[#CBD5E1] hidden  md:table-cell lg:table-cell' >
                  <div className='lg:w-[24px] lg:h-[24px]'>
                  <EllipsisVertical className='lg:text-center lg:w-[24px] lg:h-[24px]' />

                  </div>
                 
                </TableCell> */}
                <TableCell 
  className='lg:w-[86px] lg:h-[69px] lg:p-[16px] lg:gap-[8px] lg:border-b-[1px]   lg:bg-white
             lg:border-[#CBD5E1] md:table-cell lg:table-cell w-[69.06px] h-[26.33px] pt-[3.05px] pr-[6.1px] pb-[3.05px]
             pl-[6.1px] border-[#CBD5E1] bg-[pink]'>

  <div 
    className='lg:flex lg:items-center lg:justify-center lg:w-full lg:h-full   flex item-center justify-center
    pt-[4.05px] pr-[6.1px] pb-[3.05px]
             pl-[6.1px]'
  >
    <EllipsisVertical 
      className='lg:w-[24px] lg:h-[24px] w-[9.16px] h-[9.16px]' 
    />
  </div>
</TableCell>

                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

    </div>
  )
}

export default PostTable
