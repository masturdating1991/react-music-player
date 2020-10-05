import React from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import shapeOfYou from './Music/shape.mp3'
import musicCover from './Music/shape.jpg'
// https://www.npmjs.com/package/react-jinke-music-player

function App() {
  const audioList = [
    {
      cover: musicCover,
      musicSrc: shapeOfYou,
      name: 'Shape of you',
      singer: 'Ed Sheeran'
    }
  ]
  return (
    <div>
      <ReactJkMusicPlayer audioLists={audioList} autoPlay={false} toggleMode={false} mode="full" />
    </div>
  )
}

export default App
