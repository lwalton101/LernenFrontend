interface NavbarItemProps {
    title: string,
    path?: string
}

export function NavbarItem(props: NavbarItemProps) {
    return (
        <div className={"h-full w-10 justify-center items-center p-5 flex hover:bg-primary_dark"}>
            <p className={"text-center text-black"}>
                {props.title}
            </p>
        </div>
    );
}
