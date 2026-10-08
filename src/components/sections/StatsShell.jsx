import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export default function StatsShell() {
  return (
    <section className="py-14 sm:py-16 border-y border-[#E7E5E0] bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#E7E5E0]">
          {siteConfig.metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`flex flex-col space-y-2 ${
                idx > 0 ? "pt-6 md:pt-0 md:pl-10" : ""
              }`}
            >
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17191C]">
                  {metric.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B58A4A]">
                  Verified
                </span>
              </div>
              <h3 className="text-base font-semibold text-[#17191C]">
                {metric.label}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
