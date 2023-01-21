import React, { useState, useEffect } from "react";

function GenerateData() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://randomuser.me/api/?results=10")
        .then((res) => res.json())
        .then((data) => {
            setUsers(data.results);
            setLoading(false);
        });
    }, []);

    return (
        <div>
        <h1>Random User Generator</h1>
        <button onClick={() => window.location.reload()}>Generate New Users</button>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <table>
            <thead>
                <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                <tr key={user.login.uuid}>
                    <td>
                    <img src={user.picture.thumbnail} alt="" />
                    </td>
                    <td>
                    {user.name.title} {user.name.first} {user.name.last}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                    {user.location.city}, {user.location.country}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        )}
        </div>
    );
}

export default function App() {
    return (
        <div>
        <GenerateData />
        </div>
    );
}



