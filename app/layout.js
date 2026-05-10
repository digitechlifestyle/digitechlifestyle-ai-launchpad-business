import './globals.css';

export const metadata = {
  title: 'DigitechLifestyle | Digital Living, Wealth, AI & Automation',
  description:
    'DigitechLifestyle helps readers use AI tools, automation, digital wealth platforms, smart lifestyle technology and online business systems to build a better digital future.',
  keywords: [
    'AI tools',
    'automation',
    'digital wealth',
    'affiliate marketing',
    'smart lifestyle',
    'online business',
    'crypto education',
    'AI agents',
  ],
  openGraph: {
    title: 'DigitechLifestyle',
    description: 'The Future of Digital Living, Wealth, AI & Automation.',
    type: 'website',
    url: 'https://digitechlifestyle.com',
  },
};

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog/', label: 'Blog' },
  { href: '/tools/', label: 'Tools' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="siteHeader">
          <a href="/" className="logo">DigitechLifestyle</a>
          <nav className="mainNav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
        </header>

        {children}

        <footer className="siteFooter">
          <p>© 2026 DigitechLifestyle</p>
        </footer>
      </body>
    </html>
  );
}
