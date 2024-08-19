import Tabs from "../../Tabs.tsx";
import Tab from "../Tab.tsx";

export function LoginPage(){
    return(
        <>
            <h1 className={"class"}>Login Page</h1>
            <div className={"center-absolute login-div"}>
                <div className={"center-flex"}>
                    <h1>test</h1>
                    <Tabs>
                        <Tab title="Sign Up">
                            <div className={"center-flex"}>
                                <div>
                                    <label>Email: </label>
                                    <input placeholder={"Enter Email:"}/>
                                    <svg></svg>
                                </div>

                                <div>
                                    <label>Password: </label>
                                    <input placeholder={"Enter Password:"}/>
                                </div>
                            </div>

                        </Tab>
                        <Tab title="Login">
                            <p>Content of Tab 2</p>
                        </Tab>
                    </Tabs>
                </div>


            </div>
        </>
    )
}