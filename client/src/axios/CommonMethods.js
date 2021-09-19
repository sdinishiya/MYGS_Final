import {axiosInstance, BACKEND_API} from "./AxiosInstance";

export const sendNotification = async (title, description, receiversUserType = null, receiversUserId = null) => {
    await axiosInstance({
        method: 'POST',
        url: BACKEND_API.NOTIFICATIONS,
        data: {
            title: title,
            description: description,
            userId: receiversUserId,
            userType: receiversUserType
        }
    }).then(res => {
        console.log(res);
    })
}
