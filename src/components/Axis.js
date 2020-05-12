import React, {useEffect, useState} from 'react';
import {getUserData} from '../utils/utils'

function UserData ({hp}) {
    const [user, setUser] = useState(()=> {
        return []
    })
    
    useEffect(() => {
        getUserData().then(data => setUser(data[Math.floor(Math.random() * data.length)]));
    }, []);
    
    const { avatar_url, login} = user
    return (
        <div> 
            <ul>
                <li>{login}</li>
                <li>{hp}</li>
                <img alt="axis" src={avatar_url} />
            </ul>
        </div>
    )

}

export default UserData