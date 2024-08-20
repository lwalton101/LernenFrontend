import {NavbarItem} from "../NavbarItem.tsx";

export function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center bg-primary">
                <div className={"flex flex-wrap flex-1 h-10 w-1/3 items-center"}>
                    <NavbarItem title={"Home"} path={"/root"}></NavbarItem>
                    <NavbarItem title={"Create"} path={"/create"}></NavbarItem>
                    <NavbarItem title={"Create"} path={"/create"}></NavbarItem>
                    <NavbarItem title={"Create"} path={"/create"}></NavbarItem>
                </div>
                <div className="flex-1 text-center">Search(todo)</div>
                <div className={"flex flex-wrap flex-row-reverse flex-1 h-10 w-1/3"}>
                    <NavbarItem title={"Profile"} path={"/root"}></NavbarItem>
                </div>
            </div>


        </>
    );
}
