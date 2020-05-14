import React, {useEffect} from 'react'

const Head = ({username}) => {
    
    useEffect(()=> {
        localStorage.setItem('name', username)
    }, [username])

    return (
        <div className="welcome-message">
            Welcome {username}
        </div>
    )
}

export default Head;