import {SignupTab} from "./SignupTab.tsx";
import {LoginTab} from "./LoginTab.tsx";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
export function LoginPage(){
    return(
        <>
            <div className={"h-screen flex items-center justify-center"}>
                <div className={"flex flex-col text-center bg-blue-300 rounded-lg"}>
                    <Tabs direction={"ltr"}>
                        <TabList>
                            <Tab>Signup</Tab>
                            <Tab>Login</Tab>
                        </TabList>

                        <TabPanel>
                            <SignupTab></SignupTab>
                        </TabPanel>

                        <TabPanel>
                            <LoginTab></LoginTab>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>

        </>
    )
}