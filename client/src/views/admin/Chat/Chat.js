import React from "react";
import { ChatEngine } from 'react-chat-engine';
import Sidebar from "../../../components/Sidebar/Sidebar";
import AdminNavbar from "../../../components/Navbars/AdminNavbar";
import FooterAdmin from "../../../components/Footers/FooterAdmin";
import ChatFeed from "./ChatFeed";
import {useSelector} from "react-redux";

export const Chat = () => {

    const projectId = "3c0a086f-ebac-4ee0-9459-ea389f5f06c4";
    const user = useSelector((state) => state.authReducer);

    return(
        <main>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                <div className=" bg-emerald-450 md:pt-32 pb-32 pt-12"/>
                <div className="px-4 md:px-10 mx-auto w-full"/>
                <section className="pb-18 relative block bg-white">
                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <section className="relative block py-18 lg:pt-0 ">
                            <div className="container mx-auto px-4">
                                <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                                    <div className="w-full lg:w-11/12 px-4">
                                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                            <div className="block w-full overflow-x-auto">
                                                <ChatEngine
                                                    height="80vh"
                                                    projectID={projectId}
                                                    userName={user.fname ? user.fname : user.firstName}
                                                    userSecret={user.email}
                                                    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <FooterAdmin />
                </section>
            </div>
        </main>
    )
}
