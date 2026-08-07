import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/wdev-jahidhasan' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/wdev-jahidhasan' },
  // { name: 'Twitter / X', href: 'https://twitter.com/yourusername' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:items-start text-center md:text-left">
          
          {/* Branding and Description (Multi-color gradient added) */}
          <div>
            <Link href="#hero" className="text-2xl font-bold tracking-tight inline-block hover:opacity-80 transition">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-orange-400">
                Jahid
              </span>
              <span className="text-orange-400">.</span>
            </Link>
            <p className="mt-3 text-sm text-slate-400 max-w-sm">
              A passionate MERN Stack Developer creating clean, interactive, and user-friendly web applications.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h3 className="text-white text-base font-semibold mb-3">Quick Links</h3>
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-white text-base font-semibold mb-3">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-5 text-sm">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {currentYear} Md. Jahid Hasan. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}