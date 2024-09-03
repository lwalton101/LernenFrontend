import {NavbarItem} from "../NavbarItem.tsx";
import defaultPFP from "../src/assets/default_pfp.png"
import {useUser} from "./context/UserContext.tsx";
import {useEffect, useState} from "react";
import {SearchIcon} from "./Pages/SVG/SearchIcon.tsx";
import {useNavigate} from "react-router-dom";

export function Navbar() {
    const { user, refreshUser } = useUser();
    const [searchQuery, setSearchQuery] = useState("");

    const navigator = useNavigate();
    useEffect(() => {
        refreshUser();
    }, []);

    function onKeyPress(key: string) {
        if(key != "Enter"){
            return;
        }

        navigator(`/search?query=${searchQuery}`)
    }

    return (
        <>
            <div className="flex justify-between items-center bg-primary">
                <div className={"flex flex-wrap flex-1 h-12 w-1/3 items-center"}>
                    <NavbarItem title={"Home"} path={"/root"}></NavbarItem>
                    <NavbarItem title={"Browse"} path={"/browse"}></NavbarItem>
                    <NavbarItem title={"Create"} path={"/create"}></NavbarItem>
                </div>
                <div className="flex-1 text-center bg-gray-200 w-full rounded-full p-1 flex items-center">
                    <SearchIcon className={"w-5 h-5 m-1"}></SearchIcon>
                    <input className={"bg-gray-200 w-full h-full rounded-full outline-none"} placeholder={"Search"} onKeyDown={(e) => onKeyPress(e.key)} onChange={(e) => setSearchQuery(e.target.value)}/>
                </div>
                <div className={"flex flex-wrap flex-row-reverse flex-1 h-10 w-1/3"}>
                    <img className={"h-full p-1"} src={defaultPFP} alt={"The default profile picture"}></img>
                    <div className={"justify-center items-center flex mr-2"}>
                        <p className={"text-center text-black"}>{user ? user.username : ""}</p>
                    </div>
                    <NavbarItem title={"Profile"} path={`/profile?id=${user?.user_id}`}></NavbarItem>
                </div>
            </div>


        </>
    );
}
