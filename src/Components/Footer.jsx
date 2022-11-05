import React from "react";
import { Box, Flex } from "@chakra-ui/react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Box>
      <Flex justifyContent="space-evenly" pb="15px" pt="15px" color="whiteAlpha.800" bgColor="#0f111f" className="footer" direction={["column", "row", "row"]}>
        <Box>
          <h3>Designed and Developed by Premkumar Jadhav</h3>
        </Box>
        <Box >
          <h3>{year} All Rights Reserved</h3>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;