import { Button } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";

const DataBd = () => {

    const [DataBase, setDataBase] = useState([])
    axios.get('http://localhost:3000/getdata').then((response) => {
        setDataBase(response.data)
    })


    return (
        <table className="table table-hover table-responsive align-middle container mt-5">
            <thead className="table-light text-center">
                <tr>
                    <th scope="col">UserId</th>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>
                {DataBase.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{value.userId}</td>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.body}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default DataBd;