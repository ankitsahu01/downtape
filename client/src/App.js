import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import YoutubeVideosDownloader from "./components/pages/YoutubeVideosDownloader";
import InstagramVideosDownloader from "./components/pages/InstagramVideosDownloader";
import TwitterVideosDownloader from "./components/pages/TwitterVideosDownloader";
import VimeoVideosDownloader from "./components/pages/VimeoVideosDownloader";
import Faq from "./components/pages/Faq";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Terms from "./components/pages/Terms";
import NotFound from "./components/pages/NotFound";
import Test from "./components/pages/Test";
import CustomSwitch from "./components/CustomSwitch";
import LazyLoader from "./components/LazyLoader";
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <Navbar />
      </Suspense>
      <CustomSwitch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/youtube-video-downloader">
          <YoutubeVideosDownloader />
        </Route>
        <Route path="/instagram-video-downloader">
          <InstagramVideosDownloader />
        </Route>
        <Route path="/twitter-video-downloader">
          <TwitterVideosDownloader />
        </Route>
        <Route path="/vimeo-video-downloader">
          <VimeoVideosDownloader />
        </Route>
        <Route path="/frequently-asked-questions">
          <Faq />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/terms-of-service">
          <Terms />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="*" exact>
          <NotFound />
        </Route>
      </CustomSwitch>
      <Suspense fallback={<LazyLoader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
