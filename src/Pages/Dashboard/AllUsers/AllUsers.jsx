import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {  FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';


const AllUsers = () => {

    
   
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://bistro-boss-server-blush-phi.vercel.app/users')
        return res.json();
    })

    const handleMakeAdmin = user => {
        fetch(`https://bistro-boss-server-blush-phi.vercel.app/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    

    return (

        <div>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <h3 className='text-3xl font-semibold'>Total Users:  {users.length}</h3>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>  <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' : 
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-lg"><FaUserShield></FaUserShield></button>}</td>
                                {/* <td> <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-lg"><FaTrashAlt></FaTrashAlt></button></td> */}
                            </tr>
                            

                            )
                        }
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;