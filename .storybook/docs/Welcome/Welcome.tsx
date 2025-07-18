import pkg from "../../../package.json";

const links = [{ label: "GitHub repo", href: pkg.homepage }];

export const Welcome = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground p-12">
      <div className="flex flex-col items-start gap-6 max-w-xl">
        <div>
          <h1 className="text-4xl font-light">{pkg.name}</h1>
          <p className="text-3xl font-bold mt-1">v{pkg.version}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1.5 text-blue-600 hover:underline"
            >
              {link.label} <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
