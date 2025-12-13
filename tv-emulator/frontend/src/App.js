import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import VideoPreview from './components/VideoPreview';
import ChannelDescription from './components/ChannelDescription';
import ChannelTitles from './components/ChannelTitles';
import Shows from './components/Shows';

export default function App() {
  const[time,setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='container'>
      <div className='top'>
        <VideoPreview/>
        <ChannelDescription time={time}/>
      </div>
      <div className='channel-info'>
        <ChannelTitles/>
        <Shows time={time}/>
      </div>
    </div>
  );
}
