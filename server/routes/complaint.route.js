const { complaintController } = require("../controllers");
const { Router } = require('express');

const router = Router();

router
    .route('/')
    .get(complaintController.getAllComplaints)
    .post(complaintController.addComplaint)
    .put(complaintController.addFeedback)

router
    .route('/:userId')
    .get(complaintController.getComplaintsByUser)

module.exports = router;
