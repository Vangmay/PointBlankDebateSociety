import { Box,HStack,Center,Heading, paragraph,useColorModeValue } from "@chakra-ui/react"

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
                
            </HStack>
        </Box>
    )
}

export default Details;