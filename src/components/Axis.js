import React, {useEffect, useState} from 'react';
import {getUserData} from '../utils/utils'

function UserData () {
    const [user, setUser] = useState(()=> {
        return []
    })
    
    React.useEffect(() => {
        getUserData().then(data => setUser(data[Math.floor(Math.random() * data.length)]));
    }, []);
    console.log(user)
    const { avatar_url, login } = user
    return (
        <div> 
            <ul>
                <li>{login}</li>
                <img src={avatar_url} />
            </ul>
        </div>
    )

}

export default UserData