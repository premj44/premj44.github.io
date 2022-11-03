import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-scroll';
import "../App.css"
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [show, setShow] = React.useState(false)
  const links = [
    {
      id: 1,
      link: "home",
      title: "Home"
    },
    {
      id: 2,
      link: "about",
      title: "About"
    },
    {
      id: 3,
      link: "projects",
      title: "Projects"
    },
    {
      id: 4,
      link: "skill",
      title: "Skills"
    },
    {
      id: 5,
      link: "contact",
      title: "Contact"
    },
  ];


  return (
    <div className='hero'>
      <Flex
        position="fixed"
        w="100%"
        bg="#000000"
        color="white"
        px="20px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading
          className="hover-underline-animation"
          fontFamily="'Italianno', cursive"
          fontWeight="600"
          fontSize="58px"
        >Prem Jadhav</Heading>
        <Flex
          gap="30px"
          fontSize="16px"
          display={["none", "none", "flex"]}
        >

          {
            links.map((item) => (
              <Text  className="hover-underline-animation"><Link to={item.link} spy={true} smooth={true} duration={500}><Text fontSize="22px">{item.title}</Text></Link></Text>

            ))
          }
        </Flex>
        <Button
          onClick={() => setShow(!show)}
          bg="black"
          display={{ sm: 'block', md: "none", lg: "none" }}
        >{show ? <MdClose /> : <GiHamburgerMenu />}</Button>
      </Flex>
      {show && <Flex
        gap="30px"
        fontSize="16px"
        color="white"
        display={["flex",'none']}
        flexDirection="column"
        bg="rgba(17,19,36,0.8)"
        width="100%"
        position="fixed"
        top="70px"
      >


        {
          links.map((item) => (
            <Text fontSize="10px" className="hover-underline-animation"><Link to={item.link} spy={true} smooth={true} duration={500}><Button  bg="rgba(17,19,36,0.8)" onClick={() => setShow(false)}>{item.title}</Button></Link></Text>

          ))
        }

      </Flex>}
    </div>
  )
}

export default Navbar
