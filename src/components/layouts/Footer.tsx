import { useState } from "react";
import { ChevronDown, Send } from "lucide-react";
import Logo from "@/assets/images/logo.png";
import { NavLink } from "react-router-dom";

// Reusable component for the collapsible sections
const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 md:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 md:py-0 md:cursor-default"
      >
        <h3 className="text-primary font-semibold text-lg md:mb-4">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 text-white transition-transform md:hidden ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <ul
        className={`${isOpen ? "block" : "hidden"} md:block space-y-2 pb-4 md:pb-0`}
      >
        {links.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.href}
              className="text-gray-300 hover:text-white transition-colors text-sm block py-1"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const sections = [
    {
      title: "Trading",
      links: [
        { label: "Markets", href: "/markets" },
        { label: "Swap", href: "/swap" },
        { label: "Spot", href: "/spot" },
        { label: "Margin", href: "/margin" },
        { label: "Futures", href: "/futures" },
        { label: "Tournament", href: "/tournament" },
        { label: "P2P", href: "/p2p" },
        { label: "Buy Crypto", href: "/buy-crypto" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Verify Official Channels", href: "/verify" },
        { label: "Fees", href: "/fees" },
        { label: "Bug Bounty", href: "/bug-bounty" },
        { label: "Corporate Identity", href: "/corporate" },
        { label: "Institutional Services", href: "/institutional" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Staking", href: "/staking" },
        { label: "Crypto Lending", href: "/lending" },
        { label: "Referral Program", href: "/referral" },
        { label: "Token Listing", href: "/token-listing" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "User Agreement", href: "/user-agreement" },
        { label: "AML Policy", href: "/aml-policy" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Logo Section */}
          <div className="flex flex-col items-start md:flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-2 mb-6">
              <img src={Logo} alt="Logo" className="h-10 w-auto" />
              <span className="text-white font-bold text-2xl">ALTARB</span>
            </NavLink>
            <div className="flex gap-3">
              <a href="https://t.me/+2349130463310" className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Collapsible Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 flex-grow">
            {sections.map((section) => (
              <FooterSection
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} ALTARB | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;