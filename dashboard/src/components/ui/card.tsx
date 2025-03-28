import * as React from "react"
import clsx from "clsx";
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>> (({className, ...props},ref)=>(
    <div 
    ref={ref}
    className={clsx("rounded-lg border bg-card text-card-foreground shadow-sm",className)}
    {...props}
    />
));
Card.displayName = 'Card';
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=>(
    <div
    ref={ref}
    className={clsx("flex flex-col p-6",className)}
    {...props}
    />
));
CardHeader.displayName = 'CardHeader';
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({className, ...props},ref)=>(
    <h3
    ref={ref} 
    className={clsx("text-2xl font-semibold leading-none tracking-tight",className)}
    {...props}
    />
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({className, ...props},ref)=>( <p
    ref={ref}
    className={clsx("text-sm",className)}
    {...props}
    />))
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=>(
    <div
    ref={ref}
    className={clsx("p-6 pt-0",className)}
    {...props}
    />
));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className, ...props},ref)=>(
    <div
    ref={ref}
    className={clsx("p-6 pt-0",className)}
    {...props}
    />
));
export {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
}