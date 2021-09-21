import React, {useEffect, useState} from "react";
import {axiosInstance, BACKEND_API} from "../../../../axios/AxiosInstance";
import {useSelector} from "react-redux";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import AdminNavbar from "../../../../components/Navbars/AdminNavbar";
import HeaderStats from "../../../../components/Headers/HeaderStats";
import {
    Avatar,
    Badge,
    Card,
    CardActionArea,
    CardHeader, Grid,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {NAVIGATION_ROUTES} from "../../../../navigation/constant/NavigationRoutes";
import {useHistory} from "react-router";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';


export const NotificationController = () => {
    const [notifications, setNotifications] = useState([]);
    const history = useHistory();
    const [isLoadingData, setIsLoadingData] = useState();
    const user = useSelector((state) => state.authReducer);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoadingData(true)
            await axiosInstance({
                method: 'GET',
                url: BACKEND_API.NOTIFICATIONS,
                params: {userId: user.userID, userType: user.userType}
            }).then(res => {
                setNotifications(res.data)
            }).finally(() => {
                setIsLoadingData(false);
            })
        }

        fetchData();
    }, [])

    const handleReadNotification = async (id) => {
        await axiosInstance({
            method: 'PUT',
            url: BACKEND_API.NOTIFICATIONS,
            data: {status: 1, notificationId: id}
        }).then(res => {
            history.push(NAVIGATION_ROUTES.complaints);
        })
    }


    return(
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Grid container spacing={2}>
                        {notifications.map(item => {
                            return(
                                <Grid item xs={12} md={12}>
                                    <Card>
                                        <CardActionArea
                                            onClick={() => handleReadNotification(item.notificationId)}
                                            disabled={item.status === 1}
                                        >
                                            <CardHeader
                                                avatar={
                                                    <Badge
                                                        variant="dot"
                                                        overlap="circular"
                                                        color="primary"
                                                        anchorOrigin={{
                                                            vertical: "top",
                                                            horizontal: "left",
                                                        }}
                                                        invisible={item.status === 1}
                                                    >
                                                        <Avatar>
                                                            {item.status === 1 ? <NotificationsIcon /> : <NotificationsActiveIcon/>}
                                                        </Avatar>
                                                    </Badge>
                                                }
                                                title={item.title}
                                                subheader={item.description}
                                            />
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                )
                        })}
                    </Grid>
                </div>
            </div>

        </>
    )
}
