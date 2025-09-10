import React from "react";

const UsersPage = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user: { id: number; name: string }) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;
