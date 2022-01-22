import { 
    HStack,
    Box,
    Container,
    Heading,
    VStack,
    Flex,
    Button,
    Switch,
    useColorModeValue,
    useColorMode,
    extendTheme,
    Drawer,
    useDisclosure,
    IconButton,
    Center,
    color,
    DrawerOverlay,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    Text,
    Link
} from '@chakra-ui/react';
import { Link as Linkk, animateScroll as scroll } from "react-scroll";
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import React,{useRef,useState} from 'react';
import {AiFillFacebook,AiFillHeart,AiFillInstagram} from 'react-icons/ai'
import { CgWebsite} from 'react-icons/cg'
import { Widget } from '@typeform/embed-react';
import { RiMoonFill, RiSunLine } from "react-icons/ri";

// colorscheme = {
//     purple:'#805ee7',
//     lighter_purple:"8474c3",
//     blue:"607ac9",
//     darker_blue:"5460cc",
//     darkest_blue:"3750E0"  
// }

// colorscheme_light = {
//     Shadow_blue:"7e93c9"  
//     Light_periwinkle:"D4DAEC"
//     Light_lavender:"CFC6E1",
//     Beau_blue:"CADAE0"
//     Opal:"B7D3D3"
// }

const components = {
    Button:{
        sizes:{},
        variants:{
            dark:{
                color:'#4299E1',
                _hover:{
                    color:'#BEE3F8',
                    textDecoration:'underline'
                }
            },
            light:{
                color:'black',
                _hover:{
                    color:'#0987A0',
                    textDecoration:'underline'
                }
            },
            socialLight:{
                color:"red",
                _hover:{
                    backgroundColor:'red'
                }
            }
        }
    },
}
export const NewTheme = extendTheme({
    components
})


function Navbar(){
    const { colorMode, toggleColorMode } = useColorMode()
    const btn_color = useColorModeValue('light','dark') 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const nav_bg = useColorModeValue('#BEE3F8','gray.800')
    return(
        <Box
        w='100vw'
        bg={nav_bg}
        as ='nav'
        padding={0}
        margin={0}
        minH={75}
        position='fixed'
        alignContent='center'
        display='flex'
        justifyContent='center'
        overflow='hidden'
        zIndex='100000000000'
        >
            <Container
                display='flex'
                maxW='100%'
                wrap='wrap'
                align='center'
                alignItems='center'
                w='100%'
                justifyContent='space-between'
                >
                school_mascot
                
                 <Flex 
                    justify="space-between" 
                    w='full' 
                    justifyContent="center" 
                    align="center" 
                    display={['none','none','flex','flex']}
                >
                    <Linkk  to="about"smooth={true} duration={1000}><Button variant={btn_color} _focus={{outline:'none'}} >About</Button></Linkk>
                    <Linkk  to="competition"smooth={true} duration={1000}><Button variant={btn_color} _focus={{outline:'none'}} >Arguably The Best</Button></Linkk>
                    <Linkk  to="format"smooth={true} duration={1000}><Button variant={btn_color} _focus={{outline:'none'}} >Format</Button></Linkk>
                    <Linkk  to="register"smooth={true} duration={1000}><Button variant={btn_color} _focus={{outline:'none'}} >Register</Button></Linkk>
                </Flex>
                <IconButton
                    icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
                    onClick={toggleColorMode}
                    borderRadius={50}
                    zIndex='10000'
                    marginX={12}
                />
                <IconButton
                    icon = {<HamburgerIcon/>}
                    onClick={onOpen}
                    display={['flex','flex','none','none']}
                    marginRight={12}
                    ref={btnRef}
                    w='20px'
                />
            {/* MOBILENAVVVVVVVVVVVVVVVVVVVVVVVVVVV */}
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}
                padding={10}
                >
                <DrawerOverlay/>
                <DrawerContent 
                    bg={nav_bg} 
                >
                    <DrawerFooter padding='12px'/>
                    <DrawerBody>
                    <Flex 
                        justify="space-between" 
                        w='full' 
                        h='full'
                        justifyContent="center" 
                        align="center" 
                        flexDirection='column'
                        padding={10}
                        // display={['none','none','flex','flex']}
                        >
                        <IconButton icon = {<CloseIcon/>} bg={nav_bg} my={5}  marginX={2} onClick={onClose} maxW='fit-content'/>
                        <Linkk  to="about"smooth={true} duration={1000}>
                            <Button variant={btn_color} my={5}  marginX={2} _focus={{outline:'none'}} >About</Button>
                        </Linkk>
                        <Linkk  to="competition"smooth={true} duration={1000}>
                            <Button variant={btn_color} my={5}  marginX={2} _focus={{outline:'none'}} >Register</Button>
                        </Linkk>
                        <Linkk  to="format"smooth={true} duration={1000}>
                            <Button variant={btn_color} my={5}  marginX={2} _focus={{outline:'none'}} >Format</Button>
                        </Linkk>
                        <Linkk  to="register"smooth={true} duration={1000}>
                            <Button variant={btn_color} my={5}  marginX={2} _focus={{outline:'none'}} >Winners</Button>
                        </Linkk>
                    </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            </Container>
        </Box>
    )
}

function Card(props){
    const card_bg=useColorModeValue('teal.300','blue.800')
    return(
        <Box height='100%' width='500px' borderRadius={12}>
            <Center bg={card_bg} height='100%' flexDir='column'>
                <Heading
                    overflow='hidden'
                >
                    {props.title}
                </Heading>
                <Heading
                    fontSize={{base:'10px',md:'15px'}}
                    overflow='hidden'
                >
                    {props.desc}
                </Heading>
            </Center>
        </Box>
    )
}

function Body(){
    const box_bg = useColorModeValue('teal.300','cyan.500')
    const secondary_boxBg = useColorModeValue('cyan.200','purple.500')
    const tertiary_boxBg = useColorModeValue('blue.300','blue.500')
    return(
        <>
            <Box bg={box_bg} className='about' height='100vh' width='100%' aria-label="Introduction">
                <HStack height='100vh' width='100%' flexDirection={{base:"column",md:"row",lg:'row'}}>
                    <Box 
                        h='100%' 
                        w='100%' 
                        background="url(/Image/PointBlank.png)" 
                        backgroundSize='cover'
                        backgroundPosition='upper'
                        backgroundRepeat='no-repeat'
                    /> 
                    <Center padding='0' width='100%' height='100%' display='flex' flexDir='column' margin='0px'>
                        <Heading textAlign='center' overflow='hidden' >Who are we?</Heading>
                        <Heading overflow='hidden' fontSize={{base:"12px",md:'15px',lg:'18px'}}textAlign='center' >
                            The Point Blank Debate Society is a subsidiary of The Literary Club run by the students of City Montessori School Cambridge Section.
                            We are passionate about finding solutions to today’s problems through discourse and we welcome all enthusiastic participants to our very own debate competition; 
                            Arguably the best.
                        </Heading>
                    </Center>
                </HStack>
            </Box>

            <Box className='competition' bg={secondary_boxBg} height='100vh' width='100%' aria-label="AboutCompetition">
                <HStack height='100vh' width='100%' flexDirection={{base:"column",md:"row",lg:'row'}}>
                    <Center padding='0' height='100%' width='100%'display='flex' flexDir='column' margin='0px'>
                        <Heading textAlign='center' overflow='hidden' >What is Arguably The Best?</Heading>
                        <Heading overflow='hidden' fontSize={{base:"12px",md:'15px',lg:'18px'}}textAlign='center' >
                        As the name implies, our debate competitions aims to find answers through the rigorous path of critical thinking. 
                        No angle goes unexplored when participants dissect each claim and present their views. 
                        Arguments laid out and scrutinised to find the best answers is what makes us Arguably The Best.
                        </Heading>
                    </Center>
                    <Box 
                        h='100%' 
                        w='100%' 
                        background="url(/Image/cover.png)"
                        backgroundSize='cover'
                        backgroundRepeat='no-repeat'
                    /> 
                </HStack>

            </Box>

            <Box className='format' bg={tertiary_boxBg} padding={12} height='100vh' width='100%' aria-label="AboutCompetition">
                <HStack 
                    bg={useColorModeValue('teal.200','blue.900')} 
                    height='100%' 
                    width='100%' 
                    justifyContent='space-evenly'
                    flexDirection={{base:'column',md:'column',lg:'row'}}
                    padding={12}
                    borderRadius={12}
                >
                    <Card title='Day-1' desc="Small description of what happens in day 1"></Card>
                    <Card title='Day-2' desc="Small description of what happens in day 2"></Card>
                    <Card title='Day-3' desc="Small description of what happens in day 3"></Card>
                </HStack>
                
            </Box>

            <Box 
                bg='gray.400' 
                height='100vh' 
                width='100vw' 
                display='flex' 
                justifyContent='center' 
                alignContent='center'
                textAlign='center'
                paddingTop={5}
                className='register'
            >
                <Widget id="z552lHMM" style={{ zIndex:10,width: '80%' , height:'90%' }} className="my-form"></Widget>
            </Box>
        </>
    )    
}


function Footer(){
    const nav_bg = useColorModeValue('#BEE3F8','gray.800')
    return(
        <HStack
        w='100vw'
        bg={nav_bg}
        alignContent='center'
        textAlign='center'
        padding='10px'
        flexDir='row'
        >
            <Heading 
                color={useColorModeValue('#414141','gray.500')} 
                size='xs'
                width='100%'
                overflow='hidden'
                height='100%'
            >
                This website is made by Vangmay in collaboration with the literary club. 
                More details about our school can be found from the following links.
            </Heading>
            <VStack 
                width='100%' 
                alignContent='right' 
                textAlign='right'
                height='100%'
            >
                <Link _hover='none'href='http://www.cmseducation.org/cambridge/' target='_blank' w='fit-content'>
                    <Button leftIcon={<CgWebsite/>} minWidth='140px'>Website</Button>
                </Link>
                <Link _hover='none'href='https://www.instagram.com/cms.cambridge/http://www.cmseducation.org/cambridge/' target='_blank' w='fit-content'>
                <Button leftIcon={<AiFillInstagram/>} minWidth='140px' >Instagram</Button>
                </Link>
                <Link _hover='none'href='https://www.facebook.com/cmsgn2cambridge/' target='_blank' w='fit-content'>
                    <Button leftIcon={<AiFillFacebook/> } minW='140px'>Facebook</Button>
                </Link>
            </VStack>
        </HStack>
    )
}


function Debate() {
    return (
        <>
            <Navbar/>
            <Body/>
            <Footer/>
        </>
    )
}

export default Debate;



