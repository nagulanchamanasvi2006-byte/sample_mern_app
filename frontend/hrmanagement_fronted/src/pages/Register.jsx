import {useState} from 'react';
function Register() 
{
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [role, setRole] = useState('');
    let handleRegister = async(e) => {
        e.preventDefault();
        let req = await fetch('http://localhost:3000/api/emp/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password, role})
        });
        let data = await req.json();
        if(req){
            console.log("Data inserted success");
            console.log(data);
        }else{
            console.log("Data inserted failed");
            console.log(data);
        }
    };

    return (<div>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"></input><br></br>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"></input><br></br>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"></input><br></br>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Choose role</option>
                <option value="HR">HR</option>
                <option value="EMPLOYEE">Employee</option>
            </select><br/>
            <button type="submit">Register</button>
        </form>
    </div>)
}
export default Register
