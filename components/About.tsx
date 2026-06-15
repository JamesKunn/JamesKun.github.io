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
              &ldquo;I am an IT Professional and Systems Architect obsessed with
              making systems smarter. I bridge the gap between static interfaces
              and intelligent decision-making by engineering autonomous digital
              workflows using n8n, OpenAI, Zapier, and Make.com.&rdquo;
              <br />
              <br />
              &ldquo;With a strong foundation in PHP/Laravel and modern
              JavaScript frameworks, I build end-to-end solutions—from custom
              Learning Management Systems to AI-driven QA engines—that optimize
              business efficiency, reduce overhead, and scale seamlessly.&rdquo;
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
