import {useNavigate} from "react-router-dom";

interface NavbarItemProps {
    title: string,
    path?: string
}

export function NavbarItem(props: NavbarItemProps) {
    const navigator = useNavigate();
    return (
        <div className={"h-full w-10 justify-center items-center p-5 flex hover:bg-primary_dark"} onClick={() => navigator(props.path ? props.path : "error")}>
            <p className={"text-center text-black"}>
                {props.title}
            </p>
        </div>
    );
}
