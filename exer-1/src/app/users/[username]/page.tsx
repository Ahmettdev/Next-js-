import React from 'react'

type Props = {
    params: {
        username: string,
        id: string
    }
};

function User({ params }: Props) {
    return (
        <div className='flex justify-center items-left h-screen flex-col'>
            <h1>you can see it username : <span className='text-4xl text-green-800'> {params.username} </span></h1><br />

            <p>Product ID: <span className='text-4xl text-amber-800'> {Math.floor(Math.random() * 1000)} 
            </span></p>
        </div>

    )
}

export default User


