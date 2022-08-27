import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import './App.css';


const formStyle = {
  display: 'flex',
  alignitems: 'center',
  margin: 'auto',
  padding: '10px',
  border: '1px solid #c9c9c9',
  borderRadius: '5px',
  background: '#f5f5f5',
  width: '220px',
  display: 'block'
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px'
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%',
    alignitems: "center"
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '5px solid #efffff',
    borderRadius: '10px',
    background: '#00994C',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block',
};

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    );
});

const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
      <form style={formStyle} onSubmit={handleSubmit}><h3>Log In</h3>
        <Field ref={usernameRef} label="Username:" type="text" />
        <Field ref={passwordRef} label="Password:" type="password" />
        <div>
          <button style={submitStyle} type="submit">Submit</button>
        </div>
      </form>
    );
};


const LoginForm = () => {
    const handleSubmit = data => {
        const json = JSON.stringify(data, null, 4);
        console.clear();
        console.log(json);
    };
    return (
      <>
      <div>
        <Navbar />
      </div>
      <div className="appStyle">
        <Form onSubmit={handleSubmit} />
      </div>
      </>
    );
};

const root = document.querySelector('#root');
ReactDOM.render(<LoginForm />, root );

export default LoginForm;
