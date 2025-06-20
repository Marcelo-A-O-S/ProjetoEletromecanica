import clsx from "clsx";
import React, { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { HTMLAttributes } from "react";
const BackgroundToggle = React.forwardRef<HTMLDivElement , HTMLAttributes<HTMLDivElement>>(({className,...props})=>(
    <div
    className={clsx("block h-8 w-14 rounded-full bg-primary",className)}
    {...props}
    />
))
const Toggle = React.forwardRef<HTMLDivElement , HTMLAttributes<HTMLDivElement>>(({className,...props})=>(
    <div
    className={clsx("dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary transition ",className)}
    {...props}
    />
))
const LabelToggle = React.forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(({className,...props})=>(
    <label 
    className={clsx("flex cursor-pointer select-none items-center  ",className)}
    {...props}
    />
))
const SwitchToggle = React.forwardRef<HTMLDivElement , HTMLAttributes<HTMLDivElement>>(({className,...props})=>(
    <div
    className={clsx(" relative",className)}
    {...props}
    />
))
const InputToggle = React.forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({className,...props})=>(
    <input  
    className={clsx("sr-only",className)}
    {...props}
    />
))

export {
    LabelToggle,
    SwitchToggle,
    InputToggle,
    BackgroundToggle,
    Toggle
}