import React, {useEffect, useState} from 'react';
import {getUserData} from '../utils/utils'

function UserData ({hp}) {
    const [user, setUser] = useState(()=> {
        return []
    })
    
    // useEffect(() => {
    //     getUserData().then(data => setUser(data[Math.floor(Math.random() * data.length)]));
    // }, []);
    
    // const { avatar_url, login} = user
    const avatar_url ="https://cdn140.picsart.com/290512548038201.jpg?type=webp&to=min&r=640"
    const login = "Jimbo"

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