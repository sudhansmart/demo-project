const mongoose = require('mongoose')

// Define a schema for your data
const formDataSchema = new mongoose.Schema({
    category: String,
    dateOfReceiving: String,
    receivedFrom: String,
    designation: String,
    department: String,
    internalOrExternal: String,
    priority: String,
    referenceNumber: String,
    reminderDate: String,
    sendTo: String,
    mode: String,
    dateOfSending: String,
    subject: String,
    summary: String,
    specialInstructions: String,
  });
  const FormData = mongoose.model('FormData', formDataSchema);

  module.exports = FormData 