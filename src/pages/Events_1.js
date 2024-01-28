import { Link } from "react-router-dom";

export default function EventsPage(){

    const EVENT_LIST=[
        {id : 'e1', title: 'EVENT 1'},
        {id : 'e2', title: 'EVENT 2'},
        {id : 'e3', title: 'EVENT 3'},
        {id : 'e4', title: 'EVENT 4'},
    ];
    return<>
    <h1>Event List Page</h1>
    <ul>
                {EVENT_LIST.map(event =>{
                    return (
                        <li key ={event.id}>
                            <Link to = {event.id} relative="page">{event.title} </Link>

                        </li>
                    )
                })}
            </ul>
    </>
}