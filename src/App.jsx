import { useState, useEffect } from 'react';
import * as API from "./services/launches";
import logo from "./assets/logo.SpaceX.png";
import { Heading, Image } from '@chakra-ui/react';
import { LaunchItem } from './components/LaunchItem';




export function App() {

  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      < Image m={4} src={logo}  width={300} />
      <Heading as="h1" align="center" size="2xl" m={4} fontWeight="bold" textAlign="center"> SpaceX Launches</Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
  );
  
}


