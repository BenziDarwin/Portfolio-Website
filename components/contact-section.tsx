const contactItems = [
  {
    label: "Email",
    value: "ssalibenjamin0402@gmail.com",
    href: "mailto:ssalibenjamin0402@gmail.com",
  },
  {
    label: "Phone",
    value: "+256 751 562 195",
    href: "tel:+256751562195",
  },
  {
    label: "GitHub",
    value: "github.com/BenziDarwin",
    href: "https://github.com/BenziDarwin",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/benzidarwin",
    href: "https://www.linkedin.com/in/benzidarwin",
  },
  {
    label: "Location",
    value: "Wakiso, Uganda",
  },
  {
    label: "Portfolio",
    value: "ssalibenjamin.vercel.app",
    href: "https://ssalibenjamin.vercel.app",
  },
];

export function ContactSection() {
  return (
    <section id="contact">
      <div className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Available for software engineering roles, freelance delivery, and technical collaboration.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item) => (
            <div key={item.label} className="border border-border p-5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-3 block text-sm leading-6 text-foreground underline-offset-4 hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-3 text-sm leading-6 text-foreground">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
