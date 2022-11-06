import { Box, Flex, Heading, Img } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
    return (

        <Box
            pb='25px'
            h={["auto"]}
            color="white"
            textAlign="left"
            fontFamily="'Noto Sans', sans-serif"
            bgGradient='linear(to-t, black 20%,rgb(17,19,36))'

        >

            <Flex justifyContent={'center'} py='15px'>
                <Box borderBottom="4px solid gray" w='250px'>
                    <Heading display='inline' >Days I <span className="span">Code </span></Heading>
                </Box>
            </Flex>

            <Flex justifyContent='center' w="90%" m="auto" >
                <Box m="auto" w="90%" py="40px">
                    <GitHubCalendar
                        username="premj44"
                        blockSize={15}
                        blockMargin={5}
                        color="#dc143c"
                        fontSize={16}
                    />
                </Box>
            </Flex>
            <Box  ml={{sm:"0px" , md:"0px",lg:"105px"}}>

                <Flex direction={['column', 'row']} w={["80%", '80%']} gap={['10px', '20px']} m='auto'>
                    <Box className="hover-effect">
                        <Img
                            align="center"
                            src="https://github-readme-streak-stats.herokuapp.com/?user=premj44&theme=dark"
                            alt="langs"
                            w='450px'
                        />
                    </Box>

                    <Box  className="hover-effect">
                        <Img

                            align="left"
                            src="https://github-readme-stats.vercel.app/api?username=premj44&count_private=true&show_icons=true&theme=dark"
                            alt="stats"
                            w='450px'

                        />
                    </Box>
                </Flex>
            </Box>
        </Box>

    );
}
export default Github;