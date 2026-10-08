import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 tracking-wide uppercase",
    md: "text-sm px-5 py-2.5 tracking-wide",
    lg: "text-base px-6 py-3 tracking-wide",
  };

  const variantStyles = {
    primary:
      "bg-[#17191C] text-white hover:bg-[#252A32] active:bg-[#111315] shadow-xs focus-visible:outline-[#17191C]",
    bronze:
      "bg-[#B58A4A] text-white hover:bg-[#9E7438] active:bg-[#8C652D] shadow-xs focus-visible:outline-[#B58A4A]",
    outline:
      "bg-transparent text-[#17191C] border border-[#E7E5E0] hover:border-[#17191C] hover:bg-white/60 focus-visible:outline-[#17191C]",
    outlineBronze:
      "bg-transparent text-[#B58A4A] border border-[#B58A4A] hover:bg-[#B58A4A] hover:text-white focus-visible:outline-[#B58A4A]",
    ghost:
      "bg-transparent text-[#17191C] hover:bg-black/5 focus-visible:outline-[#17191C]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size] || sizeStyles.md,
    variantStyles[variant] || variantStyles.primary,
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
