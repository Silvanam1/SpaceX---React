import logo from "./assets/logo.SpaceX.png";
import { Image } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import { LaunchList } from "./components/LaunchList";
import { LaunchDetails } from "./components/LaunchDetails";


export function App() {

  return (
    <>
      < Image m={4} src={logo}  width={300} />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route  path="launch/:launchId" element={<LaunchDetails />} />
      </Routes>
    </>
  );
  
}


