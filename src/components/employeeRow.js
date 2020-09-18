import React, { useState } from "react";
// import "./style.css";

function EmployeeRow(props) {
    return (
        <tr>
            <td><img src={props.photo} alt="employee photo"/></td>
            <td>{props.name}</td>
            <td>{props.location}</td>
            <td>{props.role}</td>
            <td>{props.email}</td>
            <td>{props.phoneNumber}</td>
        </tr>
    );
}

export default EmployeeRow;
