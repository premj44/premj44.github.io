import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import {
    SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { AiOutlineCodeSandbox } from "react-icons/ai";

function Tool() {
    const Tools = [
        { tool: AiOutlineCodeSandbox },
        { tool: SiNetlify },
        { tool: SiVisualstudiocode },
        { tool: SiPostman },
        { tool: SiVercel },
        { tool: SiHeroku },
    ]
    return (
        <div>
            <Box

                pl={["0px", "60px"]}
                h={{sm:"auto",md:"auto",lg:"100vh"}}
                color="white"
                textAlign="left"
                fontFamily="'Noto Sans', sans-serif"
                bgGradient='linear(to-t, black 20%,rgb(17,19,36))' >
                <Box
                    display="inline-flex"
                    mt="20px"
                    ml="30px"
                    borderBottom="4px solid gray">
                    <Heading ml="30px"><Text className="span">Tools </Text>I've Used</Heading>
                </Box>
                <SimpleGrid py="50px" pt="50px" w={{
                    base: '90%',
                    md: '90%',
                    xl: '70%',
                }} m="auto" mt="40px" columns={[2, 3, 3]} spacing={30}>
                    {
                        Tools.map((item) => (
                            <Flex
                                className='hover-effect'
                                justifyContent="center"
                                p='10px'
                                boxShadow="0px 1px 1px 1px #be50f4"
                            >{<item.tool size="100px" />}</Flex>
                        ))
                    }
                </SimpleGrid>

            </Box>
        </div>
    )
}

export default Tool
