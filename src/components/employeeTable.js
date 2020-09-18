import React, { useEffect, useState } from "react";
// import "./style.css";
import EmployeeData from "../employeeData.json";
import EmployeeRow from "./employeeRow";

function EmployeeTable(props) {

    const renderEmployees = () => {
        let employeeArray = EmployeeData;
        if (props.filter != "") {
            employeeArray = props.filter;
        };

        return (
            employeeArray.map(employee => (
                <EmployeeRow
                    key={employee.email}
                    photo={employee.photo}
                    name={employee.name}
                    location={employee.location}
                    role={employee.role}
                    email={employee.email}
                    phoneNumber={employee.phoneNumber}
                />
            ))
        );
    }

    return (
        <table className="employeeTable">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {renderEmployees()}
            </tbody>
        </table>
    );
}

export default EmployeeTable;
