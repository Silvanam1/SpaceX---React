import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from '../services/launches';



export function LaunchDetails() {

    const [ launch, setLaunch] = useState({});

    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId).then(setLaunch).catch(console.log);
    }, [launchId]);

    return <div>
        <pre>{JSON.stringify(launch)}</pre>
        </div>
}