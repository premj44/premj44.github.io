import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
    return (

        <Box
            pl={["0px", "60px"]}
            h={["auto"]}
            color="white"
            textAlign="left"
            fontFamily="'Noto Sans', sans-serif"
            bgGradient='linear(to-t, black 20%,rgb(17,19,36))'

        >
            <Box borderBottom="4px solid gray" w="240px">
                <Heading ml="30px" borderBottom="4px solid gray 15px">Days ,I <span className="span">Code </span></Heading>
            </Box>

            <Box m="auto" w="90%" py="40px" pt="50px">
                <GitHubCalendar
                    username="premj44"
                    blockSize={15}
                    blockMargin={5}
                    color="#dc143c"
                    fontSize={16}
                />
            </Box>
        </Box>

    );
}
export default Github;