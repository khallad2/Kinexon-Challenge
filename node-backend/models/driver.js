import mongoose from "mongoose";

const driverSchema = mongoose.Schema({
    id: String,
    carMake: String,
    driverCityOrigin: String,
    driverGender: String,
    driverInfo: String,
    driverLanguage: String,
    driverName: String,
    driverPhone: String,
    kmDriven: Number,
    location: [String, String]

});

const DriverObject = mongoose.model('DriverObject', driverSchema);

export default DriverObject;
