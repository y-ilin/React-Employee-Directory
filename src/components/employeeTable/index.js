import React from "react";
import "./style.css";
import EmployeeRow from "../employeeRow";

function EmployeeTable(props) {
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
                {props.employees.map(employee => (
                    <EmployeeRow
                        key={employee.id}
                        photo={employee.photo}
                        name={employee.name}
                        location={employee.location}
                        role={employee.role}
                        email={employee.email}
                        phoneNumber={employee.phoneNumber}
                    />
                ))}
        
            </tbody>
        </table>
    );
}

export default EmployeeTable;
