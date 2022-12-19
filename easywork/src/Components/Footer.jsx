
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    chakra,
    VisuallyHidden,
    Input,
    IconButton,
    Image
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  import logo from "../Utilities/logo.jpg"

  const SocialButton = ({children,label,href}) => (
      <chakra.button
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          rounded={'full'}
          w={8}
          h={8}
          cursor={'pointer'}
          as={'a'}
          href={href}
          display={'inline-flex'}
          alignItems={'center'}
          justifyContent={'center'}
          transition={'background 0.3s ease'}
          _hover={{
              bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
          }}>
          <VisuallyHidden>{label}</VisuallyHidden>
          {children}
      </chakra.button>
  );
  


  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
    <Box fontSize={"20px"} fontWeight={"200"}>
      <Box
        position={"bottom"}
        bg={"#0c3245"}
        color={"white"}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Product</ListHeader>
              <Link href={'#'}>All Teams</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Marketing</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack>
              <Link href={'#'}>Creative</Link>
              <Link href={'#'}>Project Management</Link>
              <Link href={'#'}>Product Development</Link>
              <Link href={'#'}>Business Operations</Link>
              <Link href={'#'}>Professional Services</Link>
              <Link href={'#'}>Students</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Resources</ListHeader>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Webinars</Link>
              <Link href={'#'}>Interactive Traning</Link>
              <Link href={'#'}>Support</Link>
              <Link href={'#'}>project management tools</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Our Customers</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Events</Link>
              <Link href={'#'}>Newsroom</Link>
              <Link href={'#'}>Partner Program</Link>
              <Link href={'#'}>User Conference</Link>
              <Link href={'#'}>Contact Us</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Guides</ListHeader>
              <Link href={'#'}>Project Management Guide</Link>
              <Link href={'#'}>Professional Services Guide</Link>
              <Link href={'#'}>Kanban Guide</Link>
              <Link href={'#'}>Agile Guide</Link>
              <Link href={'#'}>Remote Work Guide</Link>
              <Link href={'#'}>Return to Work Guide</Link>
              <Link href={'#'}>Project Management</Link>
              <Link href={'#'}>Scrum Guide</Link>
              <Link href={'#'}>Product Management Guide</Link>
              <Link href={'#'}>Digital Marketing Guide</Link>
              <Link href={'#'}>Go-to-Market Guide</Link>
              <Link href={'#'}>Work Management Guide</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
          </Flex>
        </Box>
      </Box>
      <Box
      bg={"#0c3245"}
      color={"white"}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
                <Link to={"/"}><Image src={logo} w={140}/></Link>
            </Box>
            <Text fontSize={'sm'}>
              © 2022 Chakra Templates. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter   />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact us</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Testimonials</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Satus</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={"white"}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    </Box>
    );
  }