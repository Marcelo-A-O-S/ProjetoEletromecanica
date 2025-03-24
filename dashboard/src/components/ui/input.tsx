import clsx from "clsx"
import * as React from "react"

const Input = React.forwardRef<HTMLInputElement,  React.InputHTMLAttributes<HTMLInputElement>>(({className,...props}, ref)=>(
    <input
    ref={ref}
    className={clsx("bg-input px-3 py-2 text-sm border-input rounded-md p-2", className)}
    
    {...props}
    />
))
export {
    Input
}