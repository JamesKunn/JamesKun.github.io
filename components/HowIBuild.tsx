import { automationProcess } from "@/lib/data";

export default function HowIBuild() {
  return (
    <section
      id="process"
      className="py-section-gap bg-surface-container-lowest/50 border-y border-outline-variant/10"
    >
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display-xl text-headline-lg mb-4">
            How I Build Automation Systems
          </h2>
          <p className="font-body-md text-text-dim">
            A structured approach to designing workflows that are reliable,
            testable, and built for real business processes—not just connected
            nodes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationProcess.map(({ step, title, description }) => (
            <div
              key={step}
              className="glass-card rounded-2xl p-8 flex flex-col gap-4"
            >
              <span className="font-mono-label text-primary text-sm tracking-widest">
                {step}
              </span>
              <h3 className="font-display-xl text-xl font-bold">{title}</h3>
              <p className="text-text-dim text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
