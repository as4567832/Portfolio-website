import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import { socials } from '../data/socials';
import { profile } from '../data/profile';

const quickLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Education', to: 'education' },
  { name: 'Blog', to: 'blog' },
  { name: 'Contact', to: 'contact' },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  return (
    <footer className="glass border-t border-white/10 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <RouterLink to="/" className="text-2xl font-bold text-gradient">Portfolio.</RouterLink>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              Building the future, one line of code — and one circuit — at a time.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {isHome ? (
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="text-gray-400 hover:text-primary text-sm cursor-pointer transition-colors"
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <button
                      onClick={() => navigate('/', { state: { scrollTarget: link.to } })}
                      className="text-gray-400 hover:text-primary text-sm cursor-pointer transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    <Icon size={22} />
                    <span className="sr-only">{social.name}</span>
                  </a>
                );
              })}
            </div>
            <a href={`mailto:${profile.contact.email}`} className="text-gray-400 hover:text-primary text-sm transition-colors">
              {profile.contact.email}
            </a>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm border-t border-white/5 pt-8">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
