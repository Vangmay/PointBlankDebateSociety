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
    Text
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import React,{useRef,useState} from 'react';
import {AiFillFacebook,AiFillHeart,AiFillInstagram} from 'react-icons/ai'
import { CgWebsite} from 'react-icons/cg'
import { Widget } from '@typeform/embed-react';

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
        alignContent='center'
        display='flex'
        justifyContent='center'
        overflow='hidden'
        >
            <Container
                display='flex'
                p={2}
                maxW='100%'
                wrap='wrap'
                align='center'
                alignItems='center'
                justify='space-between'
                w='100%'
                justifyContent='center'
                >
                school_mascot
                
                 <Flex 
                    justify="space-between" 
                    w='full' 
                    justifyContent="center" 
                    align="center" 
                    display={['none','none','flex','flex']}
                >
                    <Button variant={btn_color} _focus={{outline:'none'}} >About</Button>
                    <Button variant={btn_color} _focus={{outline:'none'}} >Register</Button>
                    <Button variant={btn_color} _focus={{outline:'none'}} >Format</Button>
                    <Button variant={btn_color} _focus={{outline:'none'}} >Winners</Button>
                </Flex>
                <Box p={4} mx={12} overflow='hidden' height='100%' width='80%' >
                <Switch size='sm' style={{width:"100%",height:"100%",overflow:"hidden"}}onChange={toggleColorMode} padding='none' />
                </Box>
                <IconButton
                    icon = {<HamburgerIcon/>}
                    onClick={onOpen}
                    display={['flex','flex','none','none']}
                    marginRight={12}
                    ref={btnRef}
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
                        <IconButton icon = {<CloseIcon/>} bg={nav_bg} onClick={onClose} maxW='fit-content'/>
                        <Button variant={btn_color} my={5}  marginX={2} _focus={{outline:'none'}} >About</Button>
                        <Button variant={btn_color} my={5}  marginX={2} _focus={{outline:'none'}} >Register</Button>
                        <Button variant={btn_color} my={5}  marginX={2} _focus={{outline:'none'}} >Format</Button>
                        <Button variant={btn_color} my={5}  marginX={2} _focus={{outline:'none'}} >Winners</Button>
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
    return(
        <>
            <Box bg={box_bg} height='100vh' width='100%' aria-label="Introduction">
                <HStack height='100vh' width='100%' flexDirection={{base:"column",md:"row",lg:'row'}}>
                    <Box 
                        h='100%' 
                        w='100%' 
                        background="" 
                        backgroundSize='cover'
                        backgroundRepeat='no-repeat'
                    /> 
                    <Center padding='0' width='100%' height='100%' display='flex' flexDir='column' margin='0px'>
                        <Heading textAlign='center' overflow='hidden' >Who are we?</Heading>
                        <Heading overflow='hidden' fontSize={{base:"12px",md:'15px',lg:'18px'}}textAlign='center' >We are we</Heading>
                    </Center>
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
            >
                <Widget id="z552lHMM" style={{ width: '90%' , height:'90%' }} className="my-form"></Widget>
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
                alignContent='flex-start'
                textAlign='right'
                height='100%'
            >
                <Button leftIcon={<AiFillFacebook/> } minW='140px'>Facebook</Button>
                <Button leftIcon={<AiFillInstagram/>} minWidth='140px' >Instagram</Button>
                <Button leftIcon={<CgWebsite/>} minWidth='140px'>Website</Button>
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



