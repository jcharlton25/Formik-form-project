import React from "react";
import {useFormik} from 'formik';
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({    
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: values =>{
      alert('Login Successful');
    },
    validate: values => {
      let errors = {};
      if(!values.password) errors.password = 'Field required';
      if (!values.email) {
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }
      return errors;
    }
});

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name="email" id='emailField' type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id='emailError' style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input name="password" id='pswField' type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id='pswError' style={{color:'red'}}>{formik.errors.password}</div>: null}
        <button id='submitBtn' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
