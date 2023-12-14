// routes/complaintRoutes.js
const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaints');

router.get('/complaints', complaintController.getAllComplaints);
router.get('/complaint/:id', complaintController.getComplaintById);
router.post('/complaint', complaintController.createComplaint);
router.put('/complaint/:id', complaintController.updateComplaint);
router.delete('/complaint/:id', complaintController.deleteComplaintById);

module.exports = router;
