import React from 'react'

import { GrPlay } from 'react-icons/gr'
import { BsPlayBtn } from 'react-icons/bs'
import { FiPlay } from 'react-icons/fi'
import { BiMessageSquareAdd, BiDownvote } from 'react-icons/bi'
import { AiOutlineMessage } from 'react-icons/ai'

import styles from './index.module.scss'

const Card = () => {
  return (
    <div className='flex justify-between items-center hover:bg-slate-100 py-1 w-[98%] group'>
      <div className='flex items-center'>
        <div className='w-20 h-20 bg-slate-500 rounded-md mr-2 flex-shrink-0'></div>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <span className='truncate mr-2 text-base'>ASSD WQEE ASDASE QWEKLJG IUWEHJHS</span>
              <span className='border-green-500 text-green-500 rounded text-xs border-[1px] mr-2 select-none flex-shrink-0'>HQ</span>
              <BsPlayBtn className='flex-shrink-0 w-6 text-slate-500 transition-all duration-500 hover:text-slate-700 hover:scale-110 cursor-pointer'/>
            </div>
          <span className='text-sm text-slate-500 truncate'>StarKy</span>
        </div>
      </div>
      <div className='hidden sm:opacity-0 sm:flex px-3 py-1 text-slate-500 group-hover:opacity-100 transition-all duration-500 text-xl flex-shrink-0'>
        <FiPlay className={styles.icon}/>
        <BiMessageSquareAdd className={styles.icon}/>
        <BiDownvote className={styles.icon}/>
        <AiOutlineMessage className={styles.icon}/>
      </div>
    </div>
  )
}

const Cards = () => {
  return (
    <div className='flex pl-7 mt-2 py-1 w-full overflow-x-auto'>
      <div className='felx flex-col w-[92%] flex-shrink-0 lg:w-1/2'>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className='felx flex-col w-[92%] flex-shrink-0 lg:w-1/2'>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className='felx flex-col w-[92%] flex-shrink-0 lg:w-1/2'>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

const SongList = ({ title }) => {
  return (
    <>
      <div className='flex items-center mt-4 pl-7'>
        <span className='my-2 text-lg font-medium select-none mr-4'>{title}</span>
        <span className='flex items-center text-sm py-1 px-3 bg-slate-100 rounded-3xl cursor-pointer transition-all duration-500 hover:bg-slate-200'>
          <GrPlay/>
          <span className='pl-1 select-none'>播放全部</span>
        </span>
      </div>
      <Cards/>
    </>
  );
}

export default SongList;
