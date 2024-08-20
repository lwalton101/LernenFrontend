import {SignupTab} from "./SignupTab.tsx";
import {LoginTab} from "./LoginTab.tsx";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {Navbar} from "../Navbar.tsx";
export function LoginPage(){
    return(
        <>
            <div className={"flex flex-col h-screen"}>
                <Navbar></Navbar>
                <div className={"flex flex-1 items-center justify-center overflow-auto "}>
                    <div className={"flex flex-col text-center bg-primary rounded-xl"}>
                        <Tabs direction={"ltr"} className={"flex-col h-full w-full"}>
                            <TabList className={"flex flex-row"}>
                                <Tab className={"flex-1 bg-primary_mid p-2 rounded-none border-r-2 border-primary_dark border-b-4 rounded-tl-xl"}>Signup</Tab>
                                <Tab className={"flex-1 bg-primary_mid p-2 rounded-none border-l-2 border-primary_dark border-b-4 rounded-tr-xl"}>Login</Tab>
                            </TabList>

                            <div className={"h-full w-full items-center p-5 pt-0 pb-3"}>
                                <TabPanel className={"h-full"}>
                                    <SignupTab></SignupTab>
                                </TabPanel>

                                <TabPanel>
                                    <LoginTab></LoginTab>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>


        </>
    )
}