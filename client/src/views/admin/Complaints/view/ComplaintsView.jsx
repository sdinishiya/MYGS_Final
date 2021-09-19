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

export const ComplaintsView = (props) => {

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
        <>
            <AddComplaintDialog
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

        </>
    )
}
