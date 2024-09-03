import {getDate} from "../Model/Question.ts";
import {User} from "../Model/User.ts";
import {useNavigate} from "react-router-dom";
import {ProfilePicture} from "./ProfilePicture.tsx";

interface UserBoxProps {
    user: User;
}

export function UserBox({user}: UserBoxProps) {
    const navigator = useNavigate();

    return (
        <div className={"bg-primary flex flex-col items-center m-4 rounded-xl w-[300px]"}>
            <div className={"flex flex-col p-3 items-center flex-1 w-full cursor-pointer"} onClick={() => navigator(`/profile?id=${user.user_id}`)}>

                <p className={"text-3xl text-center"}>{user.username}</p>
                <div className={"flex flex-row-reverse items-center"}>
                    <ProfilePicture user={user} outerDivClassName={"w-20"}/>
                </div>
                <p className={"m-1"}>Creation Date: {getDate(user.account_creation_date as string)}</p>
            </div>
        </div>

    );
}
