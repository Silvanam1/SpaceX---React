import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import * as API from "../services/launches";
import { LaunchItem } from './LaunchItem';

export function LaunchList(){

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        API.getAllLaunches().then(setLaunches).catch(console.log);
    }, []);

    return (
        <>
            <Heading as="h1" align="center" size="2xl" m={4} fontWeight="bold" textAlign="center"> SpaceX Launches</Heading>
            <section>
                {launches.map((launch) => (
                    <LaunchItem key={launch.flight_number} {...launch} />
                ))}
            </section> 
        </>
    )


}



