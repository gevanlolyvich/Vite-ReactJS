import Label from "./label";
import Input from "./input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
    const { title, type, placeholder, name } = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{title}</Label>
            <Input type={type} name={name} placeholder={placeholder} ref={ref}/>
        </div>
    )
});

export default InputForm;