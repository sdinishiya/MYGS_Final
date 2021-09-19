const { Router } = require('express');
const authRoute = require('./auth.route')
const userRoute = require('./user.route')
const peopleRoute = require('./people.route')
const complaintRoute = require('./complaint.route')

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
    }
]

allRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
