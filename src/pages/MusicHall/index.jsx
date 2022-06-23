import {useState} from 'react'
import {IoIosArrowBack} from 'react-icons/io'

import { PrestrainOutImg } from '../../utils'
import { Carousel } from '../../components'

import styles from './index.module.scss'

const MusicHall = () => {
  return (
    <div className='p-0 overflow-visible md:p-4'>
      <header className={styles.head}>
        <span className={styles.headTitle}>潮 流 音 乐</span>
        <span className={styles.info}>is where life happens</span>
        <input type="checkbox" className={styles.checkbox} id='toggle'/>
        <label for='toggle' className={`${styles.scaleBtn}`}><span>Go Music</span></label>
        <div className={styles.scaleBg}></div>
        <div className={styles.musicContainer}>
          <label for='toggle' className={styles.back}><IoIosArrowBack /> BACK</label>
        </div>
      </header>
      <main>
        <div className={styles.selection}>
          <div className='text-center overflow-visible'><span className={styles.title}>官方甄选订阅歌单</span></div>
          <div className='flex flex-col lg:flex-row justify-center w-full px-10 pt-12 overflow-visible'>
            <div className='flex flex-col justify-center flex-1 overflow-visible'>
              <div className=''>
                <div className={styles.info}>
                  <h3>有声电台</h3>
                  <span>情绪心理学:应对各种日常心理伤害的策略与方法情绪心理学:应对各种日常心理伤害的策略与方法情绪心理学:应对各种日常心理伤害的策略与方法情绪心理学:应对各种日常心理伤害的策略与方法</span>
                </div>
                <div className={styles.info}>
                  <h3>最新发行</h3>
                  <span>情绪心理学:应对各种日常心理伤害的策略与方法情绪心理学:应对各种日常心理伤害的策略与方法情绪心理学:应对各种日常心理伤害的策略与方法情绪心理学:应对各种日常心理伤害的策略与方法</span>
                </div>
              </div>
              <div className={styles.arrowsBtn}><p>查看更多 &rarr;</p></div>
            </div>
            <div className={styles.photoList}>
              <div className={`${styles.photo} ${styles.photoP1}`}><PrestrainOutImg imgUrl='https://picsum.photos/400/250'/></div>
              <div className={`${styles.photo} ${styles.photoP2}`}><PrestrainOutImg imgUrl='https://picsum.photos/400/251'/></div>
              <div className={`${styles.photo} ${styles.photoP3}`}><PrestrainOutImg imgUrl='https://picsum.photos/400/252'/></div>
            </div>
          </div>
        </div>
        
        <div className={styles.randomMusic}>
          <div className='text-center overflow-visible mb-6 mt-[-1.5rem]'><span className={`tracking-wide text-white text-3xl py-1 mb-4 select-none`}>猜你喜欢</span></div>
          <ul className={styles.musicCards}>
            <li className={styles.musicCard}>
              <div className={styles.before}>
                <div className={styles.imgContainer}>
                  <div className={styles.img}><PrestrainOutImg imgUrl='https://picsum.photos/400/253'/><div className={styles.imgShade}></div></div>
                  <div className={styles.imgTitle}>
                    <span>THE SEA EXPLIRER</span>
                  </div>
                </div>
              </div>
              <div className={styles.back}>
                <div className={styles.bgVido}>
                  <video autoPlay muted loop className={styles.bgVidoContent}>
                    <source src='/src/assets/video/1.mp4' type='video/mp4'/>
                  </video>
                </div>
              </div>
            </li>

            <li className={styles.musicCard}>
              <div className={styles.before}>
                <div className={styles.imgContainer}>
                  <div className={styles.img}><PrestrainOutImg imgUrl='https://picsum.photos/400/254'/><div className={styles.imgShade}></div></div>
                  <div className={styles.imgTitle}>
                    <span>THE SEA EXPLIRER</span>
                  </div>
                </div>
              </div>
              <div className={styles.back}>
                <div className={styles.bgVido}>
                  <video autoPlay muted loop className={styles.bgVidoContent}>
                    <source src='/src/assets/video/2.mp4' type='video/mp4'/>
                  </video>
                </div>
              </div>
            </li>

            <li className={styles.musicCard}>
              <div className={styles.before}>
                <div className={styles.imgContainer}>
                  <div className={styles.img}><PrestrainOutImg imgUrl='https://picsum.photos/400/255'/><div className={styles.imgShade}></div></div>
                  <div className={styles.imgTitle}>
                    <span>THE SEA EXPLIRER</span>
                  </div>
                </div>
              </div>
              <div className={styles.back}>
                <div className={styles.bgVido}>
                  <video autoPlay muted loop className={styles.bgVidoContent}>
                    <source src='/src/assets/video/3.mp4' type='video/mp4'/>
                  </video>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.coolCarousel}>
          <Carousel />
        </div>

      </main>
    </div>
  )
}

export default MusicHall
