import clsx from "clsx";
import React from "react";

const Dialog = React.forwardRef<HTMLDialogElement, React.DialogHTMLAttributes<HTMLDialogElement>>(({className,...props},ref)=>(
    <dialog
    ref={ref}
    className={clsx("fixed inset-0 m-auto ", className)}
    {...props}
    />
))

export {
    Dialog
}