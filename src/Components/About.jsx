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
                h={{ sm: "auto", md: "auto", lg: "100vh" }}
                bgGradient='linear(to-t, black 50%,rgb(17,19,36))' >
                <Box
                    color="white"
                    display="inline-flex"
                    borderBottom="4px solid gray">
                    <Heading>About</Heading>
                </Box>

                <Text mt="30px" fontWeight="400" fontSize="28px">KNOW WHO <Text className='span'>I'M</Text></Text>
                <Text mt="20px"
                    fontSize="20px"
                    fontWeight="300"
                ><span className='span'></span>
                    An aspiring <span className='span'>full-stack web developer,</span> Having the ability to
                    adapt to new environments quickly and the strong
                    expertise to  <span className='span'> communicate</span>
                    and <span className='span'>express </span> ideas effectively.

                    Looking forward to  to working in an <span className='span'>organization </span>where I can
                    showcase my skills  and apply Knowledge of
                    <span className='span'>coding, development, and designs</span> to leverage the <span className='span'> goals
                        and ambitions</span>  of the organization.
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
                        <Img w='250px' borderRadius='50%' src='https://img.freepik.com/premium-vector/programmer-focused-work-project-while-sitting-easy-chair_569013-330.jpg?w=740' alt="img" />
                    </Box>
                </Flex>

            </Box>
        </div>
    )
}

export default About;
