import { Box, Flex, Text, Heading, Img, SimpleGrid, Link } from '@chakra-ui/react';
import React from 'react'
import dhalard from "../assets/portfolio/toggle.png";
import jcrew from "../assets/portfolio/jcrew.png";
import nord from "../assets/portfolio/nord.png";
import { ExternalLinkIcon } from '@chakra-ui/icons'


function Projects() {
  const projects = [
    {
      id: 1,
      src: dhalard,
      name: "TOGGLE TRACK CLONE",
      link: 'https://toggletrack-beta.vercel.app/',
      repo: 'https://github.com/vivekkhade23/Toggl-Track-Clone',
      info: "It is a time-tracking software to track tasks and projects.",
      team: "A collaborative project of 5 team members completed in 5 days.",
      tstack: "React | Chakra UI | JavaScript | HTML | CSS | Node JS | Express JS | MongoDB "
    },
    {
      id: 2,
      src: jcrew,
      name: "JCREW CLONE",
      link: "https://timely-toffee-674f49.netlify.app/",
      repo: 'https://github.com/Prakarshprasar/J.Crew-Clone',
      info: "J.CREW is a brand that beliefs in creating timeless clothing and accessories.",
      team: "A collaborative project, built in 5 days by a team of 5 developers.",
      tstack: "HTML | CSS | JAVASCRIPT"
    },
    {
      id: 2,
      src: nord,
      name: "NORDSTROM CLONE",
      link: 'https://fancy-bubblegum-0316ae.netlify.app/',
      repo: 'https://github.com/premj44/U3.0-Project-Nordstrom',
      info: "Nordstrom is an American luxury clothing, shoes and accessories for men, women and kids",
      team: "An individual project completed in 5 days.",
      tstack: "HTML | CSS | JAVASCRIPT"
    },

  ];
  return (
    <Box name="projects">
      <Box

        pl={{ md: "0px", sm: "auto", lg: "60px" }}
        h={{ sm: "auto", md: "auto", lg: "100vh" }}
        color="white"
        textAlign="left"
        fontFamily="'Noto Sans', sans-serif"
        bgGradient='linear(to-t, black 20%,rgb(17,19,36))'
      >
        <Box
          display="inline-flex"
          ml="30px"
          mb="20px"
          mt="20px"
          borderBottom="4px solid gray">
          <Heading>My Recent <span className="span">Projects</span></Heading>
        </Box>

        <Text ml="30px" mb="20px" fontWeight="500" fontSize="18px">Check out some of my work here</Text>
        <SimpleGrid columns={{sm:1,md:2,lg:3}} pb={["20px","20px"]} gap="30px" w="90%" m="auto">
          {
            projects.map((item) => (
              <Box
                className='hover-effect'
                boxShadow="0px 3px 3px 1px gray"
                p="20px"
                mt={["20px", "0px"]}>
                <Img src={item.src} alt="img" h="180px" borderRadius="8px" />
                <Heading mt="10px" fontSize="20px" fontWeight="bold" letterSpacing="3px" color="#c770f0">{item.name}</Heading>
                <Text mt="10px">{item.info}</Text>
                <Text mt="10px">{item.team}</Text>
                <Text mt="10px" color="#c770f0">{item.tstack}</Text>
                <Flex gap="50px" mt="10px">
                  <Link className='hover-effect' href={item.link} isExternal>
                    Demo <ExternalLinkIcon mx='2px' />
                  </Link>
                  <Link className='hover-effect' href={item.repo} isExternal>
                    github <ExternalLinkIcon mx='2px' />
                  </Link>
                </Flex>
              </Box>
            ))
          }
        </SimpleGrid>

      </Box>
    </Box>
  )
}

export default Projects
