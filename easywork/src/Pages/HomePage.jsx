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
  Image,
  Center,
  useColorModeValue,
  Heading,
  color,
  IconButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
} from "@chakra-ui/react";
import Wave from "react-wavify";
import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
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
    <Box>
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
          <br />
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
                      onFocus={() => {
                        setIsActive(true);
                      }}
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
                  zIndex="1"
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
            <Image
              mb="100px"
              src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-google.svg"
            />
            <Image
              mb="100px"
              src="https://web-static.wrike.com/tp/storage/uploads/17e81db2-0802-47a7-8037-8cb11d166299/1440-logoroll-logo-syneos.svg"
            />
            <Image
              mb="100px"
              src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-lyft.svg"
            />
            <Image
              mb="100px"
              src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-siemens.svg"
            />
            <Image
              mb="100px"
              src="https://web-static.wrike.com/tp/storage/uploads/473c0f49-59e8-4422-89d7-184c44f362cf/1440-logoroll-logo-nickelodeon.svg"
            />
            <Image
              mb="100px"
              src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-oglivy.svg"
            />
            <Image
              mb="100px"
              src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-snowflake.svg"
            />
          </Flex>
          <Text
            mb="30px"
            textAlign="center"
            color="gray"
            fontWeight="600"
            letterSpacing="1.5px"
            fontSize="18px"
            lineHeight="30px"
          >
            TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE
          </Text>
          <Box textAlign="center" width="750px" margin="auto" mb="80px">
            <Text
              mb="30px"
              fontSize="44px"
              lineHeight="60px"
              color="#181f38"
              fontWeight="600"
            >
              Transform the way your teams&nbsp; work
            </Text>
            <Text
              fontSize="19px"
              lineHeight="30px"
              color="#181f38"
              fontWeight="400"
            >
              Empower your teams to do the best work of their lives with 360°
              visibility, true cross-departmental collaboration, and powerful
              automation.
            </Text>
          </Box>
        </Box>
      </Box>
      <Flex justifyContent="center" gap={"20px"}>
        {/* 1 */}
        <Center py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={0}
            _hover={{ bgColor: "#2b3148", color: "white" }}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"260px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=1/tp/storage/uploads/f12bf685-64af-4413-a42e-80e58ed088ee/evo-icp-hp-ps-light.png"
              />
            </Box>
            <Stack pt={10} textAlign={"left"}>
              <Heading
                fontSize={"30px"}
                fontFamily={"body"}
                fontWeight={700}
                mb={"10px"}
              >
                Professional Services
              </Heading>
              <Text color={"gray.500"} fontSize={"xl"}>
                Take service delivery to the next level with Easywork's powerful
                plaftorm. Manage resources,track billable hours,and make
                informed decisions with ease.
              </Text>
              <Button variant={"link"} color={"#08cf65"} size={"2xl"}>
                Learn more
              </Button>
            </Stack>
          </Box>
        </Center>
        {/* 2 */}
        <Center py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={0}
            _hover={{ bgColor: "#2b3148", color: "white" }}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"250px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=1/tp/storage/uploads/8b283fef-6bd1-4513-8398-228095b64833/evo-icp-hp-marketing-light.png"
              />
            </Box>
            <Stack pt={10} textAlign={"left"}>
              <Heading
                mt={"50px"}
                fontSize={"30px"}
                fontFamily={"body"}
                fontWeight={700}
                mb={"10px"}
              >
                Marketing
              </Heading>
              <Text color={"gray.500"} fontSize={"xl"}>
                Empower your marketing team with customizable workflows,leading
                DAM tools,and dynamic reporting to help create high-performing
                campaigns.
              </Text>
              <Button variant={"link"} color={"#08cf65"} size={"2xl"}>
                Learn more
              </Button>
            </Stack>
          </Box>
        </Center>
        <Center py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={0}
            _hover={{ bgColor: "#2b3148", color: "white" }}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"260px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=1/tp/storage/uploads/4486fa19-a0c3-4f16-8d12-60ddfefec7c8/evo-icp-hp-pm-light.png"
              />
            </Box>
            <Stack pt={10} textAlign={"left"}>
              <Heading
                fontSize={"30px"}
                fontFamily={"body"}
                fontWeight={700}
                mb={"10px"}
              >
                Project Management
              </Heading>
              <Text color={"gray.500"} fontSize={"xl"}>
                Be the collaborative force that unifies your business with
                improved planning, risk management, and automation software to
                deliver better results.
              </Text>
              <Button variant={"link"} color={"#08cf65"} size={"2xl"}>
                Learn more
              </Button>
            </Stack>
          </Box>
        </Center>
        <Center py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={0}
            _hover={{ bgColor: "#2b3148", color: "white" }}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"260px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=1/tp/storage/uploads/0eadfaae-5c62-44fe-a375-cfdaab468ac0/evo-icp-hp-it-light.png"
              />
            </Box>
            <Stack pt={10} textAlign={"left"}>
              <Heading
                mt={"30px"}
                fontSize={"30px"}
                fontFamily={"body"}
                fontWeight={700}
                mb={"10px"}
              >
                IT
              </Heading>
              <Text color={"gray.500"} fontSize={"xl"}>
                Meet workforce and delivery needs by optiizing agile IT
                workflows. Manage Strategic initiatives and service requests
                alike and service requests alike in the same place.
              </Text>
              <Button variant={"link"} color={"#08cf65"} size={"2xl"}>
                Learn more
              </Button>
            </Stack>
          </Box>
        </Center>
      </Flex>
      <Flex justifyContent={"center"}>
        <Button
          variant={"link"}
          color={"#08cf65"}
          fontSize="25px"
          fontWeight={"500"}
          _hover={{ textDecoration: "none" }}
        >
          <Text padding={"6px"} border={"0px solid red"}>
            See all teams
          </Text>
          <BiRightArrowAlt
            border={"1px solid red"}
            mt={"2px"}
            transition="0.6 ease-in"
            _hover={{ transform: "translateX(50%)" }}
            ml="25px"
            size="25px"
          />
        </Button>
      </Flex>
      <Wave
        fill="#181f38"
        paused="true"
        options={{
          height: 30,
          amplitude: 200,
          speed: 0.5,
          points: 1,
        }}
      />
      <Box
        mt={"-7px"}
        h={"970px"}
        w={"100%"}
        bgColor={"#181f38"}
        justifyContent={"space-evenly"}
      >
        <Flex justifyContent={"center"}>
          <Box
            ml={"50px"}
            justifyContent={"center"}
            padding={"50px 0px"}
            textAlign={"left"}
            lineHeight={"20px"}
            textColor={"#fff"}
            h={"400px"}
            w={"38%"}
            margin={"auto"}
          >
            <Text
              color={"gray"}
              letterSpacing={"1.5px"}
              mb={"20px"}
              fontWeight={"600"}
              fontStyle={"12px"}
            >
              HOLIDAY PROMOTION
            </Text>
            <Heading
              mb={"30px"}
              fontSize={"40px"}
              lineHeight={"40px"}
              fontWeight={"700"}
            >
              {" "}
              Get tour free gift!
            </Heading>
            <Text
              mb={"20px"}
              fontFamily={"unset"}
              fontSize={"25px"}
              fontWeight={"400"}
              lineHeight={"45px"}
            >
              For a limited time only, Easywork is offering a free gift to new
              customers! Sign up with a qualifying subscription before December
              31 to claim your&nbsp; prize.
            </Text>
            <br></br>
            <Button
              variant={"link"}
              color={"#08cf65"}
              fontSize="25px"
              fontWeight={"500"}
              _hover={{ textDecoration: "none" }}
            >
              <Text padding={"6px"} border={"0px solid red"}>
                Learn more
              </Text>
              <BiRightArrowAlt
                border={"1px solid red"}
                mt={"2px"}
                transition="0.6 ease-in"
                _hover={{ transform: "translateX(50%)" }}
                ml="25px"
                size="25px"
              />
            </Button>
          </Box>
          <Image src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=1/tp/storage/uploads/24da2538-075d-4fa9-9a78-b73af61d7628/gift-by-wrike-promo-2x.png"></Image>
        </Flex>
        <Wave
          fill="#0c3245"
          paused="true"
          options={{
            height: 10,
            amplitude: 50,
            speed: 0.5,
            points: 2,
          }}
        />
        <Box mt={"-7px"} h={"1300px"} w={"100%"} bgColor={"#0c3245"}>
          <Heading
            color={"#fff"}
            mb={"30px"}
            fontSize={"40px"}
            lineHeight={"60px"}
            fontWeight={"700"}
          >
            The Most Versatile Work<br></br> Management Platform™
          </Heading>
          <Text
            color={"white"}
            mb={"50px"}
            fontFamily={"unset"}
            fontSize={"25px"}
            fontWeight={"400"}
            lineHeight={"45px"}
          >
            Maximize your team's performance, accelerate growth, and improve
            customer experience<br></br> with Wrike's robust and extensive
            features.
          </Text>

          <Tabs borderColor={"#08cf65"} color={"#fff"} textAlign={"center"}>
            <TabList ml={"25%"} mr={"25%"} fontWeight={"600"}>
              <Tab
                onClick={() => (color = "#fff")}
                _hover={{ color: "#fff" }}
                color={"#08cf65"}
                ml={"8px"}
                fontSize={"25px"}
                fontWeight={"620"}
              >
                Dashboard
              </Tab>
              <Tab
                _hover={{ color: "#fff" }}
                color={"#08cf65"}
                fontSize={"25px"}
                fontWeight={"620"}
              >
                Crosss-tagging
              </Tab>
              <Tab
                _hover={{ color: "#fff" }}
                color={"#08cf65"}
                fontSize={"25px"}
                fontWeight={"620"}
              >
                Integrations
              </Tab>
              <Tab
                _hover={{ color: "#fff" }}
                color={"#08cf65"}
                fontSize={"25px"}
                fontWeight={"620"}
              >
                Proofing
              </Tab>
              <Tab
                _hover={{ color: "#fff" }}
                color={"#08cf65"}
                fontSize={"25px"}
                fontWeight={"620"}
              >
                Gantt charts
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex justifyContent={"center"}>
                  <Box
                    mr={"30px"}
                    ml={"30px"}
                    justifyContent={"center"}
                    padding={"50px 0px"}
                    textAlign={"left"}
                    lineHeight={"20px"}
                    textColor={"#fff"}
                    h={"400px"}
                    w={"38%"}
                    margin={"auto"}
                  >
                    <Heading
                      mb={"30px"}
                      fontSize={"40px"}
                      lineHeight={"40px"}
                      fontWeight={"700"}
                    >
                      Customizable dashboards
                    </Heading>
                    <Text
                      mb={"20px"}
                      fontFamily={"unset"}
                      fontSize={"25px"}
                      fontWeight={"400"}
                      lineHeight={"45px"}
                    >
                      Never miss a task with personalized dashboards. See what
                      your team is working on in a comprehensive view and share
                      progress across the organization.
                    </Text>
                    <br></br>
                    <Text
                      mb={"20px"}
                      fontFamily={"unset"}
                      fontSize={"25px"}
                      fontWeight={"400"}
                      lineHeight={"45px"}
                    >
                      Get a detailed overview of workloads, pin important
                      to-dos, follow important tasks, and choose exactly what
                      you want to see to keep a close eye on progress.
                    </Text>
                    <Button
                      variant={"link"}
                      color={"#08cf65"}
                      fontSize="25px"
                      fontWeight={"500"}
                      _hover={{ textDecoration: "none" }}
                    >
                      <Text padding={"6px"} border={"0px solid red"}>
                        Learn more
                      </Text>
                      <BiRightArrowAlt
                        border={"1px solid red"}
                        mt={"2px"}
                        transition="0.6 ease-in"
                        _hover={{ transform: "translateX(50%)" }}
                        ml="25px"
                        size="25px"
                      />
                    </Button>
                  </Box>
                  <Image
                    height={"500px"}
                    width={"700px"}
                    mr={"80px"}
                    mt={"80px"}
                    src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=1/tp/storage/uploads/ef0e5d1a-124a-4508-80f6-950b3b129a48/rebrand-screenshot-dashboards-resized-2x.png"
                  ></Image>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex justifyContent={"center"}>
                  <Box
                    mr={"30px"}
                    ml={"30px"}
                    justifyContent={"center"}
                    padding={"50px 0px"}
                    textAlign={"left"}
                    lineHeight={"20px"}
                    textColor={"#fff"}
                    h={"400px"}
                    w={"38%"}
                    margin={"auto"}
                  >
                    <Heading
                      mb={"30px"}
                      fontSize={"40px"}
                      lineHeight={"40px"}
                      fontWeight={"700"}
                    >
                      Collaborative cross-tagging
                    </Heading>
                    <Text
                      mb={"20px"}
                      fontFamily={"unset"}
                      fontSize={"25px"}
                      fontWeight={"400"}
                      lineHeight={"45px"}
                    >
                      Cross-tagging allows teams to gain visibility into tasks,
                      folders, milestones, phases, and entire projects across
                      multiple work streams and organizational structures.
                    </Text>
                    <br></br>
                    <Text
                      mb={"20px"}
                      fontFamily={"unset"}
                      fontSize={"25px"}
                      fontWeight={"400"}
                      lineHeight={"45px"}
                    >
                      Tasks, folders, and projects can now live in multiple
                      places without being duplicated. This means you spend less
                      time managing documentation, more time creating great
                      work.
                    </Text>
                    <Button
                      variant={"link"}
                      color={"#08cf65"}
                      fontSize="25px"
                      fontWeight={"500"}
                      _hover={{ textDecoration: "none" }}
                    >
                      <Text padding={"6px"} border={"0px solid red"}>
                        Learn more
                      </Text>
                      <BiRightArrowAlt
                        border={"1px solid red"}
                        mt={"2px"}
                        transition="0.6 ease-in"
                        _hover={{ transform: "translateX(50%)" }}
                        ml="25px"
                        size="25px"
                      />
                    </Button>
                  </Box>
                  <Image
                    height={"500px"}
                    width={"700px"}
                    mr={"80px"}
                    mt={"80px"}
                    src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=1/tp/storage/uploads/772ccef9-5cc8-498d-81d3-c4dae398dfb3/product-screenshot-cross-tagging-holiday-campaign.png"
                  ></Image>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex justifyContent={"center"}>
                  <Box
                    mr={"30px"}
                    ml={"30px"}
                    justifyContent={"center"}
                    padding={"50px 0px"}
                    textAlign={"left"}
                    lineHeight={"20px"}
                    textColor={"#fff"}
                    h={"400px"}
                    w={"38%"}
                    margin={"auto"}
                  >
                    <Heading
                      mb={"30px"}
                      fontSize={"40px"}
                      lineHeight={"40px"}
                      fontWeight={"700"}
                    >
                      Seamless Integration
                    </Heading>
                    <Text
                      mb={"20px"}
                      fontFamily={"unset"}
                      fontSize={"25px"}
                      fontWeight={"400"}
                      lineHeight={"45px"}
                    >
                      Connect your existing apps and workflows with pre-made
                      integrations available for over 400 popular apps, plus
                      custom integrations for more advanced users.
                    </Text>
                    <br></br>
                    <Text
                      mb={"20px"}
                      fontFamily={"unset"}
                      fontSize={"25px"}
                      fontWeight={"400"}
                      lineHeight={"45px"}
                    >
                      Easily integrate apps like Salesforce, Tableau, Dropbox,
                      Microsoft Teams, and others with just a few clicks.
                    </Text>
                    <Button
                      variant={"link"}
                      color={"#08cf65"}
                      fontSize="25px"
                      fontWeight={"500"}
                      _hover={{ textDecoration: "none" }}
                    >
                      <Text padding={"6px"} border={"0px solid red"}>
                        Learn more
                      </Text>
                      <BiRightArrowAlt
                        border={"1px solid red"}
                        mt={"2px"}
                        transition="0.6 ease-in"
                        _hover={{ transform: "translateX(50%)" }}
                        ml="25px"
                        size="25px"
                      />
                    </Button>
                  </Box>
                  <video
                    height={"600px"}
                    width={"600px"}
                    style={{
                      marginTop: "80px",
                      marginRight: "80px",
                      borderRadius: "30px",
                    }}
                    autoplay="autoplay"
                    loop
                    muted
                    playsinline
                    controls="none"
                  >
                    <source
                      src="https://cdn.wrike.com/video/LP_Animation_Integrations_1X.mp4"
                      type="video/mp4"
                    />
                  </video>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex justifyContent={"center"}>
                  <Box
                    mr={"30px"}
                    ml={"30px"}
                    justifyContent={"center"}
                    padding={"50px 0px"}
                    textAlign={"left"}
                    lineHeight={"20px"}
                    textColor={"#fff"}
                    h={"400px"}
                    w={"38%"}
                    margin={"auto"}
                  >
                    <Heading
                      mb={"30px"}
                      fontSize={"40px"}
                      lineHeight={"40px"}
                      fontWeight={"700"}
                    >
                      Streamlined proofing software
                    </Heading>
                    <Text
                      mb={"20px"}
                      fontFamily={"unset"}
                      fontSize={"25px"}
                      fontWeight={"400"}
                      lineHeight={"45px"}
                    >
                      Organize your feedback, files, and approvals all in one
                      place with Wrike’s proofing feature. Automatically notify
                      approvers when documents are ready to view.
                    </Text>
                    <br></br>
                    <Text
                      mb={"20px"}
                      fontFamily={"unset"}
                      fontSize={"25px"}
                      fontWeight={"400"}
                      lineHeight={"45px"}
                    >
                      Work with external collaborators and accelerate publishing
                      with DAM integrations. With our proofing capabilities, you
                      can even add comments directly to assets.
                    </Text>
                    <Button
                      variant={"link"}
                      color={"#08cf65"}
                      fontSize="25px"
                      fontWeight={"500"}
                      _hover={{ textDecoration: "none" }}
                    >
                      <Text padding={"6px"} border={"0px solid red"}>
                        Learn more
                      </Text>
                      <BiRightArrowAlt
                        border={"1px solid red"}
                        mt={"2px"}
                        transition="0.6 ease-in"
                        _hover={{ transform: "translateX(50%)" }}
                        ml="25px"
                        size="25px"
                      />
                    </Button>
                  </Box>
                  <video
                    height={"600px"}
                    width={"600px"}
                    style={{
                      marginTop: "80px",
                      marginRight: "80px",
                      borderRadius: "30px",
                    }}
                    autoplay="autoplay"
                    loop
                    muted
                    playsinline
                    controls="none"
                  >
                    <source
                      src="https://cdn.wrike.com/video/LP_Animation_Proofing.mp4"
                      type="video/mp4"
                    />
                  </video>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex justifyContent={"center"}>
                  <Box
                    mr={"30px"}
                    ml={"30px"}
                    justifyContent={"center"}
                    padding={"50px 0px"}
                    textAlign={"left"}
                    lineHeight={"20px"}
                    textColor={"#fff"}
                    h={"400px"}
                    w={"38%"}
                    margin={"auto"}
                  >
                    <Heading
                      mb={"30px"}
                      fontSize={"40px"}
                      lineHeight={"40px"}
                      fontWeight={"700"}
                    >
                      Easy-to-Use Gantt charts
                    </Heading>
                    <Text
                      mb={"20px"}
                      fontFamily={"unset"}
                      fontSize={"25px"}
                      fontWeight={"400"}
                      lineHeight={"45px"}
                    >
                      See the big picture of your project’s progress with a
                      complete view of work scope and dependencies using our
                      industry-leading Gantt charts.
                    </Text>
                    <br></br>
                    <Text
                      mb={"20px"}
                      fontFamily={"unset"}
                      fontSize={"25px"}
                      fontWeight={"400"}
                      lineHeight={"45px"}
                    >
                      Control multiple projects from a single platform and
                      update timelines with our seamless drag-and-drop
                      functionality. Collaborate with teams in real time so
                      nobody misses a step.
                    </Text>
                    <Button
                      variant={"link"}
                      color={"#08cf65"}
                      fontSize="25px"
                      fontWeight={"500"}
                      _hover={{ textDecoration: "none" }}
                    >
                      <Text padding={"6px"} border={"0px solid red"}>
                        Learn more
                      </Text>
                      <BiRightArrowAlt
                        border={"1px solid red"}
                        mt={"2px"}
                        transition="0.6 ease-in"
                        _hover={{ transform: "translateX(50%)" }}
                        ml="25px"
                        size="25px"
                      />
                    </Button>
                  </Box>
                  <video
                    controls="false"
                    disabled
                    preload="auto"
                    height={"600px"}
                    width={"600px"}
                    style={{
                      marginTop: "80px",
                      marginRight: "80px",
                      borderRadius: "30px",
                    }}
                    autoplay="autoplay"
                    loop
                    muted
                    playsinline
                  >
                    <source
                      src="https://cdn.wrike.com/video/LP_Animation_Gantt-Chart.mp4"
                      type="video/mp4"
                    />
                  </video>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Button
            mt="100px"
            height={"80px"}
            width={"180px"}
            style={{ fontSize: "20px" }}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"2xl"}
            fontWeight={600}
            mb={"50px"}
            color={"black"}
            bg={"#ffc000"}
            href={"#"}
            _hover={{
              bg: "white",
              color: "black",
            }}
          >
            Get Started
          </Button>
          <Wave
            fill="#fff"
            paused="true"
            options={{
              height: 10,
              amplitude: 30,
              speed: 0.5,
              points: 3,
            }}
          />
          <Flex justifyContent={"center"}>
            <Box
              ml={"50px"}
              justifyContent={"center"}
              padding={"50px 0px"}
              textAlign={"left"}
              lineHeight={"20px"}
              textColor={"#fff"}
              h={"400px"}
              w={"38%"}
              margin={"auto"}
            >
              <Text
                color={"gray"}
                letterSpacing={"1.5px"}
                mb={"20px"}
                fontWeight={"600"}
                fontStyle={"12px"}
              >
                BE THE MASTER OF YOUR DATA
              </Text>
              <Heading
                color={"black"}
                mb={"30px"}
                fontSize={"40px"}
                lineHeight={"40px"}
                fontWeight={"700"}
              >
                Robust, industry-leading<br></br> security
              </Heading>
              <Text
                color={"black"}
                mb={"20px"}
                fontFamily={"unset"}
                fontSize={"25px"}
                fontWeight={"400"}
                lineHeight={"45px"}
              >
                Ensure peace of mind for your organization with Wrike's
                enterprise-grade security, including user authentication,
                role-based access control, and 99.9% uptime.
              </Text>
              <br></br>
              <Text
                color={"black"}
                mb={"20px"}
                fontFamily={"unset"}
                fontSize={"25px"}
                fontWeight={"400"}
                lineHeight={"45px"}
              >
                Add an extra layer of security with the Wrike Lock add-on. Own
                and manage your encryption keys for maximum control of your
                cloud data.
              </Text>
              <Button
                variant={"link"}
                color={"#08cf65"}
                fontSize="25px"
                fontWeight={"500"}
                _hover={{ textDecoration: "none" }}
              >
                <Text padding={"6px"} border={"0px solid red"}>
                  Be secure with Easywork
                </Text>
                <BiRightArrowAlt
                  border={"1px solid red"}
                  mt={"2px"}
                  transition="0.6 ease-in"
                  _hover={{ transform: "translateX(50%)" }}
                  ml="25px"
                  size="25px"
                />
              </Button>
            </Box>
            <Image
              mr={"100px"}
              src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=1/tp/storage/uploads/46b5c5fb-dfa2-4aae-a1d0-3e5c7220944c/rebrand-screenshot-lock-scheme-white.png"
            ></Image>
          </Flex>
          <Button
            mt="100px"
            height={"80px"}
            width={"180px"}
            style={{ fontSize: "20px" }}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"2xl"}
            fontWeight={600}
            mb={"50px"}
            color={"#fff"}
            bg={"#08cf65"}
            href={"#"}
            _hover={{
              bg: "#2b3148",
            }}
          >
            Get Started
          </Button>
          <Wave
            fill="#ebf5f3"
            paused="true"
            options={{
              height: 10,
              amplitude: 30,
              speed: 0.5,
              points: 2,
            }}
          />
          <Box  bg={"#ebf5f3"} mt={"-10px"} h={"1200px"}>
            <Box textAlign="center" width="750px" margin="auto" mb="80px">
              <Text
                mb="30px"
                fontSize="44px"
                lineHeight="60px"
                color="#181f38"
                fontWeight="600"
              >
                Integrate apps with just a few clicks
              </Text>
              <Text
                fontSize="19px"
                lineHeight="30px"
                color="#181f38"
                fontWeight="400"
              >
                Connect your existing apps and workflows with pre-made
                integrations available for 400+ popular apps, plus custom
                integrations for more advanced users.
              </Text>
            </Box>
            <SimpleGrid
                ml={"15%"}
                w="max-content"
                spacing={4}
                templateColumns="repeat(3, minmax(200px, 1fr))"
                templateRows={"auto"}
            >
              <Card h={"300px"} bgColor={"#fff"} borderRadius="20px" _hover={{bgColor:"#0c3245" , color:"white"}}> 
                <CardHeader textAlign={"left"}>
                <Image src="https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-microsoft.svg"></Image>
                </CardHeader>
                <CardBody textAlign={"left"} fontSize={"20px"} lineHeight={"8"}>
                  <Text>
                  Connect to Microsoft's powerful suite of<br></br>
                  workplace productivity tools, from<br></br>
                  Outlook to Excel.
                  </Text>
                </CardBody>
              </Card>
              <Card h={"300px"} bgColor={"#fff"} borderRadius="20px" _hover={{bgColor:"#0c3245" , color:"white"}}> 
                <CardHeader textAlign={"left"}>
                  <Image src="https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-google.svg"></Image>
                </CardHeader>
                <CardBody textAlign={"left"} fontSize={"20px"} lineHeight={"8"}>
                  <Text>
                  Familiar with Gmail, Google Drive, or<br></br>
                  Google Calendar? Wrike integrates with<br></br>
                  them all.
                  </Text>
                </CardBody>
              </Card>
              <Card h={"300px"} bgColor={"#fff"} borderRadius="20px" _hover={{bgColor:"#0c3245" , color:"white"}}> 
                <CardHeader textAlign={"left"}>
                  <Image src="https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-adobe.svg"></Image>
                </CardHeader>
                <CardBody textAlign={"left"} fontSize={"20px"} lineHeight={"8"}>
                  <Text>
                  Proof assets for Adobe Creative<br></br>
                  Cloud and Adobe Experience<br></br>
                  Manager without leaving Easywork.
                  </Text>
                </CardBody>
              </Card>
              <Card h={"300px"} bgColor={"#fff"} borderRadius="20px" _hover={{bgColor:"#0c3245" , color:"white"}}> 
                <CardHeader textAlign={"left"}>
                  <Image src="https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-slack.svg"></Image>
                </CardHeader>
                <CardBody textAlign={"left"} fontSize={"20px"} lineHeight={"8"}>
                  <Text>
                  Ever wanted to turn an informal Slack<br></br>
                  chat into a structured task? It's easy<br></br>
                  with Easywork.
                  </Text>
                </CardBody>
              </Card>
              <Card h={"300px"} bgColor={"#fff"} borderRadius="20px" _hover={{bgColor:"#0c3245" , color:"white"}}> 
                <CardHeader textAlign={"left"}>
                  <Image src="https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-salesforce.svg"></Image>
                </CardHeader>
                <CardBody textAlign={"left"} fontSize={"20px"} lineHeight={"8"}>
                  <Text>
                  Give your account teams 100%<br></br>
                  visibility into client projects with our<br></br>
                  Salesforce integration.
                  </Text>
                </CardBody>
              </Card>
              <Card h={"300px"} bgColor={"#fff"} borderRadius="20px" _hover={{bgColor:"#0c3245" , color:"white"}}> 
                <CardHeader textAlign={"left"}>
                  <Image src="https://web-static.wrike.com/tp/storage/uploads/580e9e7a-59f7-46d6-8665-c39bb544d2ad/logoroll-logo-zoom.svg"></Image>
                </CardHeader>
                <CardBody textAlign={"left"} fontSize={"20px"} lineHeight={"8"}>
                  <Text>
                  Want to manage tasks while on a<br></br>
                  Zoom call? All you need is Actionable<br></br>
                  Meetings by Easywork.
                  </Text>
                </CardBody>
              </Card>
            </SimpleGrid>
            <Button
                mt={"80px"}
                variant={"link"}
                color={"#0c3245"}
                fontSize="25px"
                fontWeight={"500"}
                _hover={{ textDecoration: "none" }}
              >
                <Text padding={"6px"} border={"0px solid red"}>
                  See all integrations
                </Text>
                <BiRightArrowAlt
                  border={"1px solid red"}
                  mt={"2px"}
                  transition="0.6 ease-in"
                  _hover={{ transform: "translateX(50%)" }}
                  ml="25px"
                  size="25px"
                />
              </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
