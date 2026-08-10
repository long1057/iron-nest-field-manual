import Link from "next/link";

type SiteShellProps = {
  children: React.ReactNode;
  current?: "home" | "guides" | "missions" | "wiki";
};

export function SiteShell({ children, current = "home" }: SiteShellProps) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="IRON NEST field manual home">
          <span className="brand-mark" aria-hidden="true">
            IN
          </span>
          <span>
            <span className="brand-name">IRON NEST</span>
            <span className="brand-subtitle">field manual</span>
          </span>
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          <Link className={current === "guides" ? "active" : ""} href="/guides">
            Guides
          </Link>
          <Link className={current === "missions" ? "active" : ""} href="/missions">
            Missions
          </Link>
          <Link className={current === "wiki" ? "active" : ""} href="/wiki">
            Source room
          </Link>
        </nav>
        <a
          className="header-link"
          href="https://store.steampowered.com/app/4300500/IRON_NEST_Heavy_Turret_Simulator_Demo/?l=english"
          target="_blank"
          rel="noreferrer"
        >
          Steam Demo <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div>
          <span className="footer-kicker">Source-led, version-aware</span>
          <p>
            A practice site built from the first two assignment passes. Unknown
            mechanics stay marked until a current source confirms them.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/guides">Browse guides</Link>
          <Link href="/wiki">Review sources</Link>
        </div>
      </footer>
    </div>
  );
}

