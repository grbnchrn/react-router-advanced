import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function EditEventPage(){
    const data = useRouteLoaderData('eventDetail');
    return<>
   <EventForm method={'PATCH'}event= {data.event}/>
    </>
}