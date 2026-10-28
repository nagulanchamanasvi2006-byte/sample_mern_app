import {useState} from 'react';

import {useNavigate} from 'react-router-dom';

function Login() 
{
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate();
    
    let handleLogin = async(e) => {
        e.preventDefault();
        if(email === 'admin@gmail.com' || password === 'admin'){
            navigate('/adminhome');
        }else{
            //check with my db credentials
            //then decide hrhome or employee home
            let req = await fetch('http://localhost:3000/api/emp/login', 
                {method: 'POST',
                 headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({ email, password })
                });
            let data = await req.json();
            console.log(data);
            if(data.user){
                if(data.user.role === 'HR'){
                    navigate('/adminhome');
                }else{
                    navigate('/emphome');

                }
                
            }else{

            }

        }
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"></input><br></br>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"></input><br></br>
                <button type="submit">Login</button>
            </form>
            
        </div>
    )
}
export default Login