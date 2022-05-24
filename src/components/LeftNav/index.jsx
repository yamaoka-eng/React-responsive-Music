import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillStar, AiFillCustomerService, AiOutlineVideoCamera, AiFillHeart, AiOutlineFieldTime, AiOutlinePlus, AiOutlineDown } from "react-icons/ai"
import { BiRadio } from "react-icons/bi"
import { RiComputerFill } from "react-icons/ri"
import { BsMusicNoteList } from "react-icons/bs"

import { PrestrainLocalImg } from '../../utils'

import styles from './index.module.scss'

const LeftNav = () => {

  const [ choose, setChoose ] = useState(1)
  const [ hobbyOne, setHobbyOne ] = useState(false)
  const [ hobbyTwo, setHobbyTwo ] = useState(false)

  const history = useNavigate()

  useEffect(()=>{
    switch (choose) {
      case 1:
        history('/recommend')
        break

      case 2:
        history('/musichall')
        break

      case 3:
        
        break;

      case 4:
      
        break

      case 5:
      
        break

      case 6:
      
        break

      case 7:
      
        break

      case 8:
      
        break
      default:
        history('/')
        break;
    }
  },[choose])

  return (
    <div className={styles.main + ' bg-gray-100 h-full px-6 flex flex-col'}>
      <div className='flex items-center pt-4 pb-3 px-2'>
        <div className='w-8 h-6 pr-1'><PrestrainLocalImg imgUrl='musicLogo.png' /></div>
        <span className='font-mono font-semibold text-xl w-24'>PPMusic</span>
      </div>
      <div className={styles.navContainer + ' flex flex-col w-full'}>
        <span>在线音乐</span>
        <p className={`${choose === 1 && styles.show}`} onClick={()=>setChoose(1)}><AiFillStar className={styles.icon}/>推荐</p>
        <p className={`${choose === 2 && styles.show}`} onClick={()=>setChoose(2)}><AiFillCustomerService className={styles.icon}/>音乐馆</p>
        <p className={`${choose === 3 && styles.show}`} onClick={()=>setChoose(3)}><AiOutlineVideoCamera className={styles.icon}/>视频</p>
        <p className={`${choose === 4 && styles.show}`} onClick={()=>setChoose(4)}><BiRadio className={styles.icon}/>电台</p>
        <span>我的音乐</span>
        <p className={`${choose === 5 && styles.show}`} onClick={()=>setChoose(5)}><AiFillHeart className={styles.icon}/>我喜欢</p>
        <p className={`${choose === 6 && styles.show}`} onClick={()=>setChoose(6)}><RiComputerFill className={styles.icon}/>本地和下载</p>
        <p className={`${choose === 7 && styles.show}`} onClick={()=>setChoose(7)}><AiOutlineFieldTime className={styles.icon}/>最近播放</p>
        <p className={`${choose === 8 && styles.show}`} onClick={()=>setChoose(8)}><BsMusicNoteList className={styles.icon}/>试听列表</p>
        <div>
          <span onClick={()=>setHobbyOne(!hobbyOne)}>创建歌单</span>
          <AiOutlinePlus className={styles.icon}/>
          <AiOutlineDown onClick={()=>setHobbyOne(!hobbyOne)} className={`${styles.icon} ${hobbyOne && styles.rotate}`}/>
        </div>
        <div>
          <span onClick={()=>setHobbyTwo(!hobbyTwo)}>收藏的歌单</span>
          <AiOutlineDown onClick={()=>setHobbyTwo(!hobbyTwo)} className={`${styles.icon} ${hobbyTwo && styles.rotate}`}/>
        </div>
      </div>
    </div>
  )
}

export default LeftNav
