import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Grid,
    background,
  } from '@chakra-ui/react';
  import {Link} from "react-router-dom";
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
 import logo from "../Utilities/logo.jpg"

  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box pos="fixed" top="0" zIndex="2" w="100%" border="0px solid red">
        <Flex
          bg='#181f38'
          color= '#fff'
          minH={'30px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={0}
        //   borderStyle={'solid'}
        //   borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start'}}>
            <Link to={"/"}><Image src={logo} w={140}/></Link>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10} style={{marginTop:"45px",fontSize:"30px"}} >
            <DesktopNav />
            </Flex>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              padding="30px"
              style={{fontSize:"17px"}}
              as={'a'}
              fontSize={'sm'}
              fontWeight={500}
              color={'#08cf65'}
              variant={'link'}
              href={'/login'}
              _hover={{
                color: "#fff",
              }}>
              Log In
            </Button>
            <Link to="/getstarted">
                <Button
                    href={"/signin"}
                    textDecoration={"none"}
                    padding="35px"
                    style={{ fontSize: "17px" }}
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"#08cf65"}
                    _hover={{
                    bg: "white",
                    color: "black",
                }}
                >
                Start for free
                </Button>
          </Link>
          </Stack>
          
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('white');
    const linkHoverColor = useColorModeValue('green');
    const popoverContentBgColor = useColorModeValue('#181f38');

    return (
      <Stack   direction={'row'} spacing={5}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} style={{display:"flex",height:"100px"}}>
            <Popover trigger={'hover'} placement={'bottom-start'}  >
              <PopoverTrigger >
                <Link
                  style={{fontSize:"17px"}}
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'underline',
                    color: linkHoverColor,
                    textDecorationThickness: "3px"
                  }}
                  
                  >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={"#181f38"}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Box gap={5} >
                    {navItem.children.map((child) => (
                      <DesktopSubNav  key={child.label} {...child} />
                    ))}
                  </Box>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={5}
        rounded={'md'}
        >
        <Stack fontWeight={"200"} direction={'row'} align={'center'} _hover={{bgColor:"#08cf65", borderRadius:"10px"}} >
          <Box>
            <Text
              style={{color:"white"}}
              transition={'all .5s ease'}
              _hover={{ color: '#08cf65' }}
              fontWeight={"300"}
              marginBottom={"10px"}>
              {label}
            </Text>
            <Text  marginBottom={"5px"} fontSize={'sm'} color={"gray.500"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'white'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const NAV_ITEMS = [
    {
      label: 'Why Easywork?',
      children: [
        {
          label: 'For Teams',
          subLabel: 'Marketing,Professional Services,Project Managers,Creative & Design',
          href: '#',
        },
        {
          label: 'Use Cases',
          subLabel: 'Workflow Management,Task Management,Project Tracking,Resource Management',
          href: '#',
        },
        {
            label: 'Apps & Integration',
            subLabel: 'Slack,Salesforce,Microsoft Teams,Adobe & Many more',
            href: '#',
        },
        {
            label: 'Explore Easywork',
            subLabel: 'Book Demo,Take a Product Tour,Start With Templates,Customer Stories,ROI Calculator',
            href: '#',
        },
      ],
    },
    {
      label: 'Features',
      children: [
        {
          label: 'Dashboard',
          subLabel: 'Visualize tasks,processes,analytics,and many more',
          href: '#',
        },
        {
          label: 'Proofing',
          subLabel: 'Streamlined proofing and collaboration in one place',
          href: '#',
        },
        {
            label: 'Project Resource and Planning',
            subLabel: 'Plan and allocate resourses for timely delivery.',
            href: '#',
        },
        {
            label: 'Custom Item Types',
            subLabel: 'Tallor work to fit your speecific workplace at work.',
            href: '#',
        },
        {
            label: 'Automation',
            subLabel: 'Define and trigger automated workflows to eliminate mannual efforts',
            href: '#',
        },
      ]
    },
    {
      label: 'Resources',
      children: [
        {
          label: 'Resource Hub',
          subLabel: 'Top assests on productivity,collaboration and more.',
          href: '#',
        },
        {
          label: 'Educational Guides',
          subLabel: 'Guides and tools to unlock better work management.',
          href: '#',
        },
        {
            label: 'Partners',
            subLabel: 'Power new possibilites with the Easywork partner program.',
            href: '#',
        },
        {
            label: 'Webinars',
            subLabel: 'Join our live or on-demand sessions to do your best work.',
            href: '#',
        },
        {
            label: 'Developers',
            subLabel: 'Connect and build integrations with easy-to-use APIs.',
            href: '#',
        },
      ]
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
  ];