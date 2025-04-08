import React from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar';
import {Notification03Icon, UserSharingIcon, AirdropIcon, PaintBrush01Icon, CpuIcon, WaterEnergyIcon} from 'hugeicons-react';
import Profile from '../components/Profile';
function Dashboard() {
  return (
    <div className={`flex`}>
        <div>
            <SideBar />
        </div>
        <div className="ms-[184.5px] flex-grow">
          <div>
              <NavBar />
          </div>
          <div className="pt-5">
                <section className='bg-white px-5'>
                        <div className="flex justify-between items-center mx-1 mb-5">
                            <div className="text-lg"><span className="flex justify-start items-center text-2xl font-semibold">Welcome,</span><span className="text-sm">Shoba Apartments</span></div>
                            <div className="">
                                <div className="grid grid-cols-3 gap-5">
                                        <div className="text-sm"><span className="flex justify-center items-center">Billing Cycle</span><span className="font-semibold">-</span></div>
                                        <div className="text-sm"><span className="flex justify-center items-center">Water Price</span><span className="font-semibold">-</span></div>
                                        <div className="w-[40%]"><button className="bg-gray-100 flex justify-center items-center px-2 py-2 rounded-xl hover:bg-[#00A877] hover:text-white transition ease-in-out duration-200"><PaintBrush01Icon size={22} className=""/></button></div>
                                </div>
                            </div>    
                        </div>
                        <div className="grid grid-cols-4 gap-8">
                            {/* <div className="col-span-2"> */}
                                {/* <div className={`grid grid-cols-3 gap-10`}> */}
                                        <div className='border shadow-lg border border-b-2 border-t-1 border-l-1 border-r-1 border-b-[#00A877] rounded-lg min-h-24 p-2'>
                                            <div className="flex gap-5">
                                                <div className='pt-5 text-[#00A877]'><CpuIcon size={40}/></div>
                                                <div>
                                                            <div className="flex justify-start items-start px-2 text-sm">TOTAL DEVICES</div>
                                                            <div className="text-4xl pt-3 flex justify-start items-start ps-[9px]">700</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border shadow-lg border border-b-2 border-t-1 border-l-1 border-r-1 border-b-[#00A877] rounded-lg min-h-24 p-2'>
                                            <div className="flex gap-5">
                                                <div className='pt-5 text-[#00A877]'><AirdropIcon size={40}/></div>
                                                <div>
                                                            <div className="flex justify-start items-start px-2 text-sm">ACTIVE DEVICES</div>
                                                            <div className="text-4xl pt-3 flex justify-start items-start ps-[9px]">700</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border shadow-lg border border-b-2 border-t-0 border-l-0 border-r-0 border-[#00A877] rounded-lg min-h-24 p-2'>
                                            <div className="flex gap-5">
                                                <div className='pt-5 text-[#00A877]'><WaterEnergyIcon size={40}/></div>
                                                <div>
                                                            <div className="flex justify-start items-start px-2 text-sm">CONSUMPTION</div>
                                                            <div className="text-4xl pt-3 flex justify-start items-start ps-[9px]">700</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border shadow-lg border border-b-2 border-t-1 border-l-1 border-r-1 border-b-[#00A877] rounded-lg min-h-24 p-2'>
                                            <div className="flex justify-start items-start px-2 text-sm">CONSUMPTION</div>
                                            <div className="text-4xl pt-5 flex justify-start items-start ps-[9px]">700</div>
                                        </div>
                        </div>
                </section>
                {/* Graph */}
                <section className="bg-gray-100 mt-5">
                         <div className="">
                                            <div className="grid grid-cols-3 gap-5 mx-2 p-2">
                                                    <div className="col-span-2 bg-white p-2">
                                                        <div className="flex justify-between">
                                                                <div className="font-semibold">Consumption Stats</div>
                                                                <div className="flex gap-3">
                                                                    <div className="text-xs text-blue-800 pt-[6px]"><a href="" alt="">View all reports</a></div>
                                                                    <select className="focus:ring-0 focus:ring-offset-0 focus:ring-0 focus:outline-none text-sm">
                                                                            <option className="text-sm">This week</option>
                                                                            <option className="text-sm">Last week</option>
                                                                    </select>
                                                                </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-1 bg-white p-2">
                                                        <div className="flex justify-between">
                                                               <div  className="font-semibold">Device Stats</div>
                                                        </div>
                                                    </div>
                                            </div>
                         </div>
                </section>
          </div>
        </div>
        {/* <Profile /> */}
    </div>  
  )
}

export default Dashboard