import { useRef, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { RiNeteaseCloudMusicLine } from "react-icons/ri"
import { FiSearch } from "react-icons/fi"
import { GiCheckeredDiamond, GiSpellBook } from "react-icons/gi"
import { RiTShirtLine } from "react-icons/ri"
import { BsList, BsTextareaResize, BsChevronDown } from "react-icons/bs"

import { PrestrainLocalImg } from '../../utils'

import styles from './index.module.scss'

const NavBar = () => {

  const [ isValue, setIsValue ] = useState(false)

  const inpChange = e => {
    if (e.target.value) setIsValue(true)
    if (!e.target.value) setIsValue(false)
  }

  return (
    <div className='bg-white w-full px-5 py-3 flex justify-between items-center drop-shadow-lg'>
      <div className='flex items-center'>
        <AiOutlineLeft className={`${styles.icon}`}/>
        <AiOutlineRight className={`${styles.icon}`}/>
        <div className={styles.inputBox}>
          <input type="text" maxLength='18' className={`z-10 ${styles.input}`} onChange={inpChange}></input>
          <div className={styles.searchBg}>
            <div className={`flex items-center text-xs z-0 ${styles.show}`} style={{ opacity: (isValue && 0) }}>
              <FiSearch className={`${styles.searchIcon}`}/>
              搜索音乐
            </div>
            <FiSearch className={`${styles.none} ${styles.searchIcon}`}/>
          </div>
        </div>
        <RiNeteaseCloudMusicLine className={`${styles.icon} ${styles.iconBg}`}/>
      </div>
      <div className='flex items-center'>
        <div className='w-6 h-6  rounded-full cursor-pointer'>
          <PrestrainLocalImg imgUrl='骑士.png'/>
        </div>
        <div className='mx-2 text-sm text-gray-500 cursor-pointer'>GGBoy</div>
        <GiCheckeredDiamond className={`${styles.icon} ${styles.iconMd}`}/>
        <GiSpellBook className={`${styles.icon} ${styles.iconMd}`}/>
        <BsChevronDown className={`${styles.icon} ${styles.iconMd}`}/>
        <RiTShirtLine className={`${styles.icon} ${styles.iconMd}`}/>
        <BsList className={`${styles.icon} ${styles.iconMd}`}/>
        <span className='text-lg text-gray-400 mx-2 select-none'>|</span>
        <BsTextareaResize className={`${styles.icon} ${styles.iconMd}`}/>
      </div>
    </div>
  )
}

export default NavBar
