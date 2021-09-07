import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopBarProgress from "react-topbar-progress-indicator";
import CustomSwitch from "./components/CustomSwitch";
const HomePage = lazy(() => import("./components/pages/HomePage"));
const YoutubeVideosDownloader = lazy(() => import("./components/pages/YoutubeVideosDownloader"));
const InstagramVideosDownloader = lazy(() => import("./components/pages/InstagramVideosDownloader"));
const TwitterVideosDownloader = lazy(() => import("./components/pages/TwitterVideosDownloader"));
const VimeoVideosDownloader = lazy(() => import("./components/pages/VimeoVideosDownloader"));
const Faq = lazy(() => import("./components/pages/Faq"));
const PrivacyPolicy = lazy(() => import("./components/pages/PrivacyPolicy"));
const Terms = lazy(() => import("./components/pages/Terms"));
const NotFound = lazy(() => import("./components/pages/NotFound"));
const Test = lazy(() => import("./components/pages/Test"));
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
