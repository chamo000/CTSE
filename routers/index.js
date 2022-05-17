const routes = require("express").Router();
const EmployeeMainRoute = require("./EmployeeRoutes");
routes.get("/", (req, res) => {
    res.send("This is Employee Management System - CSTE Assignment");
  });

routes.use("/employee", EmployeeMainRoute);

module.exports = routes;
