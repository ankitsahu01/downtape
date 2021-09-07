import { lazy, Suspense } from "react";
import TopBarProgress from "react-topbar-progress-indicator";
const HowToDownload = lazy(() => import("../common/HowToDownload"));
const AvailableVideosDownloader = lazy(() =>
  import("../common/AvailableDownloaders")
);
const AboutDownloader = lazy(() => import("../common/AboutDownloader"));

const DownloaderPageContent = ({title, img, downloadSteps, description}) => {
  return (
    <>
      <Suspense fallback={<TopBarProgress />}>
        <HowToDownload
          title={title}
          img={img}
          downloadSteps={downloadSteps}
        />
        <AvailableVideosDownloader />
        <AboutDownloader
          title={title}
          description={description}
        />
      </Suspense>
    </>
  );
};

export default DownloaderPageContent;
