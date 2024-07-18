import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import * as React from "react";
import ShortcutIcon from "../ShortcutIcon";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasSearchIcon?: boolean;
  hasShortCutIcon?: boolean;
  searchIconSize?: number; 
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, hasSearchIcon, hasShortCutIcon, searchIconSize = 24, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {hasSearchIcon && (
          <span className="absolute left-2" >
            <Search size={searchIconSize}/>
          </span>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-primary px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            hasSearchIcon ? "pl-8" : "",
            hasShortCutIcon ? "pr-9" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {hasShortCutIcon && <ShortcutIcon />}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
