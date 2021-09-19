import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import {CircularProgress} from "@material-ui/core";
import {axiosInstance, BACKEND_API} from "../../../axios/AxiosInstance";
import {MaterialTableIcons} from "../../../layouts/MaterialTableIcons";
import moment from 'moment';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import {useSnackbar} from "notistack";
import {EditPeopleDialog} from "./components/EditPeopleDialog";
import PeopleHeader from "./components/PeopleHeader";
import Sidebar from "../../../components/Sidebar/Sidebar";
import AdminNavbar from "../../../components/Navbars/AdminNavbar";
import FooterAdmin from "../../../components/Footers/FooterAdmin";

export const People = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [tableData, setTableData] = useState([]);
    const [isTableDataLoading, setIsTableDataLoading] = useState(false);

    const initialState = {
        regId: "",
        firstName: "",
        lastName: "",
        nic: "",
        dob: "",
        address: "",
        phone: "",
        homeNo: "",
        status: "",
        incomeStatus: ""
    }

    const [updateDetails, setUpdateDetails] = useState(initialState)
    const [isUpdateViewOpen, setIsUpdateViewOpen] = useState(false);
    const [updateIsLoading, setUpdateIsLoading] = useState(false)

    const [deleteIsLoading, setDeleteIsLoading] = useState(false)

    useEffect(() => {

        const fetchTableData = async () => {
            setIsTableDataLoading(true);
            await axiosInstance({
                method: "GET",
                url: BACKEND_API.GET_PEOPLE
            }).then(res => {
                setTableData(res.data)
            }).finally(() => {
                setIsTableDataLoading(false);
            })
        }

        fetchTableData();
    }, [])

    const handleDelete = async (regId) => {
        setDeleteIsLoading(true);
        await axiosInstance({
            method: "DELETE",
            url: BACKEND_API.GET_PEOPLE,
            data: {regId}
        }).then(() => {
            enqueueSnackbar("Deleted Person", {
                variant: 'success'
            });
            setTableData(tableData.filter((item) => item.RegID !== regId));
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
            setDeleteIsLoading(false);
        })
    }

    const handleUpdateChange = (event) => {
        setUpdateDetails({
            ...updateDetails,
            [event.target.name]: event.target.value
        })
    }

    const handleOpenUpdateDialog = () => {
        setIsUpdateViewOpen(true);
    }

    const handleCloseUpdateDialog = () => {
        setIsUpdateViewOpen(false);
    }

    const handleUpdate = async () => {
        if (
            updateDetails.regId === "" ||
            updateDetails.firstName === "" ||
            updateDetails.lastName === "" ||
            updateDetails.dob === "" ||
            updateDetails.address === "" ||
            updateDetails.phone === "" ||
            updateDetails.homeNo === "" ||
            updateDetails.incomeStatus === "" ||
            updateDetails.status === ""
        ) {
            enqueueSnackbar("Please fill in all fields", {
                variant: 'warning'
            });
            return;
        }

        setUpdateIsLoading(true)
        await axiosInstance({
            method: "PUT",
            url: BACKEND_API.ADD_PEOPLE,
            data: updateDetails
        }).then(() => {
            enqueueSnackbar("Updated Person", {
                variant: 'success'
            });
            setTableData([...tableData.filter((item) => item.RegID !== updateDetails.regId),
                {
                    RegID: updateDetails.regId,
                    fname: updateDetails.firstName,
                    lname: updateDetails.lastName,
                    NIC: updateDetails.nic,
                    DOB: updateDetails.dob,
                    address: updateDetails.address,
                    phone: updateDetails.phone,
                    home_no: updateDetails.homeNo,
                    status: updateDetails.status,
                    income_status: updateDetails.incomeStatus
                }]);
            // setTableData([
            //     ...tableData,
            //     {
            //         RegID: updateDetails.regId,
            //         fname: updateDetails.firstName,
            //         lname: updateDetails.lastName,
            //         NIC: updateDetails.nic,
            //         DOB: updateDetails.dob,
            //         address: updateDetails.address,
            //         phone: updateDetails.phone,
            //         home_no: updateDetails.homeNo,
            //         status: updateDetails.status,
            //         income_status: updateDetails.incomeStatus
            //     }
            // ])
            setUpdateDetails(initialState);
            setIsUpdateViewOpen(false);
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
            setUpdateIsLoading(false);
        })
    }

    return(
        <>
            <main>
                <Sidebar />
                <div className="relative md:ml-64 bg-blueGray-100">
                    <AdminNavbar />
                    {/* Header */}
                    <PeopleHeader />
                    <section className="pb-18 relative block bg-white">
                        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                            <br /> <br /> <br />
                            <section className="relative block py-18 lg:pt-0 ">
                                <div className="container mx-auto px-4">
                                    <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                                        <div className="w-full lg:w-11/12 px-4">
                                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                                <div className="rounded-t mb-0 px-4 py-3 border-0">
                                                    <div className="flex flex-wrap items-center">
                                                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                                            <h3 className="font-semibold text-base text-blueGray-700">
                                                                Peoples Table
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="block w-full overflow-x-auto">
                                                    {/* Projects table */}
                                                    <MaterialTable
                                                        icons={MaterialTableIcons}
                                                        title=""
                                                        columns={[
                                                            {
                                                                title: 'Reg ID',
                                                                field: 'RegID',
                                                                grouping: false,
                                                            },
                                                            {
                                                                title: 'First Name',
                                                                field: 'fname',
                                                                grouping: false,
                                                            },
                                                            {
                                                                title: 'Last Name',
                                                                field: 'lname',
                                                                grouping: false,
                                                            },
                                                            {
                                                                title: 'NIC No.',
                                                                field: 'NIC',
                                                                grouping: false,
                                                            },
                                                            {
                                                                title: 'Date of Birth',
                                                                field: 'DOB',
                                                                grouping: false,
                                                                render: (rowData) => moment(new Date(rowData.DOB)).format('YYYY-MM-DD')
                                                            },
                                                            {
                                                                title: 'Address',
                                                                field: 'address',
                                                                grouping: false,
                                                            },
                                                            {
                                                                title: 'Home Number',
                                                                field: 'home_no',
                                                                grouping: false,
                                                            },
                                                            {
                                                                title: 'Mobile Number',
                                                                field: 'phone',
                                                                grouping: false,
                                                            },
                                                            {
                                                                title: 'Status',
                                                                field: 'status',
                                                                grouping: false,
                                                            },
                                                            {
                                                                title: 'Income Status',
                                                                field: 'income_status',
                                                                grouping: false,
                                                            },
                                                        ]}
                                                        actions={[
                                                            () => ({
                                                                icon: () =>
                                                                    deleteIsLoading ? (
                                                                        <CircularProgress size={17.5} />
                                                                    ) : (
                                                                        <EditIcon />
                                                                    ),
                                                                tooltip: 'Update',
                                                                onClick: (_, rowData) => {
                                                                    setUpdateDetails({
                                                                        ...updateDetails,
                                                                        regId: rowData.RegID,
                                                                        firstName: rowData.fname,
                                                                        lastName: rowData.lname,
                                                                        nic: rowData.NIC,
                                                                        dob: rowData.DOB,
                                                                        address: rowData.address,
                                                                        phone: rowData.phone,
                                                                        homeNo: rowData.home_no,
                                                                        status: rowData.status,
                                                                        incomeStatus: rowData.income_status
                                                                    })
                                                                    handleOpenUpdateDialog()
                                                                }
                                                            }),
                                                            () => ({
                                                                icon: () =>
                                                                    deleteIsLoading ? (
                                                                        <CircularProgress size={17.5} />
                                                                    ) : (
                                                                        <DeleteForeverIcon />
                                                                    ),
                                                                tooltip: 'Delete Person',
                                                                onClick: (_, rowData) => handleDelete(rowData.RegID)
                                                            }),
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
                                                            pageSize: 5,
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
            </main>
            <EditPeopleDialog
                updateViewOpen={isUpdateViewOpen}
                handleChange={handleUpdateChange}
                handleCloseDialog={handleCloseUpdateDialog}
                updateIsLoading={updateIsLoading}
                handleUpdate={handleUpdate}
                updateDetails={updateDetails}
            />
        </>
    )
}
