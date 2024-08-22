import {NavbarItem} from "../NavbarItem.tsx";
import defaultPFP from "../src/assets/default_pfp.png"
import {useUser} from "./context/UserContext.tsx";

export function Navbar() {
    const user = useUser();
    return (
        <>
            <div className="flex justify-between items-center bg-primary">
                <div className={"flex flex-wrap flex-1 h-12 w-1/3 items-center"}>
                    <NavbarItem title={"Home"} path={"/root"}></NavbarItem>
                    <NavbarItem title={"Login"} path={"/login"}></NavbarItem>
                    <NavbarItem title={"Create"} path={"/create"}></NavbarItem>
                    <NavbarItem title={"Create"} path={"/create"}></NavbarItem>
                </div>
                <div className="flex-1 text-center">Search(todo)</div>
                <div className={"flex flex-wrap flex-row-reverse flex-1 h-10 w-1/3"}>
                    <img className={"h-full p-1"} src={defaultPFP} alt={"The default profile picture"}></img>
                    <div className={"justify-center items-center flex mr-2"}>
                        <p className={"text-center text-black"}>{user ? user.username : ""}</p>
                    </div>
                    <NavbarItem title={"Profile"} path={"/profile"}></NavbarItem>
                </div>
            </div>


        </>
    );
}
