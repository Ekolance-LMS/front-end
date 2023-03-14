import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FiSettings } from 'react-icons/fi'
import Lop from '../assets/po.png'
const Top = () => {
  return (
    <div>
        <div className='flex justify-between px-8 py-5 items-center'>
            <h3 className='font-bold'>Hello Yinka, Welcome back 👋🏻</h3>
            <div className="icons flex gap-8 items-center">
                <IoMdNotificationsOutline className='focus:bg-pink-400' size={23} />
                <FiSettings size={20} />
                 <img src={Lop} alt=""  width={40} />
            </div>
        </div>

    </div>
  )
}

export default Top