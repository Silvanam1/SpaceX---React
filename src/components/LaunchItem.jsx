import { Box,  Flex, Text, Tag, Spacer } from '@chakra-ui/react';
import { FaCalendar } from "react-icons/fa6";
import dayjs from "dayjs";
import "dayjs/locale/es";


export function LaunchItem(launch){
    return (
        <Box  bg="gray.100" p={4} m={4} borderRadius="lg">
        <Flex display="flex">
          <Text textStyle="2xl">
            Mission <strong>{launch.mission_name}</strong>({launch.launch_year})
          </Text>
          <Spacer/>
          <Tag.Root  p={4}  colorPalette={launch.launch_success ? "green" : "red"} >
            <Tag.Label>
              {launch.launch_success ? "Success" : "Failure"}
            </Tag.Label>
          </Tag.Root>
        </Flex>
        <Flex align="center">
        <FaCalendar />
        <Text fontSize="sm" ml={1}>
          { dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
        </Text>
        </Flex>
      </Box>
    )
}