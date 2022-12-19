import React, { useState, useRef } from "react";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  Image,
  useToast,
} from "@chakra-ui/react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import Footer from "../Components/Footer"

const auth=getAuth(app)

const LoginInPage = () => {
  
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  const toast = useToast()


  const [login,setlogin]=useState(false)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const loginuser=()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((value) =>{
      {toast({
      title: "welcome",
      status: "success",
      isClosable: true,
      position:"bottom",
      description:"Successfully Logged-in"
    })} 
      setEmail("") 
      setPassword("")
      setlogin(true)
      window.location.href="/"
    }).catch((err)=>{
      {toast({
      title:"An error occured",
      status: "error",
      isClosable: true,
      position:"bottom",
      description:` ${err.message}`
    })}
    })
  }

  return (
    <>
    <Flex  ml={"5%"} mr={"5%"} position="relative" mb="40px" >
    <Flex
      mt={"20px"}
      h={{ sm: "initial", md: "75vh", lg: "85vh" }}
      w="100%"
      maxW="1044px"
      mx="auto"
      justifyContent="space-between"
      mb="30px"
      pt={{ sm: "100px", md: "0px" }}
    >
      <Flex
        alignItems="center"
        justifyContent="start"
        style={{ userSelect: "none" }}
        w={{ base: "100%", md: "50%", lg: "42%" }}
      >
        <Flex
          direction="column"
          w="100%"
          background="transparent"
          p="48px"
          mt={{ md: "150px", lg: "80px" }}
        >
          <Heading color={titleColor} fontSize="32px" mb="10px">
            Welcome Back
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColor}
            fontWeight="bold"
            fontSize="14px"
          >
            Enter your email and password to sign in
          </Text>
          <FormControl>
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Email
            </FormLabel>
            <Input
              borderRadius="15px"
              mb="24px"
              fontSize="sm"
              type="text"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Your email address"
              size="lg"
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Password
            </FormLabel>
            <Input
              type={"password"}
              borderRadius="15px"
              mb="36px"
              fontSize="sm"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Your password"
              size="lg"
            />
            <FormControl display="flex" alignItems="center">
              <Switch id="remember-login" colorScheme="teal" me="10px" />
              <FormLabel
                htmlFor="remember-login"
                mb="0"
                ms="1"
                fontWeight="normal"
              >
                Remember me
              </FormLabel>
            </FormControl>
            <Button
              fontSize="10px"
              type="submit"
              bg="teal.300"
              w="100%"
              h="45"
              mb="20px"
              color="white"
              onClick={loginuser}
              mt="20px"
              _hover={{
                bg: "teal.200"
              }}
              _active={{
                bg: "teal.400"
              }}
            >
              SIGN IN
            </Button>
          </FormControl>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColor} fontWeight="medium">
              Don't have an account?
              <Link color={titleColor} as="span" ms="5px" fontWeight="bold">
                Sign Up
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box
        display={{ base: "none", md: "block" }}
        overflowX="hidden"
        h="100%"
        w="40vw"
        position="absolute"
        right="0px"
      >
        {/* <Box
          bgImage={signInImage}
          w="100%"
          h="100%"
          bgSize="cover"
          bgPosition="50%"
          position="absolute"
          borderBottomLeftRadius="20px"
        ></Box> */}
      </Box>
    </Flex>
    <Flex>
      <Image  mt={"100px"} src={"https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=1/tp/storage/uploads/24da2538-075d-4fa9-9a78-b73af61d7628/gift-by-wrike-promo-2x.png"}></Image>
    </Flex>
  </Flex>
  <Footer/>
  </>
  )
}

export default LoginInPage