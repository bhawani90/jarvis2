import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { FetchTenantList } from "./Action";
import { connect } from "react-redux";



export default function Tasks() {

    return (
        // props.tenant.loading?<div><h2>Loading...</h2></div>:
        // props.tenant.errmessage?<div><h2>{props.tenant.errmessage}</h2></div>:
        <div>
        
            <div className="card">
                <div className="card-header">
                    <h2>Tasks List</h2>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <td>Task Id</td>
                                <td>Task Status</td>
                                <td>Triggered By</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>79eba340b2c59464c1e9e6154f50903e</td>
                                <td>In-Progress</td>
                                <td>person1</td>
                                <td>
                                    <button type="button" className="btn btn-primary mx-2" data-toggle="modal" data-target="#exampleModal">Link</button>
                                </td>

                            </tr>
                            <tr>
                                <td>b9a90809ee79c92b370644ebe95d7653</td>
                                <td>Completed</td>
                                <td>person2</td>
                                <td>
                                    <button type="button" className="btn btn-primary mx-2" data-toggle="modal" data-target="#exampleModal">Link</button>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
    );
}
