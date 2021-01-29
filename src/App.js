import React from 'react';
import {ChatEngine} from 'react-chat-engine';

import './App.css'

const App = () => {
    return(
        <ChatEngine 
            height="100vh"
            projectID={process.env.REACT_APP_PROJECTID}
            userName={process.env.REACT_APP_USERNAME}
            userSecret={process.env.REACT_APP_USERSECRET}
        />
    )
}

export default App;