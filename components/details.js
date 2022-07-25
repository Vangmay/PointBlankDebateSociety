import { Box,HStack,Center,Heading, paragraph,useColorModeValue, Text } from "@chakra-ui/react"

function Details(props){
    return(
        <Box className='format' padding={12} height='100vh' width='100%' >
            <HStack 
                bg={useColorModeValue('teal.200','blue.900')} 
                height='100%' 
                width='100%' 
                flexDirection={{base:'column',md:'column',lg:'row'}}
                borderRadius={12}
                justifyContent='space-evenly'
                backgroundSize='100%'
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                overflow="none"
            >
                <Center 
                    height='100%' 
                    textAlign='center'
                    backgroundPosition='center'
                    backgroundImage={props.Image}
                    h='100%' 
                    width='100%'
                    background="url(/Image/optimized/fluid.webp)"
                    backgroundSize='cover'
                    backgroundRepeat='no-repeat'
                >
                    <Heading overflow='hidden'>{props.Name}</Heading>
                </Center>
                <Center w='100%' h='100%' flexDir='column'>
                    <Text>{props.Desc}</Text>
                    <Text>Track 1</Text>
                    <Text>Track 2</Text>
                    <Text>Track 3</Text>
                </Center>
            </HStack>
        </Box>
    )
}

export default Details;