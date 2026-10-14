import { useState } from "react"

function Contact(){
    let [name,setName]=useState("")
    let [age,setage]=useState(18)
    let [emailid,setemailid]=useState("")
    let [colname,setcolname]=useState("VFSTR")
    let RegisterForm=(event)=>{
        event.preventDefault()
        console.log(name,age,emailid,colname)
    }

    return(
        <div>
            <h1>Contact Page Called</h1>
        <form onSubmit={RegisterForm}>
            
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your Name"></input>
            <br />
            <br/>
            <input type="number" value={age} onChange={(event)=>setage(event.target.value)} placeholder="Enter your age"></input>
            <br />
            <br/>
            <input type="Email" value={emailid} onChange={(event)=>setemailid(event.target.value)} placeholder="Enter your email"></input>
            <br />
            <br/>
            <input type="text" value={colname} onChange={(event)=>setcolname(event.target.value)} placeholder="Enter your college name"></input>
            <br />
            <br/>
            <button type="submit">Register</button>
        </form>
        <p>{name}</p>
        <p>{age}</p>
        <p>{emailid}</p>
        <p>{colname}</p>
        </div>
        
    )
}
export default Contact