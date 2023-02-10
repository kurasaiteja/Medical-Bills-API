const express = require('express');
const router = express.Router();
const moment = require("moment");

let medicalBills = [];

router.get('/', (req, res) => {
    if (medicalBills.length === 0) {
        return res.status(204).json({ error: "No medical bills found." });
      }
      return res.json(medicalBills);
});

router.post('/', (req, res) => {
    const { patientName, patientAddress, hospitalName, dateOfService, billAmount } = req.body;
    if (!patientName || !patientAddress || !hospitalName || !dateOfService || !billAmount) {
      return res.status(400).json({ error: "All fields are required." });
    }
  
    if (typeof patientName !== "string" || typeof patientAddress !== "string" || typeof hospitalName !== "string") {
      return res.status(400).json({ error: "Patient name, address and hospital name must be strings." });
    }
    if (!moment(dateOfService, "YYYY-MM-DD", true).isValid()) {
      return res.status(400).json({
        error: "Date of service must be a valid date in the format YYYY-MM-DD."
      });
    }
  
    if (isNaN(billAmount) || billAmount <= 0) {
      return res.status(400).json({ error: "Bill amount must be a positive number." });
    }
    const newBill = {
      patientName,
      patientAddress,
      hospitalName,
      dateOfService,
      billAmount,
    };
  
    medicalBills.push(newBill);
  
    return res.json(newBill);
});

module.exports = router;
