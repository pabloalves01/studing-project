import { Outlet } from "react-router-dom";
import Sidenav from "./sidenav";

const AuthenticatedLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidenav />

            {/* Conteúdo da página */}
            <div className="flex-1 flex flex-col h-screen">
                <div className="w-full p-4 bg-[#1E1E1E] border-b-1 border-[#333333]">teste</div>
                <main className="flex-1 flex justify-center p-6 w-full max-w-7xl mx-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AuthenticatedLayout;
