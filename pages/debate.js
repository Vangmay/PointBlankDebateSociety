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
    Link,
    Img
} from '@chakra-ui/react';
import Hero from '../components/hero'
import { Link as Linkk, animateScroll as scroll } from "react-scroll";
import React,{useRef,useState} from 'react';
import {AiFillFacebook,AiFillHeart,AiFillInstagram} from 'react-icons/ai'
import { CgWebsite} from 'react-icons/cg'
import { Widget } from '@typeform/embed-react';
import { RiMoonFill, RiParagraph, RiSunLine } from "react-icons/ri";
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

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
                <Img w='150px' bg='rgba(255,255,255,0.8)' src='/Image/cambridge.png'></Img>
                
                 <Flex 
                    justify="space-between" 
                    w='full' 
                    justifyContent="center" 
                    align="center" 
                    h = 'full'
                    display={['none','none','flex','flex']}
                >
                    <Linkk  to="about"smooth={true} duration={1000}><Button variant={btn_color} _focus={{outline:'none'}} >About</Button></Linkk>
                    <Linkk  to="competition"smooth={true} duration={1000}><Button variant={btn_color} _focus={{outline:'none'}} >The Events</Button></Linkk>
                    <Linkk  to="format"smooth={true} duration={1000}><Button variant={btn_color} _focus={{outline:'none'}} >Format</Button></Linkk>
                    <Linkk  to="register"smooth={true} duration={1000}><Button variant={btn_color} _focus={{outline:'none'}} >Register</Button></Linkk>
                    <IconButton
                        icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
                        onClick={toggleColorMode}
                        zIndex='10000'
                        marginX={12}
                    />
                </Flex>
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
                        <IconButton
                            icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
                            onClick={toggleColorMode}
                            borderRadius={50}
                            zIndex='10000'
                            marginX={12}
                        />
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


function Body(){
    const box_bg = useColorModeValue('teal.300','cyan.500')
    const secondary_boxBg = useColorModeValue('cyan.200','purple.500')
    const tertiary_boxBg = useColorModeValue('blue.300','blue.500')
    return(
        <>
            <Center
                h='100%' 
                maxWidth='100%'
                background="url(/Image/Hero.png)" 
                backgroundSize='cover'
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                backgroundAttachment='fixed'
                flexDir='column' 
                className='about' height='100vh' aria-label="Introduction">
                <Center
                    h='100%' 
                    maxWidth='50%'
                    flexDir='column'
                >
                    <Heading overflow='hidden' color='gray.800' fontsize={{base:'24px', md:'12px'}}>
                        Name
                    </Heading>
                    <Heading bg='white' borderRadius='5px' opacity = '90%' overflow='hidden'color='gray.800' fontSize={{base:"12px",md:'15px',lg:'18px'}}textAlign='center' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo ultricies erat, ac euismod massa viverra in. Morbi malesuada est sed nisl congue, ac fringilla tortor mattis. Sed feugiat pellentesque dui quis condimentum. Maecenas vitae elementum nisl. Integer accumsan elit sit amet tellus interdum suscipit. Phasellus ac odio fringilla, ultricies ligula sit amet, consectetur lorem. Suspendisse potenti. Donec metus nunc, ornare id viverra eget, pellentesque sed libero. Integer ut nisi facilisis, posuere orci non, rhoncus ante. Aliquam eget massa congue, venenatis ligula eu, rutrum eros. Cras et dignissim arcu. Maecenas sed laoreet turpis. Cras et fermentum felis.
                    </Heading>
                </Center>
            </Center>

            <Box bg={box_bg} className='about' height='100vh' width='100%' aria-label="Introduction">
                <VStack  justifyContent='center'height='100vh' width='100%' flexDirection={{base:"column",md:"row",lg:'row'}}>
                        <Center textAlign='center' justifyContent='center' padding='0' width='100%' height='100%' display='flex' flexDir='column' >
                            <Heading textAlign='center' overflow='hidden' >Who are we?</Heading>
                            <Heading overflow='hidden' width='100%' fontSize={{base:"12px",md:'15px',lg:'18px'}}textAlign='center' >
                                The Point Blank Debate Society is a subsidiary of The Literary Club run by the students of City Montessori School Cambridge Section.
                                We are passionate about finding solutions to today’s problems through discourse and we welcome all enthusiastic participants to our very own debate competition; 
                                Arguably the best.
                            </Heading>
                        </Center>
                        <Box 
                            h='100%' 
                            w='100%' 
                            background="url(/Image/PointBlank.png)" 
                            backgroundSize='cover'
                            backgroundPosition='upper'
                            backgroundRepeat='no-repeat'
                        /> 
                </VStack>
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
                        background="url(/Image/cover.PNG)"
                        backgroundSize='cover'
                        backgroundRepeat='no-repeat'
                    /> 
                </HStack>

            </Box>
            <Box className='format' bg={tertiary_boxBg} padding={12} height='100vh' width='100%' >
                    <HStack 
                        bg={useColorModeValue('teal.200','blue.900')} 
                        height='100%' 
                        width='100%' 
                        flexDirection={{base:'column',md:'column',lg:'row'}}
                        padding={12}
                        borderRadius={12}
                        justifyContent='space-evenly'
                        >
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
                padding={12}
            >
                <Widget id="z552lHMM" style={{ zIndex:10,width: '100%' , height:'100%' }} className="my-form"></Widget>
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
                <Link _hover='none'href='https://www.instagram.com/cms.cambridge/' target='_blank' w='fit-content'>
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
        </>
    )
}

export default Debate;



