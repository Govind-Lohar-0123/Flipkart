import { Box, Typography, styled } from "@mui/material";
const Deals = styled(Typography)`
  line-height: 40px;
  font-size: 1.3rem;
  word-spacing: 0;
`;

const AdvertimentTitle = ({ title }) => {
  return (
    <>
      <Box className=" d-flex bg-white  py-3 px-3 align-items-center justify-content-space-between w-100">
        <Deals className="text-bold">{title}</Deals>
      </Box>
    </>
  );
};

export default AdvertimentTitle;
