import { cn } from "@/lib/utils";

export default function Badge({
  children,
  variant = "default",
  className = "",
}) {
  const variantStyles = {
    default: "bg-[#FAFAF8] text-[#17191C] border border-[#E7E5E0]",
    bronze: "bg-[#FAF7F2] text-[#8C652D] border border-[#E8DFD0]",
    dark: "bg-[#17191C] text-white border border-[#2B3342]",
    subtle: "bg-black/[0.04] text-[#64748B] border border-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-[11px] font-medium tracking-wider uppercase",
        variantStyles[variant] || variantStyles.default,
        className
      )}
    >
      {children}
    </span>
  );
}
