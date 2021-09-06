import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const LazyLoader = () => {
  return (
    <>
      <Box display="flex" p={1} justifyContent="center">
        <CircularProgress />
      </Box>
    </>
  );
};

export default LazyLoader;
