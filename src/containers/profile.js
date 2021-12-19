import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { dbRef, database, onValue } from '../config/firebase';
const Profile = () => {
    const [data, setData] = useState({})
    var dataKeys = []
    useEffect(() => {
        onValue(dbRef(database, '/users/'), (snapshot) => {
            console.log(snapshot.val())
            setData(snapshot.val())
        }, {
            onlyOnce: true
        });
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <h1 className='text-center font-medium text-gray-900 p-5 sm:text-2xl text-xl'>Requests</h1>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{data.category}</h2>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{data.userName}</h1>
                            <p className="leading-relaxed mb-3">{data.salary}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Profile;