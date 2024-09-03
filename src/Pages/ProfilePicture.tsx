import {User} from "../Model/User.ts";
import defaultPFP from "../assets/default_pfp.png";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {ProfilePictureIcon} from "./SVG/ProfilePictureIcon.tsx";
import axiosInstance from "../axiosInstance.ts";

interface ProfilePictureProps {
    user: User
    uploadEnabled?: boolean
    pfpClassName?: string,
    outerDivClassName?: string;
}

export function ProfilePicture(props: ProfilePictureProps) {
    const [pfpSrc, setPfpSrc] = useState(defaultPFP);
    const inputFile = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        if(!props.user.profile_pic){
            return;
        }
        setPfpSrc("https://lernendata.s3.eu-west-1.amazonaws.com/pfp/" + props.user.profile_pic);
    }, []);

    function onUploadClick() {
        if (inputFile.current) {
            if ("click" in inputFile.current) {
                inputFile.current.click();
            }
        }
    }

    async function onFileUpload(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.item(0);

        if (!file) {
            // If no file is selected, exit the function.
            return;
        }

        const fd = new FormData();
        console.log(file); // Log the file to the console for debugging purposes
        fd.append("pfp", file);

        try {
            await axiosInstance.post("/user/update/pfp", fd, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
        } catch (error) {
            // Handle the error appropriately
            console.error('Error uploading file:', error);
        }
    }

    return (
        <div className={"relative " + props.outerDivClassName}>
            <img src={pfpSrc as string} alt={"Profile Picture"} className={"rounded-full w-full h-full aspect-square " + props.pfpClassName}/>
            {props.uploadEnabled && <ProfilePictureIcon onClick={onUploadClick} className={"absolute top-0 left-0 w-full h-full fill-white opacity-0 hover:opacity-100 hover:bg-black rounded-full "}></ProfilePictureIcon>}
            <input type={"file"} ref={inputFile} className={"hidden"} onChange={onFileUpload}/>
        </div>
    );
}
