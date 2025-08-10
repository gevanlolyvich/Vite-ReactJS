import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm 
                title="Fullname"
                type="text"
                placeholder="Insert your name here..."
                name="fullname"
            />
            <InputForm 
                title="Email" 
                name="email" 
                type="email"
                placeholder="example@gmail.com"
            />
            <InputForm 
                title="Password"
                name="password" 
                type="password"
                placeholder="******"
            />
            <InputForm 
                title="Confirm Password"
                name="confirmPassword" 
                type="password"
                placeholder="******"
            />
            <Button variant="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister;