import clsx from "clsx";
import React from "react";

const TextArea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({className, ...props},ref)=>(
    <textarea
    
        ref={ref}
        className={clsx("bg-input px-3 py-2 border-input rounded-md",className)}
        {...props}
    />
))

export {
    TextArea
}