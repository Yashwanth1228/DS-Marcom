import { cn } from "@/lib/utils";

export default function Container({ children, className = "", size = "default", ...props }) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1360px]",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size] || sizeClasses.default,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
