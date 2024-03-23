import { useFormik } from "formik"
import "./login.css"

const Login = (prop) =>{

    const formik = useFormik({
        initialValues : {
            email : '',
            password : ''
        },
        onSubmit: values => {
            prop.onSubmit(values);
        },
        validate : values => {
            const errors = {};
            if(!values.email){
                errors.email = 'Required';
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if(!values.password){
                errors.password = 'Required';
            }else if(values?.password?.length < 4){
                errors.password = 'length Must be 4 characters or above'
            }
            return errors;
        }
    })
    return (
        <form className = "form-container" onSubmit={formik.handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
            {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"  onChange={formik.handleChange} value={formik.values.password}/>
            {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}

            <button type="submit">Submit</button>
        </form>
    )
}

export default Login;