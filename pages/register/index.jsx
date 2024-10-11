import Form from "../../components/form";
import {useState} from "react";
import {register} from "../../services/auth";
import {useNavigate} from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        mobile: "",
        checkBox: false

    });   
    const [error, setError] = useState({
        name: false,
        email: false,
        password: false,  
        confirmPassword: false,
        mobile:false,
        checkBox: false

       
    });
    const formFields = [
        {
        name: "name",
        type: "text",
        placeholder: "Enter your name",
        value : formData.name,
        onChange : (e) => {
            setFormData({...formData, name: e.target.value})
        }
    },
        {
            name: "email",
            type: "email",
            placeholder: "Enter your email",
            value : formData.email,
            onChange : (e) => {
                setFormData({...formData, email: e.target.value})
            }
        },
        {
            name: "password",
            type: "password",
            placeholder: "Enter your password",
            value : formData.password,
            onChange : (e) => {
                setFormData({...formData, password: e.target.value})
            }
        },
        {
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm your password", 
            value : formData.confirmPassword,
            onChange : (e) => {
                setFormData({...formData, confirmPassword: e.target.value})
            }

        }, {
            name: "mobile",
            type: "text",
            placeholder: "Enter your mobile number",
            value: formData.mobile,
            onChange: (e) => {
                setFormData({ ...formData, mobile: e.target.value })
            }
        }, {
            name: "checkBox",
            type: "checkbox",
            label: "Agree to terms and conditions",
            value: formData.checkBox,
            onChange: (e) => {
                setFormData({ ...formData, checkBox: e.target.checked })
            }
        }
    ]

    const onSubmit = async (e) => {
        let isError = false;
        e.preventDefault();
        Object.keys(errorMessage).forEach(key => {
            if (!errorMessage[key].isValid) {
                isError = true;
                errorMessage[key].onError();
            }
        })
        console.log(formData);
        if (!isError) {
            const res = await register(formData);
            if(res.status == 201){
                alert("Registered successfully");
                navigate("/login");
            }
            else{
                alert("Something went wrong");
            }

        }
    }
    console.log(error)
    const errorMessage ={
        name: {
            message: "Name is required",
            isValid: formData.name.length > 0,
            onError: () => {
                setError((error) => ({ ...error, name: true }))
            }
        },
        email: {
            message: "Email is required",
            isValid: formData.email.length > 0,
            onError: () => {
                setError((error) => ({ ...error, email: true }))
            }
        },
        password: {
            message: "Password is required",
            isValid: formData.password.length > 0,
            onError: () => {
                setError((error) => ({ ...error, password: true }))
            }
        },
        confirmPassword: {
            message: "Passwords do not match",
            isValid: formData.confirmPassword === formData.password,
            onError: () => {
                setError((error) => ({ ...error, confirmPassword: true }))
            }
        },
        checkBox: {
            message: "You must agree to terms and conditions",
            isValid: formData.checkBox,
            onError: () => {
                setError((error) => ({ ...error, checkBox: true }))
            }
        },
        mobile: {
            message: "Mobile number is required",
            isValid: formData.mobile.length > 0,
            onError: () => {
                setError((error) => ({ ...error, mobile: true }))
            }
        }
    }
    return (
        <><p>Register</p><Form error={error} errorMessage={errorMessage} formFields={formFields} onSubmit={onSubmit}  /></>

    )
}