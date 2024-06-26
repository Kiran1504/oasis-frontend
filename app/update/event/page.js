"use client"

import { useEffect, useState } from "react"
import UpdateEvent from "./UpdateEvent"

import axios from "axios";

export default function UpdateEventPage() {

    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(true)

    const eventId = 7;

    useEffect(() => {

        const fetchEventData = async () => {

            const token = localStorage.getItem('token');

            try {

                const response = await axios.get(`http://3.110.161.150:4000/api/event/fetchEvent?id=${eventId}`, {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                });

                setValues(response.data);
                setLoading(false);

                console.log(response.data);
            }
            catch (error) {
                console.log('Error occured in updating event: ', error);
            }
        }

        fetchEventData();
    }, [])

    return (
        !loading ? <UpdateEvent displayType={"EVENT"} values={values} /> : <div>Loading...</div>
    )
}