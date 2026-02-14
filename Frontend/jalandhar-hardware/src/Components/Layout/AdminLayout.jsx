import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";


export default function AdminLayout(){
    return(
        <>
        <AdminNavbar/>
        <Outlet/>
        <Footer/>
        </>
    );
};
