import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
    const { control, name, placeholder = "", children, ...rest } = props;
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });
    return (
        <textarea
            className="w-full py-4 px-6 border rounded-xl text-sm font-medium  placeholder:text-text4 bg-transparent dark:placeholder:text-text2 dark:text-white resize-none min-h-[140px] outline-none"
            placeholder={placeholder}
            {...field}
            {...rest}
        ></textarea>
    );
};

export default Textarea;
