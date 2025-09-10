import React from "react";

const UserPage = async ({ params }: { params: { userId: string } }) => {
    const { userId } = params;
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await res.json();
    return (
        <div>
            <h1>{data.id}</h1>
            <h1>{data.name}</h1>
            <h1>{data.username}</h1>
            <h1>{data.email}</h1>
            <h1>{data.phone}</h1>
            <h1>{data.website}</h1>
        </div>
    );
};

export default UserPage;
