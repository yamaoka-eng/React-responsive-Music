import { useEffect, useState } from 'react'
import { PrestrainOutImg } from '../../utils'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import { RiHeartAddLine } from 'react-icons/ri'
import { IoHeartDislikeOutline, IoHeadset } from 'react-icons/io5'
import { HiOutlineChatAlt } from 'react-icons/hi'
import { ImNext2 } from 'react-icons/im'

import styles from './index.module.scss'

export const LongCard = ({ color }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardLong + ' ' + styles.responsive}>
        <div className={`${styles.topBg} bg-${color}-200 opacity-25`}></div>
        <div className={styles.TopTitle}>For<br />You</div>
        <div className='w-full h-full flex justify-center items-center px-7 overflow-x-hidden'>
          <div className='relative h-2/3 aspect-square rounded-lg bg-amber-500 mr-4 flex-shrink-0'>
            <div className={styles.shade}></div>
            <AiFillPlayCircle className={styles.logo}/>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='text-white truncate text-lg mb-1'>SASD ASDF GS ASDASDA</div>
            <div className='text-slate-300 truncate text-xs mb-2'>ASE FFDD QWE</div>
            <div className='relative -left-1 flex items-center text-white text-xl'>
              <ImNext2 className='mr-2 cursor-pointer'/>
              <RiHeartAddLine className='mr-2 cursor-pointer'/>
              <IoHeartDislikeOutline className='mr-2 cursor-pointer'/>
              <HiOutlineChatAlt className=' cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
      <span>个性电台</span>
    </div>
  )
}

export const Card = ({ title, color, description, persons }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card + ' ' + styles.responsive}>
        <div className={styles.shade}></div>
        <AiFillPlayCircle className={styles.logo}/>
        <div className={`${styles[color]} ${styles.topBg}`}></div>
        <div className={styles.TopTitle}>{title}</div>
        { persons &&
          <div className={styles.persons}>
            <IoHeadset/>
            {persons}
          </div>
        }
      </div>
      <span>{description}</span>
    </div>
  )
}

export const SongListCards = ({ title, data}) => {

  let eles = []
  let eles2 = []

  for (let i = 0; i < 8; i++) {
    eles.push(<Card key={data[i].id} {...data[i]}/>)
  }
  if (data.length > 8) {
    for (let i = 8; i < 16; i++) {
      eles2.push(<Card key={data[i].id} {...data[i]}/>)
    }
  }

  return (
    <>
      <h3 className='mt-7 text-lg font-medium select-none pl-7'>{title}</h3>
      <div className='flex flex-col overflow-x-auto pl-7'>
        <div className='flex pt-6 flex-shrink-0 overflow-visible'>
          {eles}
        </div>
        { data.length > 8 &&  
          <div className='flex pt-6 flex-shrink-0 overflow-visible'>
            {eles2}
          </div>  
        }
      </div>
    </>
  )
}

