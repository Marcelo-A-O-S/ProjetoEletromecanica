import clsx from "clsx";
import React from "react";

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({className,...props},ref)=>(
    <button
    ref={ref}
    className={clsx("rounded-md font-medium text-sm px-4 py-2",className)}
    {...props}
    />
))
export {
    Button
}