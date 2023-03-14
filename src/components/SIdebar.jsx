import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { FiHome } from 'react-icons/fi'
import { FaUsers, FaBuilding, FaDollarSign } from 'react-icons/fa'
import{ GiStabbedNote } from 'react-icons/gi'
import { HiUsers } from 'react-icons/hi'
import { IoMdCall } from 'react-icons/io'
import { AiOutlineMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Top from './Top'


const SIdebar = () => {
    return (
        <div className='bg-[rgba(0, 41, 121, 1)]'>

            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <div className=''>

            </div>
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64  text-white  h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full font-bold px-3 py-4 overflow-y-auto bg-blue-800">
                    <h4 className='py-12 font-bold text-[18px] text-center'>Ekolance LMS</h4>
                    <ul className="space-y-2 font-bold">
                    
                  <Link to={'/'}>
                  <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:text-gray-600 hover:bg-gray-100 " >
                            <RxDashboard />
                            <span className="ml-3 font-bold ">Dashboard</span>
                        </a>

                        </li>
                  </Link>
                 
                        <Link to={'/Home'}>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:text-gray-600 hover:bg-gray-100" >
                            <FiHome />
                            <span className="ml-3 font-bold">Home</span>
                        </a>

                        </li>
                        </Link>
                        <Link to={'/Cohorts'}>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:text-gray-600 hover:bg-gray-100" >
                            <FaUsers />
                            <span className="ml-3 font-bold">cohorts</span>
                        </a>

                        </li>
                        </Link>
                        <Link to={'/Hackathons'}>
                        <li> 
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:text-gray-600 hover:bg-gray-100" >
                            <FaBuilding />
                            <span className="ml-3 font-bold">Hackathons</span>
                        </a>

                        </li>
                        </Link>
                            <Link to={'/CrowdfundCampaigns'}>
                            <li> 
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:text-gray-600 hover:bg-gray-100" >
                            <GiStabbedNote />
                            <span className="ml-3 font-bold">Crowdfund Campaigns</span>
                        </a>

                        </li>
                            </Link >
                     <Link to={'/Profile'}>
                     <li>
                             <a href="#" className="flex items-center p-2 text-base font-normal  text-gray-100 rounded-lg dark:text-white hover:text-gray-600 hover:bg-gray-100" >
                            <HiUsers />
                            <span className="ml-3 font-bold">Profile</span>
                        </a>
                        </li>
                     </Link>

                       
                        <button type="button" className="flex items-center w-full p-2 text-base font-normal text-gray-100 transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-gray-600 text-bold dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <FaDollarSign />
                            <span className="flex-1 ml-3 text-left whitespace-nowrap font-bold">Wallet</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>


                    </ul>
                    <ul className='mt-3'>
                        <h5 className='text-gray-300 flex items-center font-bold p-2 text-base  rounded-lg dark:text-white '>Teams</h5>
                        <li> 
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:text-gray-600 hover:bg-gray-100" >
                            <AiOutlineMessage />
                            <span className="ml-3 capitalize">message</span>
                        </a>

                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-100 rounded-lg dark:text-white hover:text-gray-600 hover:bg-gray-100" >
                            <IoMdCall />
                            <span className="ml-3 capitalize">call Meeting</span>
                        </a>

                        </li>

                    </ul>
                </div>

            </aside>

        <Top />
        </div>
    )
}

export default SIdebar
