import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("");

    const handleLogin = (e) => {
        e.preventDefault(); //agar tidak merefresh
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };
        login(data, (status, res) => {
            if (status) {
                localStorage.setItem("token", res);
                window.location.href = '/products';
            } else {
                setLoginFailed(res.response.data);
            }
        });
    };

    const usernameRef = useRef(null);
    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    return (
        <form onSubmit={handleLogin}>
            <InputForm 
                title="Username" 
                name="username" 
                type="text"
                placeholder="Jhon Doe"
                ref={usernameRef}
            />
            <InputForm 
                title="Password"
                name="password" 
                type="password"
                placeholder="******"
            />
            <Button variant="bg-blue-600 w-full" type="submit">Login</Button>
            {loginFailed && <p className="text-red-500 mt-5 text-center">{loginFailed}</p>}
        </form>
    )
}

export default FormLogin;