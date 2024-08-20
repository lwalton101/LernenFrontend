import Tabs from "../../Tabs.tsx";
import Tab from "../Tab.tsx";
import {SignupTab} from "./SignupTab.tsx";
import {LoginTab} from "./LoginTab.tsx";
export function LoginPage(){
    return(
        <>
            <div className={"h-screen flex items-center justify-center"}>
                <div className={"flex flex-col text-center bg-blue-500 rounded"}>
                    <Tabs>
                        <Tab title="Sign Up">
                            <SignupTab></SignupTab>
                        </Tab>
                        <Tab title="Login">
                            <LoginTab></LoginTab>
                        </Tab>
                    </Tabs>
                </div>
            </div>

        </>
    )
}