import React from 'react';
import './App.css';
import VideoPreview from './components/VideoPreview';
import ChannelDescription from './components/ChannelDescription';
import ChannelTitles from './components/ChannelTitles';
import Shows from './components/Shows';

export default function App() {
  return (
    <div className='container'>
      <div className='top'>
        <VideoPreview/>
        <ChannelDescription/>
      </div>
      <div className='channel-info'>
        <ChannelTitles/>
        <Shows/>
      </div>
    </div>
  );
}
