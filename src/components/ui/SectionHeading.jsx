import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  titleClassName = "",
  eyebrowClassName = "",
  descriptionClassName = "",
}) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col space-y-3",
        isCentered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-widest text-[#B58A4A]",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className={cn(
            "text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#17191C] text-balance",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            "text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl text-pretty",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
