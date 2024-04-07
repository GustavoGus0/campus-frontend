import Menu from "./Menu";
import Profile from "./profile/Profile";
import Events from "./events/Events";
import Competencies from "./competencies/Competencies";
import Notifications from "./notifications/Notifications";
import Messages from "./messages/Messages";
import Settings from "./settings/Settings";
import Registration from "../reg/Registration";
import "./main.scss";
import "../../vars.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Main(){

    

    return(
        <>
            <Registration />
        </>

        // <Router>
        //     <div className="page">
        //         <menu>
        //             <Menu />
        //         </menu>
        //         <main>
        //             <Routes>
        //                 <Route path="/profile" element={<Profile />} />
        //                 <Route path="/events" element={<Events />} />
        //                 <Route path="/competencies" element={<Competencies />} />
        //                 <Route path="/notifications" element={<Notifications />} />
        //                 <Route path="/messages" element={<Messages />} />
        //                 <Route path="/settings" element={<Settings />} />
        //             </Routes>
        //         </main>
        //     </div>
        // </Router>
    );
}