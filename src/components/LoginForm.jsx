import React, {useState} from 'react';
import axios from 'axios';
import { Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const authObj = { 'Project-ID': process.env.REACT_APP_PROJECTID , 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObj });
            
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            
            window.location.reload();
        } catch (error) {
            setError('Invalid Credentials');
        }
    };
    return (
        <>
            <div className="wrapper">
                <div className='form'>
                    <h1 className="title">Chat Application</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                        <div align="center">
                            <button type="submit" className="button">
                                <span>Start Chatting</span>
                            </button>
                        </div>
                        <h2 className="error">{error}</h2>
                    </form>

                </div>
                
            </div>
            <Snackbar open={open} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert variant="filled" onClose={handleClose} severity="info" >
                    <AlertTitle>Sign up option is still in development. ⚙️ </AlertTitle>
                        <div align="center" >
                            <h3>Use this account for testing:</h3>
                            <p>username: davebanguilan</p>
                            <p>password: davebanguilan</p>
                        </div>
                </Alert>
            </Snackbar>
        </>
    )
}

export default LoginForm
