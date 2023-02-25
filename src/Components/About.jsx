import { Box, Heading, Text, Flex, Img } from '@chakra-ui/react'
import React from 'react'
import image from '../assets/codingimg.png'
import {
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'

function About() {
    return (
        <div name="about">
            <Box className='main'
                p={["22px","70px" ]}
                h={{ sm: "auto", md: "auto", lg: "80vh" }}
                bgGradient='linear(to-t, black 50%,rgb(17,19,36))' >
                <Box
                    color="white"
                    display="inline-flex"
                    borderBottom="4px solid gray">
                    <Heading><span className='span'>About</span> Me</Heading>
                </Box>

                <Text mt="20px"
                    fontSize="20px"
                    fontWeight="300"
                >
                    An aspiring full-stack web developer, In-depth knowledge of HTML, CSS, 
                    JavaScript, React, Redux, Chakra UI, Node JS, Express, Mongo DB.
                    Skillful creating servers and database for functionality and designing and developing APIs.
                    Looking forward to working in an organization where use Knowledge of this skills, 
                    coding, development, and designs.
                </Text>
                
                <Flex justifyContent="space-between">
                    <Box
                        mt="20px"
                        fontWeight="300"
                    >
                        <Text fontSize="28px">With <span className='span'>coding,</span>  some other Interest that I love!  </Text>
                        <UnorderedList fontSize="21px" mt={"10px"}>
                            <ListItem>Travelling</ListItem>
                            <ListItem>Music</ListItem>
                            <ListItem>Sci-fi & Mystery Movies</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Img w='250px' borderRadius='50%' src={image} alt="img" />
                    </Box>
                </Flex>

            </Box>
        </div>
    )
}

export default About;
