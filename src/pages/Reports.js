import React from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'

function Reports() {
  return (
    <div className={`flex`}>
        <div>
            <SideBar />
        </div>
        <div className="ms-[184.5px] flex-grow">
            <div className="">
                    <NavBar />
            </div>
            <div className="pt-5">
                    <section className="bg-white px-5">
                        <div className="flex justify-between items-center mx-1 mb-5">
                            <div className="text-lg"><span className="flex justify-start items-center text-2xl font-semibold">Blocks - Analysis, </span><span className="text-sm flex justify-start items-center">Shoba Apartments</span></div>
                            <div className="oo0ooooooo">
                                    <div className="custom-select">
                                            <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>Choose a country</option>
                                                <option value="US">United States</option>
                                                <option value="CA">Canada</option>
                                                <option value="FR">France</option>
                                                <option value="DE">Germany</option>
                                            </select>
                                    </div>  
                            </div>
                        </div>
                    </section>
                              
            </div>
        </div>
    </div>
  )
}

export default Reports