import { lazy, Suspense, useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import Message from "../components/Message"
import styles from './utils.module.scss'

export const getImage = (imgUrl) => new URL(imgUrl, import.meta.url).href

export const PrestrainLocalImg = ({ imgUrl }) => {
  const [loadingOk, setLoadingOk] = useState(false)

  useEffect(()=>{
    var image = new Image()
    image.src = `/src/assets/images/${imgUrl}`
    image.onload = () => setLoadingOk(true)
  }, [])

  return ( loadingOk ? <img className="h-full w-full" src={getImage(`/src/assets/images/${imgUrl}`)} alt="" /> : <div className="h-full w-full animate-pulse bg-slate-200"></div> )
}

export const PrestrainOutImg = ({ imgUrl }) => {
  const [loadingOk, setLoadingOk] = useState(false)

  useEffect(()=>{
    var image = new Image()
    image.src = `${imgUrl}`
    image.onload = () => setLoadingOk(true)
  }, [])

  return ( loadingOk ? <img className="h-full w-full" src={getImage(imgUrl)} alt="" /> : <div className="h-full w-full animate-pulse bg-slate-200"></div> )
}

export const lazyLoadComponent = component => {
  const LazyComponent = lazy(component)
  return (
    <Suspense fallback={
      <div className={styles.lazyLoad}>
        <img src={getImage('/src/assets/images/loading2.jpg')} className={styles.gifimg} />
      </div>
    }>
      <LazyComponent />
    </Suspense>
  )
}

export const RouterIntercept = ({ Component }) => {

  const token = localStorage.getItem("token")

  useEffect(()=>{
    if (!token) Message.onInfo('请先登录')
  })

  return (token ? Component : <Navigate to="/login"/> )
}
