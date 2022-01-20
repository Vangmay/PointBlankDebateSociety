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
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React,{useRef,useState} from 'react';
import {AiFillFacebook,AiFillHeart,AiFillInstagram} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'

const components = {
    Button:{
        sizes:{},
        variants:{
            dark:{
                color:'cyan.300',
                _hover:{
                    color:'pink.500',
                    textDecoration:'underline'
                }
            },
            light:{
                color:'black',
                _hover:{
                    color:'#d7827e',
                    textDecoration:'underline'
                }
            }
        }
    }
}

export const NewTheme = extendTheme({
    components
})


function Navbar(){
    const { colorMode, toggleColorMode } = useColorMode()
    const btn_color = useColorModeValue('light','dark') 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const [iconDisplay,changeIconDisplay] = useState()
    const nav_bg = useColorModeValue('gray.300','gray.800')
    return(
        <Box
            bg={nav_bg}
            as ='nav'
            position='fixed'
            width='100vw'
            
        >
            <Container
                display='flex'
                p={2}
                maxW='container.md'
                wrap='wrap'
                align='center'
                alignItems='center'
                justify='space-between'
                w='full'
            >
                <Flex align='Center' w='full'>
                    school_mascot
                </Flex>
                 <Flex 
                    justify="space-between" 
                    w='full' 
                    justifyContent="center" 
                    align="center" 
                    display={['none','none','flex','flex']}
                    >
                    <Button variant={btn_color}>About</Button>
                    <Button variant={btn_color}>Register</Button>
                    <Button variant={btn_color}>Format</Button>
                    <Button variant={btn_color}>Winners</Button>
                </Flex>
                <Switch size='md' onChange={toggleColorMode} marginRight={5}/>
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
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >

            </Drawer>
            </Container>
        </Box>
    )
}


function Body(){
    return(
        <Box bg='gray.400' height='100vh'>

        </Box>
    )    
}


function Footer(){
    return(
        <Box
            w='full'
            bg='gray.900'
            alignContent='center'
            textAlign='center'
            padding='10px'
        >
            <HStack>
                <Heading 
                    color='gray.400' 
                    size='xs'
                    width='full'
                >
                    This website is made by Vangmay in collaboration with the literary club. 
                    More details about our school can be found from the following links.
                </Heading>
                <VStack  width='full'>
                    <Button leftIcon={<AiFillFacebook/>} minW='140px'>Facebook</Button>
                    <Button leftIcon={<AiFillInstagram/>} minWidth='140px' >Instagram</Button>
                    <Button leftIcon={<CgWebsite/>} minWidth='140px'>Website</Button>
                </VStack>
            </HStack>
        </Box>
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



// colorscheme = {
//     purple:'#805ee7',
//     lighter_purple:"8474c3",
//     blue:"607ac9",
//     darker_blue:"5460cc",
//     darkest_blue:"3750E0"  
// }