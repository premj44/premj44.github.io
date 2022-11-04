import { Email } from "./Email"
import React from 'react'
import { Box, Flex, Link, Text, Heading } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  const links = [
    {
      id: 1,
      child: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/premkumar-jadhav-163320230/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: "GitHub",
      icon: <FaGithub size={30} />,
      href: "https://github.com/premj44",
    },
    {
      id: 3,
      child: "Email",
      icon: <HiOutlineMail size={30} />,
      href: "https://mail.google.com/",
    },
  ];
  return (
    <div name="contact">
      <Box
        bgGradient='linear(to-t, black 50%,rgb(17,19,36))'
        pb="25px"
      >
        <Box
          color="white"
          display="inline-flex"
          ml="30px"
          mt="15px"
          borderBottom="4px solid gray">
          <Heading >Contact</Heading>
        </Box>
        <Box>
        </Box>
        <Flex mt={["10px", "30px"]} justifyContent="space-evenly" direction={["column", "row", "row"]}>
          <Box w={["90%", "40%"]} textAlign="left" m="auto" mt="40px" color="white">
            <Text>Whether you want to get in touch or talk, I'd love to hear from you</Text>
            <Text mt="10px" color="grat"><span className="span">Submit the form below to get in touch with me</span></Text>
            <Text mt="10px" fontSize={["25px", "30px"]} textAlign="left">Phone : <span className="span">+91 7720079044</span></Text>
            <Flex mt="10px" gap="30px">
              {links.map(({ id, icon, child, href, download }) => (
                <Box
                  key={id}
                  className="hover-effect"
                >
                  <Link
                    href={href}
                    target="_blank"
                  >
                    <Box w="60px" mt="20px">
                      {icon}
                      <Text textAlign="left"> {child}</Text>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Flex>

          </Box>
          <Box w={{ sm: "90%", md: "40%", lg: "40%" }} m="auto"><Email /></Box>
        </Flex>
      </Box>
    </div>
  )
}

export default Contact;
