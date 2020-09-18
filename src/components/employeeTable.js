import React, { useState } from "react";
// import "./style.css";
import employeeData from "../employeeData.json";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function EmployeeTable(props) {
    const renderEmployees = () => {
        return (
            employeeData.map(employee => (
                <tr>
                    <td><img src={employee.photo} alt="employee photo"/></td>
                    <td>{employee.name}</td>
                    <td>{employee.location}</td>
                    <td>{employee.role}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phoneNumber}</td>
                </tr>
            ))
        );
    }

    return (
        <table className="employeeTable">
            <tr>
                <th></th>
                <th>Name</th>
                <th>Location</th>
                <th>Role</th>
                <th>Email</th>
                <th>Phone Number</th>
            </tr>
            {renderEmployees()}
        </table>
    );
}

export default EmployeeTable;
