import React from 'react';
import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'

import './App.css'
import LoginForm from './components/LoginForm';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine 
            height="100vh"
            projectID="318278f9-5422-4b50-bb8b-7b702464cba2"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;