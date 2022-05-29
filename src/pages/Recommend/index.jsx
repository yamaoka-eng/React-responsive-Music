import { useEffect, useRef, useLayoutEffect } from 'react'

import { Card, LongCard, SongListCards, SongList } from '../../components'

const supplyData = [
  { id: 0,  description: '123', persons: 123},
  { id: 1,  description: '123', persons: 123},
  { id: 2,  description: '123', persons: 123},
  { id: 3,  description: '123', persons: 123},
  { id: 4,  description: '123', persons: 123},
  { id: 5,  description: '123', persons: 123},
  { id: 6,  description: '123', persons: 123},
  { id: 7,  description: '123', persons: 123},
  { id: 8,  description: '123', persons: 123},
  { id: 9,  description: '123', persons: 123},
  { id: 10,  description: '123', persons: 123},
  { id: 11,  description: '123', persons: 123},
  { id: 12,  description: '123', persons: 123},
  { id: 13,  description: '123', persons: 123},
  { id: 14,  description: '123', persons: 123},
  { id: 15,  description: '123', persons: 123},
]

const shortData = [
  { id: 0,  description: '123', persons: 123},
  { id: 1,  description: '123', persons: 123},
  { id: 2,  description: '123', persons: 123},
  { id: 3,  description: '123', persons: 123},
  { id: 4,  description: '123', persons: 123},
  { id: 5,  description: '123', persons: 123},
  { id: 6,  description: '123', persons: 123},
  { id: 7,  description: '123', persons: 123},
]

const RecommendCards = ({ name }) => {
  return (
    <>
      <h3 className='my-2 text-lg font-medium select-none pl-7'>Hi {name} 今日为你推荐</h3>
      <div className='flex w-full pt-2 overflow-x-auto pl-7'>
        <LongCard color='slate' />
        <Card title='Daily 30' color='blue' description='每日30首' />
        <Card title='Hot' color='rose' description='百万收藏' />
        <Card title='NEW' color='green' description='新歌推荐' />
        <Card title='Heart beat' color='indigo' description='下一首心动' />
      </div>
    </>
  )
}

const Recommend = () => {

  return(
    <div className='slide-in'>
      <div className='w-full flex flex-col'>
      <h1 className=' font-semibold text-2xl my-2 select-none pl-7'>推荐</h1>
      <RecommendCards name='GGBoy' />
      <SongListCards title='你的歌单补给站' data={supplyData}/>
      <SongList title='大家都在听'/>
      <SongListCards title='基于你常听的歌曲推荐' data={shortData}/>
      <SongListCards title='[动感光波节奏] 不够听? 试试它吧' data={shortData}/>
      <SongListCards title='最热门的电台节目，一键获得' data={shortData}/>
      <SongList title='用音乐打发美好时光吧'/>
      <SongListCards title='私荐给你的宝藏歌手' data={shortData}/>
      </div>
    </div>
  )
}

export default Recommend
