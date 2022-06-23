import { useEffect, useRef } from "react"

import { PrestrainOutImg } from "../../utils"

import styles from './index.module.scss'

const imgArr = [
  {id: 0, url: 'https://picsum.photos/400/250'},
  {id: 1, url: 'https://picsum.photos/400/251'},
  {id: 2, url: 'https://picsum.photos/400/252'},
]

const Carousel = () => {

  const cardsRef = useRef()

  useEffect(()=>{
    const radius = 11
    const aImg = cardsRef.current.children
    const init = delayTime => {
      for (let i = 0; i < aImg.length; i++) {
        aImg[i].style.transform = `rotateY(${i * (360 / aImg.length)}deg) translateZ(${radius}rem)`
        aImg[i].style.transitionDelay =  (delayTime || (aImg.length - i) / 4) + 's'
      }
    }
    setTimeout(init, 800)
  },[])

  const rotate = () => {
    const aImg = cardsRef.current.children
    if (!cardsRef.current.style.transform) cardsRef.current.style.transform = `rotateY(0deg)`
    let curRotateY = cardsRef.current.style.transform.slice(8,-4)

    cardsRef.current.style.transform = `rotateY(${(curRotateY - (360 / aImg.length))}deg)`
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.cards} ref={cardsRef} onClick={rotate}>
        {imgArr.map(item => <div className={`img`} key={item.id}><PrestrainOutImg imgUrl={item.url}/></div>)}
      </div>
    </div>
  )
}

export default Carousel
