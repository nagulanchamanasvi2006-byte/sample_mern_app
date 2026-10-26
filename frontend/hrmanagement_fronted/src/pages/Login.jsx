import {useState} from 'react';
function Login() 
{
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [message, setMessage] = useState('');
    let [error, setError] = useState(false);
    let handleLogin = async(e) => {
        e.preventDefault();
        setMessage('');
        try {
            let req = await fetch('http://localhost:3000/api/emp/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });
            let data = await req.json();
            setError(!req.ok);
            setMessage(req.ok ? `${data.message}. Welcome, ${data.user.name} (${data.user.role}).` : data.message);
        } catch {
            setError(true);
            setMessage('Unable to connect to the server. Please try again.');
        }
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"></input><br></br>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"></input><br></br>
                <button type="submit">Login</button>
            </form>
            {message && <p role="alert" style={{color: error ? 'red' : 'green'}}>{message}</p>}
        </div>
    )
}
export default Login