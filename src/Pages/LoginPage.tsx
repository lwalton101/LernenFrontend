import {SignupTab} from "./SignupTab.tsx";
import {LoginTab} from "./LoginTab.tsx";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
export function LoginPage(){
    return(
        <>
            <div className={"h-screen flex items-center justify-center"}>
                <div className={"flex flex-col text-center bg-blue-300 rounded-xl"}>
                    <Tabs direction={"ltr"} className={"flex-col h-full w-full"}>
                        <TabList>
                            <Tab>Signup</Tab>
                            <Tab>Login</Tab>
                        </TabList>

                        <div className={"h-full w-full items-center p-5 pt-0"}>
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

        </>
    )
}