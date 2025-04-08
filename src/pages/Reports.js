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
                            <div className="text-lg"><span className="flex justify-start items-center text-2xl font-semibold">Apartments, </span><span className="text-sm">Shoba Apartments</span></div>
                            <div className="oo0ooooooo">

                            </div>
                        </div>
                    </section>
                    <section className="">
                        <div className="flex justify-center items-center">
                                <table className="table-auto border w-[50%]">
                                        <thead>
                                            <tr>
                                                <th>Flat id</th>
                                                <th>Resident Name</th>
                                                <th>Resident Whatsapp</th>
                                                <th>Flow</th>
                                            </tr>
                                        </thead>
                                        <tbody className="">
                                            <tr>
                                                <td>Hello</td>
                                                <td>Hello</td>
                                                <td>Hello</td>
                                                <td>Hello</td>
                                            </tr>
                                            <tr>
                                                <td>Hello</td>
                                                <td>Hello</td>
                                                <td>Hello</td>
                                                <td>Hello</td>
                                            </tr>
                                            <tr>
                                                <td>Hello</td>
                                                <td>Hello</td>
                                                <td>Hello</td>
                                                <td>Hello</td>
                                            </tr>
                                        </tbody>
                                </table>
                        </div>
                    </section>           
            </div>
        </div>
    </div>
  )
}

export default Reports