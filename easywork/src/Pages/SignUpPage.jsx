import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Center,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import Footer from "../Components/Footer"
import { BrowserRouter, Route } from 'react-router-dom'


const auth = getAuth(app);

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [confirmpassword,setconfirmpassword]=useState("")
  const toast = useToast()


  const createUser = () => {

    if(password===confirmpassword){
      createUserWithEmailAndPassword(auth, email, password)
      .then((value) =>{

        {toast({
        title: "welcome",
        status: "success",
        isClosable: true,
        position:"bottom",
        description:"Successfully signed-in"
      })} 
        setEmail("") 
        setPassword("")
        setSignedIn(true)
        window.location.href="/login"
      }).catch((err)=>{
        {toast({
        title:"An error occured",
        status: "error",
        isClosable: true,
        position:"bottom",
        description:` ${err.message}`
      })}
      window.location.href="/login"
      })

    }else{
        {toast({
          title: "Incorrect password",
          status: "error",
          isClosable: true,
          position:"bottom",
          description:"Please make sure your password is correct"
        })} 
    }

    
  }



  return (<Box>
      <Flex
        overflow={"hidden"}
        position={"relative"}
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack 
          mb={"30px"}
          marginTop={"130px"}
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
        >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign up to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Enter your busniness email here"
                  required
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </FormControl>
              <FormControl id="confirm_password">
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  onChange={(e) => setconfirmpassword(e.target.value)}
                  value={confirmpassword}
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </FormControl>
              <Stack spacing={10}>
              <Button
                  onClick={createUser}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
                <Center p={1}>
                  <Button
                    w={"full"}
                    maxW={"md"}
                    variant={"outline"}
                    leftIcon={<FcGoogle />}
                  >
                    <Center>
                      <Text>Continue with Google</Text>
                    </Center>
                  </Button>
                </Center>
                <Center p={1}>
                  <Button
                    w={"full"}
                    maxW={"md"}
                    colorScheme={"facebook"}
                    leftIcon={<FaFacebook />}
                  >
                    <Center>
                      <Text>Continue with Facebook</Text>
                    </Center>
                  </Button>
                </Center>
               
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer/>
    </Box>
  );
}
