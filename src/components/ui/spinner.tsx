import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const spinnerVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      default: "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary",
      geometric: "w-16 h-16 grid grid-cols-2 grid-rows-2 gap-2 animate-spin",
      pulsating: "flex space-x-1",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, variant, size, ...props }, ref) => {
    if (variant === "geometric") {
      return (
        <div
          className={cn(spinnerVariants({ variant, size, className }))}
          ref={ref}
          role="status"
          {...props}
        >
          <span className="w-8 h-8 bg-primary animate-pulse"></span>
          <span className="w-8 h-8 bg-secondary animate-pulse"></span>
          <span className="w-8 h-8 bg-secondary animate-pulse"></span>
          <span className="w-8 h-8 bg-primary animate-pulse"></span>
        </div>
      );
    }
    if (variant === "pulsating") {
      return (
        <div
          className={cn(spinnerVariants({ variant, size, className }))}
          ref={ref}
          role="status"
          {...props}
        >
          <span className="sr-only">Loading...</span>
          <div className="h-2 w-2 bg-primary rounded-full animate-pulse [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 bg-primary rounded-full animate-pulse [animation-delay:-0.1s]"></div>
          <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      );
    }
    return (
      <div
        className={cn(spinnerVariants({ variant, size, className }))}
        ref={ref}
        role="status"
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);
Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };
