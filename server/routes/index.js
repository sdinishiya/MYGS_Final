const { Router } = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const peopleRoute = require('./people.route');
const complaintRoute = require('./complaint.route');
const notificationRoute = require('./notification.route')

const router = Router();

const allRoutes = [
    {
        path: "/auth",
        route: authRoute
    },
    {
        path: "/user",
        route: userRoute
    },
    {
        path: "/people",
        route: peopleRoute
    },
    {
        path: "/complaint",
        route: complaintRoute
    },
    {
        path: "/notification",
        route: notificationRoute
    }
]

allRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
