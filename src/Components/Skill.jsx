import { Box, Heading, Img, SimpleGrid, Text } from '@chakra-ui/react'
import html from "../assets/html.png"
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import node from "../assets/node.png";
import express from "../assets/express.png"
import mongodb from "../assets/mongodb.png"
import redux from "../assets/redux.png"
import React from 'react'

function Skill() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: mongodb,
      title: "MongoDB",
    },
    {
      id: 5,
      src: express,
      title: "Express",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
    },
    {
      id: 7,
      src: node,
      title: "NodeJs",
    },
    {
      id: 8,
      src: redux,
      title: "Redux",
    },

    {
      id: 9,
      src: github,
      title: "GitHub",
    },
  ];

  return (
    <div name="skill">
      <Box

        pl={["0px", "60px"]}
        h={{ sm: "auto", md: "auto", lg: "100vh" }}
        pb={["20px","10px"]}
        color="white"
        textAlign="left"
        fontFamily="'Noto Sans', sans-serif"
        bgGradient='linear(to-t, black 20%,rgb(17,19,36))' >
        <Box
          display="inline-flex"
          mt="20px"
          ml="30px"
          borderBottom="4px solid gray">
          <Heading> Professional <span className="span">Skillset</span></Heading>

        </Box>
        <Text ml="30px" mt="15px">These are the technologies I've worked with and used them in my projects.</Text>
        <Box>
          <SimpleGrid w={{
            base: '90%',
            md: '90%',
            xl: '70%',
          }} m="auto" mt="40px" py={{ sm: "0px", md: "50px", lg: "0px" }} columns={[2, 3, 3]} spacing={30} >
            {techs.map(({ id, src, title, style }) => (
              <Box
                className='hover-effect'
                boxShadow="0px 3px 3px #3f6b96"
                textAlign="center"
                cursor="pointer"
                key={id}
              >
                <Img src={src} alt="" h="100px" diplay="block" m="auto" />
                <p className="mt-4">{title}</p>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

      </Box>
    </div>
  )
}

export default Skill
