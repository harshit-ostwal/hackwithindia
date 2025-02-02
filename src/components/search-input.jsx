import * as React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const SearchInput = React.forwardRef(({ className, type = "text", ...props }, ref) => {
    return (
        <div className="relative max-w-[800px] w-full">
            <Search className="w-5 h-5 absolute text-neutral-400 left-4 top-1/2 -translate-y-1/2" />
            <input
                type={type}
                className={cn("flex h-14 w-full py-3 rounded-md border border-input bg-transparent pl-12 text-lg placeholder:text-neutral-500 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)}
                ref={ref}
                {...props}
            />
        </div>
    );
});

SearchInput.displayName = "SearchInput";

export { SearchInput };