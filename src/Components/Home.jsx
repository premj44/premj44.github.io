import { Flex, Box, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import Type from "../Type"
import resume from "../assets/PremResume.pdf"
import { BsFillPersonLinesFill } from "react-icons/bs";

function Home() {

  const links = [
    {
      id: 1,
      child: (
        <>
          Download CV <span className='dnload-icon'><BsFillPersonLinesFill size={30} /></span>
        </>
      ),
      href: resume,
      download: true,
    }
  ]

  return (
    <div name="home">
      <Flex
        fontFamily="'Noto Sans', sans-serif"
        justifyContent="space-around"
        alignItems="center"
        px="80px"
        pt="90px"
        h={{ sm: "auto", md: "auto", lg: "100vh" }}
        direction={["column", "flex", "row"]}
        bgGradient='linear(to-t, black 50%,rgb(17,19,36))'
      >
        <Box
          textAlign={["center", "left", "left"]}
          lineHeight="40px"
          color="white"
        >
          <Heading>
            <Text mb={"15px"} fontWeight="normal">Hi There! <span className='wave'>👋🏻</span></Text>
            <Text mb={"10px"}> <Text fontWeight="normal" display="inline"> I'M</Text> <Heading display="inline" color="#cd5ff8">PREMKUMAR JADHAV</Heading></Text>
            <Heading fontSize={["34px", "38px", "48px"]}>I'm a Full Stack Web<br />Developer</Heading>
          </Heading>
          <Box mt="25px" fontSize="25px" color="#cd5ff8">
            <Type />
            <Box mt={"25px"}>
            {links.map(({ child, href, download }) => (                    
                <a
                  href={href}
                  className="resume-btn"
                  download={download}
                >
                  {child}
                </a>     
            ))}
            </Box>      
          </Box>
        </Box>
        <Box
          borderRadius="50%"
          border="2px solid white"
        >
          <Img
            borderRadius="50%"
            h={["150px", "300px", "400px"]}
            src= "https://avatars.githubusercontent.com/u/101566195?v=4" alt="avatar" />
        </Box>
      </Flex>

    </div>
  )
}

export default Home
