import HowToDownload from "../common/HowToDownload";
import AvailableDownloaders from "../common/AvailableDownloaders";
import AboutDownloader from "../common/AboutDownloader";

const DownloaderPageContent = ({title, img, downloadSteps, description}) => {
  return (
    <>
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
    </>
  );
};

export default DownloaderPageContent;
