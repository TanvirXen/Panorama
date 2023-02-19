import React,{useState} from 'react'

export default function ApiTest() {
    const [email, setemail] = useState("ywqvribyqfra@eurokool.com")
    async function signup(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");  
        var raw = JSON.stringify({
          "jsonrpc": "2.0",
          "params": {
            "email": email,
            "login": email,
            "password": "Tanvir2020@",
            "name": "Tanvir Ishtiaq"
          }
        });
        
        var requestOptions = {
          method: 'POST',

          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://66.228.54.131:8069/signup", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }
    async function authenticate(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "jsonrpc": "2.0",
          "params": {
            "db": "Panorama06022023",
            "login": email,
            "password": "Tanvir2020@"
          }
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://66.228.54.131:8069/web/session/authenticate", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }
    async function logout(){

    }
    async function CreateProfile(){

    }
    async function GetProfile(){

    }
    async function UpdateProfile(){

    }
    async function onboarding_question(){

    }
    async function statusCheck(){

    }
    async function GetPlan(){

    }
    async function currency(){

    }
    async function AssesmentList(){

    }
    async function MailSend(){

    }
    async function getInvoice(){

    }
    async function getPurpose(){

    }
  return (
    <div>
        <button onClick={()=>signup()}>Signup</button>
        <button onClick={()=>authenticate()}>Authenticate</button>
        <button onClick={()=>logout()}>Logout</button>
        <button onClick={()=>CreateProfile()}>CreateProfile</button>
        <button onClick={()=>GetProfile()}>GetProfile</button>
        <button onClick={()=>UpdateProfile()}>UpdateProfile</button>
        <button onClick={()=>onboarding_question()}>Onboarding Question</button>
        <button onClick={()=>statusCheck()}>Status Check</button>
        <button onClick={()=>GetPlan()}>Get Plan</button>
        <button onClick={()=>currency()}>Currency</button>
        <button onClick={()=>AssesmentList()}>Assesment List</button>
        <button onClick={()=>MailSend()}>Mail Send</button>
        <button onClick={()=>getInvoice()}>Get Invoice</button>
        <button onClick={()=>getPurpose()}>Purpose</button>
        <button>Authenticate</button>
    </div>
  )
}
