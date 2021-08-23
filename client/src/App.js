import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
import YoutubeVideosDownloader from './components/YoutubeVideosDownloader';
import InstagramVideosDownloader from './components/InstagramVideosDownloader';
import Test from './components/Test';

const App=()=>{
  return(
    <>
    <Navbar/>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/youtube-video-downloader" />
      </Route>
      <Route path="/youtube-video-downloader" >
        <YoutubeVideosDownloader/>
      </Route>
      <Route path="/instagram-video-downloader">
        <InstagramVideosDownloader/>
      </Route>
      <Route path="/test">
        <Test/>
      </Route>
    </Switch>
    </>
  )
}

export default App;
