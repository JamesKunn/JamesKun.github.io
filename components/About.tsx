export default function About() {
  return (
    <section
      id="about"
      className="bg-surface-container-lowest/50 py-section-gap border-y border-outline-variant/10"
    >
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Workflow line decoration */}
          <div className="md:col-span-1 hidden md:flex justify-center">
            <div className="workflow-line h-64 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary logic-node" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary logic-node" />
            </div>
          </div>

          <div className="md:col-span-11 space-y-6">
            <h2 className="font-display-xl text-headline-lg">About Me</h2>

            <div className="space-y-5 font-body-md text-on-surface leading-relaxed max-w-3xl">
              <p>
                I&apos;m an Information Technology graduate focused on{" "}
                <strong className="text-on-surface font-semibold">
                  AI automation, workflow engineering, and web-based systems
                </strong>
                .
              </p>
              <p className="text-text-dim">
                I specialize in designing workflows that connect AI models, APIs,
                databases, and business applications to automate repetitive
                processes and improve operational efficiency.
              </p>
              <p className="text-text-dim">
                I&apos;ve worked with tools such as{" "}
                <strong className="text-on-surface font-medium">
                  n8n, Make, Zapier, OpenAI APIs, Next.js, FastAPI, Laravel,
                  PHP, and MySQL
                </strong>
                , building automation pipelines for content generation, lead
                qualification, document processing, QA, order management, and
                business operations.
              </p>
              <p className="text-text-dim">
                My approach is simple: understand the process, identify what can
                be automated, design the workflow, build it, test it, and make
                it reliable.
              </p>
              <p className="text-text-dim">
                I&apos;m continuously exploring new ways to combine{" "}
                <strong className="text-on-surface font-medium">
                  AI + automation + software engineering
                </strong>{" "}
                to solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
