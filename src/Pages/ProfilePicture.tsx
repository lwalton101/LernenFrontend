import {User} from "../Model/User.ts";
import defaultPFP from "../assets/default_pfp.png";
import {useEffect, useState} from "react";

interface ProfilePictureProps {
    user: User
    pfpClassName: string,
    outerDivClassName: string;
}

export function ProfilePicture(props: ProfilePictureProps) {
    const [pfpSrc, setPfpSrc] = useState(defaultPFP);
    useEffect(() => {
        if(!props.user.profile_pic){
            return;
        }
        setPfpSrc("https://lernendata.s3.eu-west-1.amazonaws.com/pfp/" + props.user.profile_pic);
    }, []);
    return (
        <div className={props.outerDivClassName}>
            <img src={pfpSrc as string} alt={"Profile Picture"} className={"rounded-full w-16 " + props.pfpClassName}/>

        </div>
    );
}
