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
                    An aspiring full-stack web developer, Having the ability to
                    adapt to new environments quickly and the strong
                    expertise to   communicate
                    and express  ideas effectively.
                    Looking forward to  to working in an organization where I can
                    showcase my skills  and apply Knowledge of
                    coding, development, and designs to leverage the  goals
                        and ambitions  of the organization.
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
