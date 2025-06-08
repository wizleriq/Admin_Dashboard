import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
import Link from 'next/link';
// import productpost from '@/data/productpost';
import emailpost from '@/data/emailpost'
import { Post } from '@/types/post';
import { EllipsisVertical } from 'lucide-react'
// import { Post } from '@/types/post';
import Image from 'next/image';

interface EmailTableProps {
  name?: string;
  email?: string;
}

const PostTable = ({ name }: EmailTableProps) => {
  return (
    <div className='  lg:mt-7 lg:w-[1039px] lg:bg-white lg:h-[447px] lg:top-[358px] lg:pr-0 lg:pl-0 lg:left-[328px]  lg:gap-[0px]
     w-[412.52px] h-[300px] top-[-14px] left-[6229px] gap-[0px] pl-[24px] pr-[24px] mt-5 lg:bg-transparent  bg-transparent'>
      {/* <h3>
      {name ? name : 'Posts me'}
      </h3> */}
      <section className='lg:w-full'>
        <Table >
          {/* <TableCaption> shooping site </TableCaption> */}
          <TableHeader >
            <TableRow >
              <TableHead className='lg:w-[335px] lg:flex lg:text-center lg:h-[51px] lg:p-[16px] lg:gap-[8px]
               lg:bg-[#FFF7F2] lg:text-black w-[209px] text-center h-[37.21px] p-[6.1px] gap-[8px]
               bg-[#FFF7F2] text-black flex pt-[3.05px]
                pr-[6.1px] pb-[3.05px pl-[18.1px] lg:mr-[0px]'>
                <input type='checkbox' className='lg:ml-1 lg:mr-0 lg:hidden table-cell' />
                <h3 className='lg:w-[108px] lg:text-right lg:ml-[15px] lg:h-[19px] lg:gap-[0px] lg:text-[16px] lg:font-normal 
                lg:leading-[19.36px] lg:text-black w-[45px] text-center h-[19px] gap-[0px] text-[15px] font-normal 
                leading-[19.36px] text-black lg:table-cell hidden'>
                  Template Title
                </h3>
                <h3 className='lg:w-[108px] lg:text-right lg:ml-[15px] lg:h-[19px] lg:gap-[0px] lg:text-[16px] lg:font-normal 
                lg:leading-[19.36px] lg:text-black w-[45px] text-center h-[19px] gap-[0px] text-[15px] font-normal 
                leading-[19.36px] text-black items-center ml-[8px] lg:hidden block'>
                  Name
                </h3>
              </TableHead>
              <TableHead className='lg:w-[120px] lg:h-[51px] lg:p-[16px] lg:gap-[8px] lg:bg-[#FFF7F2] bg-[#FFF7F2]
               lg:text-black w-[114.46px] h-[28.21px] pt-[6.1px] gap-[8px] text-black lg:table-cell'>
                <h3 className='lg:w-[100px] lg:text-left lg:h-[19px] lg:gap-[0px] lg:text-[16px] lg:font-normal
               lg:leading-[19.36px] lg:text-black w-[114.46px] h-[28.21px] text-center gap-[0px] text-[14px] font-medium leading-[19.36px}
             text-black'>
                  Type
                </h3>
              </TableHead>
              {/* lg:bg-[#FFF7F2] */}
              <TableHead className='lg:w-[120px] lg:h-[51px] lg:pt-0 lg:p-[16px] lg:gap-[8px] lg:bg-[#FFF7F2] lg:text-black 
              w-[114.46px] h-[28.21px] pt-[6.1ppx] gap-[3.05px] bg-[#FFF7F2] text-black text-center  items-center lg:table-cell hidden'>

                <h3 className='lg:w-[120px] lg:text-left lg:h-[19px] lg:gap-[0px] lg:text-[16px] lg:font-normal lg:leading-[19.36px]
               lg:text-black w-[29px] text-center h-[15px] gap-[0px] text-[14px] font-normal leading-[19.36px]
           text-black flex justify-between items-center lg:table-cell hidden'>
                  Created Date
                </h3>
              </TableHead>
              <TableHead className='lg:w-[180px] lg:h-[51px] lg:p-[16px] lg:gap-[8px] lg:bg-[#FFF7F2] hidden  md:table-cell lg:table-cell lg:text-black '>
                <h3 className='lg:w-[160px] lg:h-[19px] lg:gap-[0px] lg:text-left lg:text-[16px] lg:mx-auto lg:font-normal lg:leading-[19.36px}
                 lg:text-black'>
                  Last Modified
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

              <TableHead className='lg:w-[135.25px] lg:h-[51px] lg:p-[16px] lg:gap-[8px] lg:bg-[#FFF7F2] lg:table-cell
               lg:text-black w-[69.06px] h-[27.21px] pt-[6.1px] gap-[8px] bg-[#FFF7F2]  '>
                {/* <TableHead className='lg:w-[120px] lg:h-[51px] lg:p-[16px] lg:gap-[8px] lg:bg-[#FFF7F2]
               lg:text-black w-[114.46px] h-[28.21px] pt-[6.1px] gap-[8px] bg-green-400 text-black lg:table-cell'> */}
                <h3 className='lg:w-[49px] lg:text-center lg:h-[19px] lg:gap-[0px] lg:text-[16px] lg:font-normal lg:leading-[19.36px}
            lg:text-black'>
                  Action
                </h3>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emailpost.map((post) => (
              <TableRow key={post.id}>
                <TableCell className='lg:w-[350px] lg:h-[69px] lg:bg-white lg:gap-[8px] 
                lg:border-b-[1px] lg:justify-between lg:items-center w-[197px] h-[26.33px] bg-transparent  pt-[3.05px]
                pr-[6.1px] pb-[3.05px pl-[6.1px] gap-[8px] border-b-[0.38px] justify-between  items-center'>
                  {/* lg:p-[16px]  */}
                  <Link href={'/userdetails'}>
                    <div className='lg:w-[300px] lg:h-[69px] lg:gap-[0px] lg:justify-between lg:flex lg:items-center
                   justify-between flex items-center lg:bg-transparent lg:mt-0 bg-transparent   w-[197px] h-[32.33px]
                    pt-[3.05px] pr-[6.1px] pb-[3.05px pl-[6.1px] gap-[8px] mt-[0px] '>
                      {/* h-[26.33px] */}
                      <div className='lg:w-[300px] lg:h-[69px] lg:gap-[0px]  lg:lg:bg-white  lg:text-black w-[100px]  gap-[0px]  text-black'>
                        <div className='lg:w-[227px] lg:h-[69px] lg:flex flex justify-start lg:bg-transparent  bg-transparent 
                      w-[197px] h-[32.33px] pt-[3.05px] pr-[6.1px] pb-[3.05px pl-[6.1px] gap-[8px]'>
                          <input type='checkbox' className='lg:ml-1 lg:mr-2 lg:hidden table-cell' />
                          <div className='lg:justify-center lg:items-center lg:flex lg:mr-2'>
                          </div>
                          <h3 className='lg:text-[14px] lg:font-medium lg:leading-[24px] lg:items-center
                     lg:flex lg:text-left lg:text-black text-[12px] font-medium leading-[16.94px] flex text-left items-center text-black '>
                            {post.id}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </TableCell>

                <TableCell className='lg:w-[120px] lg:h-[69px] lg:p-[16px] lg:gap-[8px] lg:border-b-[1px]  lg:bg-white
                 lg:border-[#CBD5E1] lg:items-center lg:justify-center w-[114.4px] h-[26.3px] p-[16px] gap-[3.05px] 
                border-b-[0.38px] lg:border-[0px] bg-transparent  border-[#CBD5E1] items-center justify-center lg:table-cell ' >
                  <div className='lg:w-[120px] lg:h-[17px] lg:gap-[0px] w-[114.4px] h-[17px] gap-[0px] flex text-center items-center '>
                    <h3 className='lg:text-right lg:text-[14px] lg:font-medium lg:bg-transparent lg:leading-[16.94px] lg:text-black
                     text-center  w-[114.4px] h-[15px] gap-[0px] text-[14px] font-normal leading-[19.36px]
                       flex items-center text-black bg-transparent lg:justify-normal justify-center '>
                      {/* w-[29px] text-center h-[15px] gap-[0px] text-[14px] font-normal leading-[19.36px]
                      text-black flex justify-between items-center */}
                      {post.type}
                    </h3>
                  </div>

                </TableCell>
                <TableCell className='lg:w-[120px] lg:h-[69px] lg:p-[16px] lg:gap-[8px] lg:border-b-[1px] 
                    lg:bg-white lg:border-[#CBD5E1] lg:items-center lg:justify-center w-[114.46px] h-[26.33px]
                     pt-[3.05px] pr-[6.1px] pb-[3.05px] pl-[6.1px] gap-[3.05px] 
                border-b-[1px]  bg-[plum] border-[#CBD5E1] items-center justify-center lg:table-cell hidden' >
                  <div className='lg:w-[120px] lg:h-[17px] lg:gap-[0px] w-[102.25px] h-[15px] gap-[0px] lg:text-center
                 lg:items-center lg:flex lg:justify-center lg:bg-transparent bg-red-400 '>
                    <h3 className=' lg:text-[14px] lg:text-left lg:items-center lg:font-medium lg:leading-[16.94px] lg:text-black
                     text-[12px] font-medium leading-[14.5px] text-center items-center text-black '>
                      {`${post.createdAt[0]} ${post.createdAt[1]}`}
                    </h3>
                  </div>


                </TableCell>
                <TableCell className='lg:w-[157px] lg:h-[69px] lg:p-[16px] lg:gap-[8px] lg:border-b-[1px]  lg:bg-white lg:border-[#CBD5E1] hidden  md:table-cell lg:table-cell'>
                  <div className='lg:text-[14px] lg:text-center lg:w-[157px] lg:h-[17px] lg'>
                    <h3 className=' lg:text-[14px] lg:text-left lg:items-center lg:font-medium lg:leading-[16.94px] lg:text-black
                     text-[12px] font-medium leading-[14.5px] text-center items-center text-black '>
                      {`${post.lastModified[0]} ${post.lastModified[1]}`}
                    </h3>
                    {/* {`${post.createdAt[0]} ${post.createdAt[1]}`} */}
                  </div>
                </TableCell>

                <TableCell className='lg:w-[107px] lg:h-[68.5px] lg:p-[16px] lg:gap-[8px] lg:border-b-[1px]  lg:bg-white lg:border-[#CBD5E1] lg:items-center lg:justify-center w-[60px] h-[99px] p-[16px] gap-[8px] 
                border-b-[1px]  bg-white border-[#CBD5E1] items-center justify-center lg:table-cell hidden' >
                  <div className='lg:w-[92px] lg:h-[27px] lg:text-center lg:justify-center lg:items-center lg:flex lg:bg-[#6DC34733] lg:rounded-full lg:gap-[0px] w-[18px] h-[17px] gap-[0px]
                bg-[#6DC34733'>
                    <h3 className=' lg:w-[72px] lg:h-[15px] lg:text-center lg:justify-center lg:items-center lg:flex lg:text-[12px] lg:font-normal lg:leading-[16.94px] lg:text-[#6DC347]
                     text-[12px] font-medium leading-[16.94px] text-left text-[#6DC347]  '>
                      {post.status}
                    </h3>
                  </div>

                </TableCell>
                <TableCell
                  className='lg:w-[86px] lg:h-[69px] lg:p-[16px] lg:gap-[8px] lg:border-b-[1px]   lg:bg-white
             lg:border-[#CBD5E1] md:table-cell lg:table-cell w-[69.06px] h-[26.33px] pt-[3.05px] pb-[3.05px]
             border-[#CBD5E1] justify-center'>
                  {/* width: 69.0594482421875;
height: 26.329999923706055;
gap: 3.05px;
border-bottom-width: 0.38px;
padding-top: 3.05px;
padding-right: 6.1px;
padding-bottom: 3.05px;
padding-left: 6.1px; */}


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
