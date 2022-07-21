import { Box,Center,Heading } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react";

function Card(props){
    return(
        <Box height='100%' width='100%'>
            <Center bg={props.bg} height='100%' flexDir='column'>
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
export default Card;