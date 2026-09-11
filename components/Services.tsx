import { automationServices } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-section-gap relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter mb-16">
        <h2 className="font-display-xl text-headline-lg mb-4">
          What I Can Automate
        </h2>
        <p className="font-body-md text-text-dim max-w-2xl">
          Here is what I can build for you—not just what I have built. From AI
          workflows to multi-platform integrations, I design systems that reduce
          manual work and keep data in sync.
        </p>
      </div>

      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {automationServices.map(({ icon, title, description }) => (
          <div
            key={title}
            className="glass-card rounded-2xl p-8 flex flex-col gap-4 hover:border-primary/30 transition-all"
          >
            <span className="material-symbols-outlined text-primary text-3xl">
              {icon}
            </span>
            <h3 className="font-display-xl text-lg font-bold">{title}</h3>
            <p className="text-text-dim text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
