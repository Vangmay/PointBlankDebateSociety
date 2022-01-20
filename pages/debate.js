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

} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import React,{useRef,useState} from 'react';
import {AiFillFacebook,AiFillHeart,AiFillInstagram} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'

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
                color:'#3750E0',
                _hover:{
                    color:'#805ee7',
                    textDecoration:'underline'
                }
            },
            light:{
                color:'#D4DAEC',
                _hover:{
                    color:'#CFC6E1',
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
    const nav_bg = useColorModeValue('#7e93c9','gray.800')
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
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}
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
                        // display={['none','none','flex','flex']}
                    >
                        <IconButton icon = {<CloseIcon/>} bg={nav_bg} onClick={onClose} maxW='fit-content'/>
                        <Button variant={btn_color} my={5}  marginX={2} >About</Button>
                        <Button variant={btn_color} my={5}  marginX={2} >Register</Button>
                        <Button variant={btn_color} my={5}  marginX={2} >Format</Button>
                        <Button variant={btn_color} my={5}  marginX={2} >Winners</Button>
                    </Flex>
                    </DrawerBody>
                </DrawerContent>
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



