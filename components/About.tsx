export default function About() {
  return (
    <section
      id="about"
      className="bg-surface-container-lowest/50 py-section-gap border-y border-outline-variant/10"
    >
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Workflow line decoration */}
          <div className="md:col-span-1 hidden md:flex justify-center">
            <div className="workflow-line h-64 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary logic-node" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary logic-node" />
            </div>
          </div>

          {/* Quote */}
          <div className="md:col-span-11">
            <blockquote className="font-blockquote text-blockquote italic text-on-surface leading-relaxed relative pl-8 border-l-2 border-primary/30">
              &ldquo;Operations break down when teams waste hundreds of hours on repetitive manual tasks. 
              As a Systems Architect, I eliminate these operational bottlenecks by engineering autonomous
              workflows using n8n, Make.com, and OpenAI. &rdquo;
              <br />
              <br />
              &ldquo;Whether replacing manual content pipelines, filtering sales leads, or auto-generating 
              QA test suites, I build scalable backend logic that reduces operational overhead and lets businesses 
              scale without the busywork.&rdquo;
              <footer className="mt-8 not-italic">
                <span className="font-display-xl text-primary font-bold">
                  — James Kun
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
