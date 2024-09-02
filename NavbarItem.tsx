import {useNavigate} from "react-router-dom";

interface NavbarItemProps {
    title: string,
    path: string
}

export function NavbarItem(props: NavbarItemProps) {
    const navigator = useNavigate();
    const className = "h-full w-30 justify-center items-center p-5 flex hover:bg-primary_dark" +(("/" + window.document.URL.split("/")[3]).startsWith(props.path) ? " bg-primary_dark" : " testt");
    return (
        <div className={className} onClick={() => navigator(props.path ? props.path : "error")}>
            <p className={"text-center text-black"}>
                {props.title}
            </p>
        </div>
    );
}
