import {
  FormControl,
  InputGroup,
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Text,
  Br,
  Image
} from "@chakra-ui/react";
import React, { useState } from "react";
import App from "../App";

// import Head from 'next/head';

export default function HomePage() {
  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  function handleChange(e) {
    const text = e.target.value;
    setValue(text);
  }

  return (
    <>
    <Box
        // background-position: center bottom;
        // background-size: 1440px 126px;
        // background-repeat: repeat-x;
    
      bgImage="url('https://web-static.wrike.com/cdn-cgi/image/width=3840,format=auto,quality=80/tp/storage/uploads/a6689dc7-598d-42e0-9856-339b302c27d5/rebrand-hero-illustration-homepage-screenshots-dark-desktop-2x.png')"
      bgPosition="center bottom"
      backgroundSize="1400px 126px"
      bgRepeat="repeat-x"
      bgSize="cover"
      bgColor="#181f38"
      mt="155px"
      h="650px"
      w="100%"
      textAlign="left"
    >
      <Box color="#fff" w="50%" p="80px">
        <Text fontSize="46px" lineHeight="54px" fontWeight="700" ml="20px">
          <Text>
            Remove barriers,
            <br />
            find clarity,
          </Text>
          <Text>exceed goals</Text>
        </Text>
        <br/>
        <Text fontSize="20px" lineHeight="32px" ml="20px">
          Anything is possible with the most powerful work management software
          at your&nbsp;fingertips.
        </Text>
        <Flex>
          <Box p="6">
            <Box pos="relative">
              <FormControl isRequired colorScheme="green">
                <InputGroup>
                  <Input
                    w="350px"
                    h="63px"
                    p="5"
                    bgColor="#fff"
                    outline="none"
                    color="green"
                    onFocus={() => {setIsActive(true)}}
                    onBlur={() =>
                      value === "" ? setIsActive(false) : setIsActive(true)
                    }
                    value={value}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <Text
                top={isActive ? "20%" : "50%"}
                left={isActive ? "5px" : "50%"}
                transform={
                  isActive
                    ? "translate(10px,-45%) scale(0.8)"
                    : "translate(-50%,-50%) scale(1)"
                }
                p="0 12px"
                fontSize="15px"
                fontWeight="bolder"
                bg="inherit"
                transformOrigin="top left"
                transition="all .2s ease-out"
                color="gray"
                pointerEvents="none"
                pos="absolute"
                w="max-content"
                h="max-content"
                zIndex="4"
              >
                Enter your Business Email
              </Text>
            </Box>
          </Box>
          <Button
            mt="25px"
            padding="30px"
            style={{ fontSize: "17px" }}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"#08cf65"}
            href={"#"}
            _hover={{
              bg: "white",
              color: "black",
            }}
          >
            Get Started
          </Button>
        </Flex>
      </Box>
    </Box>
    <Box>
        <Box>
            <Flex justifyContent="space-evenly" mt="100px">
                <Image mb="100px" src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-google.svg"/>
                <Image mb="100px"  src="https://web-static.wrike.com/tp/storage/uploads/17e81db2-0802-47a7-8037-8cb11d166299/1440-logoroll-logo-syneos.svg"/>
                <Image mb="100px" src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-lyft.svg"/>
                <Image mb="100px" src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-siemens.svg"/>
                <Image mb="100px" src="https://web-static.wrike.com/tp/storage/uploads/473c0f49-59e8-4422-89d7-184c44f362cf/1440-logoroll-logo-nickelodeon.svg"/>
                <Image mb="100px" src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-oglivy.svg"/>
                <Image mb="100px" src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-snowflake.svg"/>
            </Flex>
            <Text mb="30px" textAlign="center" color="#657694" fontWeight="600" letterSpacing="1.5px" fontSize="18px" lineHeight="20px">TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE</Text>
            <Box textAlign="center" width="750px" margin="auto">
                <Text mb="30px" fontSize="44px" lineHeight="60px" color="#181f38" fontWeight="600">Transform the way your teams&nbsp; work</Text>
                <Text fontSize="19px" lineHeight="26px" color="#181f38" fontWeight="400">Empower your teams to do the best work of their lives with 360° visibility, true cross-departmental collaboration, and powerful automation.</Text>
            </Box>
        </Box>
    </Box>
    </>
  );
}

//https://web-static.wrike.com/cdn-cgi/image/width=3840,format=auto,quality=80/tp/storage/uploads/a6689dc7-598d-42e0-9856-339b302c27d5/rebrand-hero-illustration-homepage-screenshots-dark-desktop-2x.png
//bgImage="url('https://web-static.wrike.com/cdn-cgi/image/width=3840,format=auto,quality=80/tp/storage/uploads/a6689dc7-598d-42e0-9856-339b302c27d5/rebrand-hero-illustration-homepage-screenshots-dark-desktop-2x.png')"
// bgPosition="center"
// bgRepeat="no-repeat"
