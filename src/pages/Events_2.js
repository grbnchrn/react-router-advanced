import EventsList from "../components/EventsList";
import { json, useLoaderData } from "react-router-dom";

function EventsPage() {
    //const events = useLoaderData();
    const data = useLoaderData();
    /* if (data.isError) {
        return <p>{data.message}</p>
    } */
    const events = data.events;
    return (
        <>
            <EventsList events={events} />
        </>
    );
}
export default EventsPage;

export const loader = async () => {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        // 1- throw new Response(JSON.stringify({ message: 'Could not fetch events.'}), {status: 500}) ;
        // 2- return { isError:true, message: 'Could not fetch events.'}
        // 3- json helper
        return json({ message: "Could not fetch events." }, { status: 500 });
    } else {
        /* const resData = await response.json();
        return resData.events; */
        //can directly return the response and react loader handles the rest.
        return response;
    }
};
