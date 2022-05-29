import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { tableModel } from "../../model";

const columns = [
    { field: 'id', headerName: 'ID', width: 110 },
    { field: 'name', headerName: 'Name', width: 120 },
    { field: 'email', headerName: 'Email', width: 150 },
    {
        field: 'createdOn',
        headerName: 'Created on',
        type: 'number',
        width: 160,
    },
    {
        field: 'action',
        headerName: 'Action',
        sortable: false,
        width: 80,
    },
];

export default function DataTable() {
    const [rows, setRows] = useState([]);
    const [error, setError] = useState(null);
    const [selected, selectUser] = useState(null);

    const getUsers = async () => {
        const { data, error } = await tableModel.getUsers();
        if (error) return setError(error);
        setRows(createRowsForTable(data));
    };

    useEffect(() => {
        getUsers();
    }, []);

    const createRowsForTable = (users) => {
        let data = [];
        for (const user of users) {
            data.push({
                id: user.id,
                name: user.name,
                email: user.email,
                createdOn: user.createdAt,
            })
        }
        return data;
    }
    console.log(selected)

    return (
        <>
            {!selected ?
                <div style={{ height: 450, width: '100%', padding: "3%" }}>
                    {!error ? <DataGrid
                        rows={rows}
                        onRowClick={(i) => {
                            selectUser(i.row);
                        }}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    /> : ""}
                </div> :
                <><div style={{ height: 450, width: '100%', padding: "18%", textAlign: "center" }}>
                    <h1>USER DETAILS</h1>
                    <h4>Id</h4><ins>{selected.id}</ins>
                    <h4>Name</h4><ins>{selected.name}</ins>
                    <h4>Email</h4><ins>{selected.email}</ins>
                    <h4>Created On</h4><ins>{selected.createdOn}</ins>
                    <div style={{ marginLeft: "90%", width: "10vw", color: "green", cursor: "pointer" }} onClick={() => selectUser(null)}>Go Back</div>
                </div>
                </>
            }
        </>

    );
}
