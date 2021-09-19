import React, {useEffect, useState} from "react";
import {ComplaintsView} from "../view/ComplaintsView";
import {useSelector} from "react-redux";
import {USER_TYPES} from "constants/CommonConstants";
import {axiosInstance, BACKEND_API} from "axios/AxiosInstance";
import {useSnackbar} from "notistack";
import {sendNotification} from "../../../../axios/CommonMethods";

export const ComplaintsController = () => {
    const { enqueueSnackbar } = useSnackbar();

    const user = useSelector((state) => state.authReducer);
    const [tableData, setTableData] = useState([]);
    const [isTableDataLoading, setIsTableDataLoading] = useState(false);

    const [isComplaintDialogOpen, setIsComplaintDialogOpen] = useState(false);
    const [complaintDetails, setComplaintDetails] = useState({topic: "", problem: ""})
    const [complaintIsLoading, setComplaintIsLoading] = useState(false);

    const [isFeedbackDialogOpen, setIsFeedbackDialogOpen] = useState(false);
    const [feedbackDetails, setFeedbackDetails] = useState({feedback: "", complaintId: ""})
    const [feedbackIsLoading, setFeedbackIsLoading] = useState(false);

    const handleChange = (type, event) => {
        if (type === "complaint") {
            setComplaintDetails({...complaintDetails, [event.target.name]: event.target.value})
        }
        if (type === "feedback") {
            setFeedbackDetails({...feedbackDetails, [event.target.name]: event.target.value})
        }
    }

    const handleAddComplaintId = (id) => {
        setFeedbackDetails({...feedbackDetails, complaintId: id})
    }

    const handleOpenComplaint = () => {
        setIsComplaintDialogOpen(true);
    }

    const handleOpenFeedback = () => {
        setIsFeedbackDialogOpen(true);
    }

    const handleCloseComplaint = () => {
        setIsComplaintDialogOpen(false);
    }

    const handleCloseFeedback = () => {
        setIsFeedbackDialogOpen(false);
    }

    const handleSaveComplaint = async () => {
        if (
            complaintDetails.problem === "" ||
            complaintDetails.topic === ""
        ) {
            enqueueSnackbar("Please fill in all fields", {
                variant: 'warning'
            });
            return;
        }

        setComplaintIsLoading(true)
        await axiosInstance({
            method: 'POST',
            url: BACKEND_API.GET_COMPLAINTS,
            data: {...complaintDetails, userId: user.userID}
        }).then(() => {
            enqueueSnackbar("Added Complaint", {
                variant: 'success'
            });
            setTableData([...tableData, {...complaintDetails, date: new Date(), time: new Date()}])
            setIsComplaintDialogOpen(false);
        }).catch((error) => {
            if (error.response) {
                enqueueSnackbar(error.response.data.message, {
                    variant: 'error'
                });
            } else {
                enqueueSnackbar("Something went wrong", {
                    variant: 'error'
                });
            }
        }).finally(() => {
            setComplaintIsLoading(false);
        })

        await sendNotification("A new complaint has been added", complaintDetails.topic, USER_TYPES.ADMIN)
    }

    const handleSaveFeedback = async () => {
        if ( feedbackDetails.feedback === "" ) {
            enqueueSnackbar("Please fill in all fields", {
                variant: 'warning'
            });
            return;
        }
        const updatedData = tableData.find(item => item.complaintID === feedbackDetails.complaintId)
        setFeedbackIsLoading(true)
        await axiosInstance({
            method: 'PUT',
            url: BACKEND_API.GET_COMPLAINTS,
            data: feedbackDetails
        }).then(() => {
            enqueueSnackbar("Added Feedback", {
                variant: 'success'
            });
            setTableData([...tableData.filter(item => item.complaintID !== feedbackDetails.complaintId), {...updatedData, feedback: feedbackDetails.feedback}])
            setIsFeedbackDialogOpen(false);
        }).catch((error) => {
            if (error.response) {
                enqueueSnackbar(error.response.data.message, {
                    variant: 'error'
                });
            } else {
                enqueueSnackbar("Something went wrong", {
                    variant: 'error'
                });
            }
        }).finally(() => {
            setFeedbackIsLoading(false);
        })

        await sendNotification("You have received a feedback from the ADMIN", feedbackDetails.feedback, USER_TYPES.CLIENT, updatedData.userID)

    }

    useEffect(() => {

        const fetchAllComplaints = async () => {
            setIsTableDataLoading(true);
            await axiosInstance({
                method: "GET",
                url: BACKEND_API.GET_COMPLAINTS
            }).then(res => {
                if (res.status === 200) {
                    setTableData(res.data)
                }
            }).finally(() => {
                setIsTableDataLoading(false);
            })
        }

        const fetchUserComplaints = async () => {
            setIsTableDataLoading(true);
            await axiosInstance({
                method: "GET",
                url: `${BACKEND_API.GET_COMPLAINTS}/${user.userID}`
            }).then(res => {
                if (res.status === 200) {
                    setTableData(res.data)
                }
            }).finally(() => {
                setIsTableDataLoading(false);
            })
        }

        if (user.userType === USER_TYPES.ADMIN) {
            fetchAllComplaints()
        } else {
            fetchUserComplaints()
        }

    }, [user])
    return(
        <ComplaintsView
            tableData={tableData}
            isTableDataLoading={isTableDataLoading}
            userType={user.userType}
            isComplaintDialogOpen={isComplaintDialogOpen}
            complaintIsLoading={complaintIsLoading}
            isFeedbackDialogOpen={isFeedbackDialogOpen}
            feedbackIsLoading={feedbackIsLoading}
            handleChange={handleChange}
            handleOpenComplaint={handleOpenComplaint}
            handleOpenFeedback={handleOpenFeedback}
            handleCloseComplaint={handleCloseComplaint}
            handleCloseFeedback={handleCloseFeedback}
            handleSaveComplaint={handleSaveComplaint}
            handleSaveFeedback={handleSaveFeedback}
            handleAddComplaintId={handleAddComplaintId}
        />
    );
}
