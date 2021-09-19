import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import MaterialTable from "material-table";
import {MaterialTableIcons} from "layouts/MaterialTableIcons";
import moment from "moment";
import {AddComplaintDialog} from "../components/AddComplaintDialog";
import {AddFeedbackDialog} from "../components/AddFeedbackDialog";
import {USER_TYPES} from "constants/CommonConstants";
import EditIcon from "@material-ui/icons/Edit";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import AdminNavbar from "../../../../components/Navbars/AdminNavbar";
import {ChatEngine} from "react-chat-engine";
import ChatFeed from "../../Chat/ChatFeed";
import FooterAdmin from "../../../../components/Footers/FooterAdmin";
import {useSelector} from "react-redux";
import Navbar from "../../../../components/Navbars/AuthNavbar";

export const ComplaintsView = (props) => {

    const user = useSelector((state) => state.authReducer);

    const {
        isTableDataLoading,
        tableData,
        complaintIsLoading,
        handleCloseComplaint,
        handleChange,
        handleCloseFeedback,
        handleOpenFeedback,
        feedbackIsLoading,
        handleOpenComplaint,
        handleSaveComplaint,
        handleSaveFeedback,
        isComplaintDialogOpen,
        isFeedbackDialogOpen ,
        userType,
        handleAddComplaintId
    } = props;

    return(
        <><AddComplaintDialog
            isComplaintDialogOpen={isComplaintDialogOpen}
            handleChange={handleChange}
            handleCloseComplaint={handleCloseComplaint}
            feedbackIsLoading={feedbackIsLoading}
            handleSaveComplaint={handleSaveComplaint}
        />
            <AddFeedbackDialog
                isFeedbackDialogOpen={isFeedbackDialogOpen}
                handleChange={handleChange}
                handleCloseFeedback={handleCloseFeedback}
                complaintIsLoading={complaintIsLoading}
                handleSaveFeedback={handleSaveFeedback}
            />
            {user.userType === USER_TYPES.ADMIN ? (
                <>
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
                                                        {userType !== USER_TYPES.ADMIN ? (
                                                            <div style={{textAlign: "right", marginBottom: "10px"}}>
                                                                <Button
                                                                    variant="contained"
                                                                    color="white"
                                                                    startIcon={<AddIcon />}
                                                                    onClick={handleOpenComplaint}
                                                                >
                                                                    Add Complaint
                                                                </Button>
                                                            </div>
                                                        ) : (
                                                            <></>
                                                        )}
                                                        <MaterialTable
                                                            icons={MaterialTableIcons}
                                                            title="Complaints"
                                                            columns={[
                                                                {
                                                                    title: 'Topic',
                                                                    field: 'topic',
                                                                    grouping: false,
                                                                },
                                                                {
                                                                    title: 'Problem',
                                                                    field: 'problem',
                                                                    grouping: false,
                                                                },
                                                                {
                                                                    title: 'Date',
                                                                    field: 'date',
                                                                    grouping: false,
                                                                    render: (rowData) => moment(new Date(rowData.date)).format('YYYY-MM-DD')
                                                                },
                                                                {
                                                                    title: 'Time',
                                                                    field: 'time',
                                                                    grouping: false,
                                                                    render: (rowData) => moment(rowData.time, "HH:mm").format("hh:mm A")
                                                                },
                                                                {
                                                                    title: 'Feedback',
                                                                    field: 'feedback',
                                                                    grouping: false,
                                                                },
                                                            ]}
                                                            actions={[
                                                                userType === USER_TYPES.ADMIN ? (
                                                                    () => ({
                                                                        icon: () => <EditIcon />,
                                                                        tooltip: 'Update',
                                                                        onClick: (_, rowData) => {
                                                                            handleAddComplaintId(rowData.complaintID)
                                                                            handleOpenFeedback()
                                                                        }
                                                                    })
                                                                ) : null
                                                            ]}
                                                            localization={{
                                                                header: {
                                                                    actions: ''
                                                                }
                                                            }}
                                                            data={tableData}
                                                            isLoading={isTableDataLoading}
                                                            options={{
                                                                actionsColumnIndex: -1,
                                                                doubleHorizontalScroll: true,
                                                                exportButton: { csv: true },
                                                                exportAllData: true,
                                                                pageSize: 10,
                                                                grouping: false,
                                                                filtering: false,
                                                                maxBodyHeight: window.innerHeight * 0.7
                                                            }}
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
                </>
            ):(
                <>
                    
                        <Navbar transparent />
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
                                                        {userType !== USER_TYPES.ADMIN ? (
                                                            <div style={{textAlign: "right", marginBottom: "10px"}}>
                                                                <Button
                                                                    variant="contained"
                                                                    color="emerald"
                                                                    startIcon={<AddIcon />}
                                                                    onClick={handleOpenComplaint}
                                                                >
                                                                    Add Complaint
                                                                </Button>
                                                            </div>
                                                        ) : (
                                                            <></>
                                                        )}
                                                        <MaterialTable
                                                            icons={MaterialTableIcons}
                                                            title="Complaints"
                                                            columns={[
                                                                {
                                                                    title: 'Topic',
                                                                    field: 'topic',
                                                                    grouping: false,
                                                                },
                                                                {
                                                                    title: 'Problem',
                                                                    field: 'problem',
                                                                    grouping: false,
                                                                },
                                                                {
                                                                    title: 'Date',
                                                                    field: 'date',
                                                                    grouping: false,
                                                                    render: (rowData) => moment(new Date(rowData.date)).format('YYYY-MM-DD')
                                                                },
                                                                {
                                                                    title: 'Time',
                                                                    field: 'time',
                                                                    grouping: false,
                                                                    render: (rowData) => moment(rowData.time, "HH:mm").format("hh:mm A")
                                                                },
                                                                {
                                                                    title: 'Feedback',
                                                                    field: 'feedback',
                                                                    grouping: false,
                                                                },
                                                            ]}
                                                            actions={[
                                                                userType === USER_TYPES.ADMIN ? (
                                                                    () => ({
                                                                        icon: () => <EditIcon />,
                                                                        tooltip: 'Update',
                                                                        onClick: (_, rowData) => {
                                                                            handleAddComplaintId(rowData.complaintID)
                                                                            handleOpenFeedback()
                                                                        }
                                                                    })
                                                                ) : null
                                                            ]}
                                                            localization={{
                                                                header: {
                                                                    actions: ''
                                                                }
                                                            }}
                                                            data={tableData}
                                                            isLoading={isTableDataLoading}
                                                            options={{
                                                                actionsColumnIndex: -1,
                                                                doubleHorizontalScroll: true,
                                                                exportButton: { csv: true },
                                                                exportAllData: true,
                                                                pageSize: 10,
                                                                grouping: false,
                                                                filtering: false,
                                                                maxBodyHeight: window.innerHeight * 0.7
                                                            }}
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
                   
                </>
            )}
        </>
    )
}
