import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import HomePage from "./components/pages/HomePage";
// import YoutubeVideosDownloader from "./components/pages/Downloader";
// import InstagramVideosDownloader from "./components/pages/InstagramVideosDownloader";
// import TwitterVideosDownloader from "./components/pages/TwitterVideosDownloader";
// import VimeoVideosDownloader from "./components/pages/VimeoVideosDownloader";
import Faq from "./components/pages/Faq";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Terms from "./components/pages/Terms";
import NotFound from "./components/pages/NotFound";
import Test from "./components/pages/Test";
import CustomSwitch from "./components/CustomSwitch";
import TopBarProgress from "react-topbar-progress-indicator";

// const Navbar = lazy(() => import("./components/Navbar"));
const HomePage = lazy(() => import("./components/pages/HomePage"));
const YoutubeVideosDownloader = lazy(() => import("./components/pages/YoutubeVideosDownloader"));
const InstagramVideosDownloader = lazy(() => import("./components/pages/InstagramVideosDownloader"));
const TwitterVideosDownloader = lazy(() => import("./components/pages/TwitterVideosDownloader"));
const VimeoVideosDownloader = lazy(() => import("./components/pages/VimeoVideosDownloader"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<TopBarProgress />}>
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
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
