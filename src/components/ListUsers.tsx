import React, {FC, useState, useEffect, Dispatch} from "react";
import User from "../types/User";
import {getUsers} from "../services/user.service";
import {IoEyeSharp, IoAddCircle} from 'react-icons/io5';
import {Link} from "react-router-dom";

const  ListUsers: FC = ()=>{
    const [users, setUsers] = useState<User[]>([]);
    const [refresh] = useState(0);

    useEffect( ()=>{
        const getData = async ()=>{
            const users: User[] = await getUsers();
            console.log(users);
                setUsers(users);
        }
        getData();
    },[refresh]);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>NOM</th>
                    <th>EMAIL</th>
                    <th>ACTIONS</th>

                </tr>
                </thead>
                <tbody>
                {users.map((val, key)=>{
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>
                                <Link to ={'/users/' + val._id + '/tasks'}>
                                <button className='iconButton'><IoEyeSharp /> Voir les tâches</button>
                            </Link>


                            <Link to ={'/addtask/' + val._id}>
                                    <button className='iconButton'><IoAddCircle /> Ajouter une tâche</button>
                                </Link>
                            </td>

                        </tr>

                )}
                    )}
                </tbody>


            </table>
        </div>

    )
}
export default ListUsers;