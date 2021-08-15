import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
import YoutubeVideosDownloader from './components/YoutubeVideosDownloader';
import Test from './components/Test';

const App=()=>{
  return(
    <>
    <Navbar/>
    <Switch>
      <Route path="/" exact>
        <YoutubeVideosDownloader/>
      </Route>
      <Route path="/youtube-video-downloader" >
        <YoutubeVideosDownloader/>
      </Route>
      <Route path="/test">
        <Test/>
      </Route>
    </Switch>
    </>
  )
}

export default App;
