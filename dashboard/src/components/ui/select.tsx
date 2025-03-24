import clsx from "clsx";
import React, { OptionHTMLAttributes } from "react";
import { SelectHTMLAttributes } from "react";

const Select = React.forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(({className,...props},ref)=>(
    <select
    ref={ref}
    className={clsx("border-input px-3 py-2 bg-input rounded-md",className)}
    {...props}
    />
))
const Option = React.forwardRef<HTMLOptionElement, OptionHTMLAttributes<HTMLOptionElement>>(({className,...props},ref)=>(
    <option
    {...props}
    ref={ref}
    className={clsx("bg-background border ", className)}
    />
))
export {
    Select,
    Option
}