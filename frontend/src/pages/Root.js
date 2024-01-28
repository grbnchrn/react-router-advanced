//import { Outlet, useNavigation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
export default function RootPage() {

    //const navigation = useNavigation();
    //To get the state any page is loading data
    return (
        <>
            <MainNavigation />
            <main>
                {/* navigation.state ==='loading' && <p>Loading....!!</p> */}
                <Outlet />
            </main>
        </>
    );
}
