import { lazy, Suspense } from "react";
const HowToDownload = lazy(() =>
  import("../common/HowToDownload")
);
const AvailableDownloaders = lazy(() =>
  import("../common/AvailableDownloaders")
);
const AboutDownloader = lazy(() =>
  import("../common/AboutDownloader")
);

const DownloaderPageContent = ({title, img, downloadSteps, description}) => {
  return (
    <>
    <Suspense fallback="">
      <HowToDownload
        title={title}
        img={img}
        downloadSteps={downloadSteps}
      />
      <AvailableDownloaders />
      <AboutDownloader
        title={title}
        description={description}
      />
      </Suspense>
    </>
  );
};

export default DownloaderPageContent;
