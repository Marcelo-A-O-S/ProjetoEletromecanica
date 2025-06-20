import clsx from "clsx"
import React from "react"

const SliderJoystick = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({className,...props})=>(
    <input
        type="range"
        className={clsx("rotate-90",className)}
        step={1}
        {...props}
    />
))
export{
    SliderJoystick
}