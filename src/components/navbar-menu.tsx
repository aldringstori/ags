"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

type NavItem = {
  name: string;
  subItems?: { href: string; name: string }[];
};

const navItems: Record<string, NavItem> = {
  '/': {
    name: 'home',
    subItems: [],
  },
  '/projects': {
    name: 'projects',
    subItems: [
      { href: '/projects/work', name: 'work' },
      { href: '/projects/open-source', name: 'open source' },
    ],
  },
  '/career': {
    name: 'career',
    subItems: [],
  },
  '/educational': {
    name: 'educational',
  },
  '/personal': {
    name: 'personal',
    subItems: [
      { href: '/personal/calisthenics', name: 'calisthenics' },
      { href: '/personal/mentors', name: 'mentors' },
      { href: '/personal/books', name: 'books' },
      { href: '/personal/psychology', name: 'psychology' },
    ],
  },
  '/demos': {
    name: 'demos',
    subItems: [
      { href: '/demos/summarizer', name: 'youtube summarizer' },
      { href: '/demos/joi', name: 'joi ai companion' },
      { href: '/demos/mentors', name: 'public transport cv' },
      { href: '/demos/books', name: 'free summarizer chrome extension' },
    ],
  },
};

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  subItems,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  href: string;
  subItems?: { href: string; name: string }[];
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:text-[#2E62FF] transition-colors duration-300"
      >
        <Link href={href}>{item}</Link>
      </motion.p>
      {active === item && subItems && subItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-[#000017] backdrop-blur-sm rounded-2xl overflow-hidden border border-[#00DEFF] shadow-xl"
            >
              <motion.div layout className="w-max h-full p-4 text-[#E6F3FF]">
                {subItems && (
                  <div className="flex flex-col space-y-2">
                    {subItems.map((subItem) => (
                      <HoveredLink key={subItem.href} href={subItem.href}>
                        {subItem.name}
                      </HoveredLink>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center space-x-4 px-8 py-12 z-20"
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className="text-white hover:text-[#2E62FF] transition-colors duration-300">
      {children}
    </Link>
  );
};

export function Navbar() {
  const [active, setActive] = React.useState<string | null>(null);
  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <Menu setActive={setActive}>
          {Object.entries(navItems).map(([path, { name, subItems }]) => (
            <MenuItem
              key={path}
              setActive={setActive}
              active={active}
              item={name}
              href={path}
              subItems={subItems}
            />
          ))}
        </Menu>
      </div>
    </aside>
  );
}
