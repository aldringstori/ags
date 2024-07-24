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

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  subItems,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  subItems?: { href: string; name: string }[];
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-[#E6F3FF] hover:opacity-[0.9]"
      >
        {item}
      </motion.p>
      {active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-[#000017] backdrop-blur-sm rounded-2xl overflow-hidden border border-[#00DEFF] shadow-xl"
            >
              <motion.div layout className="w-max h-full p-4 text-[#E6F3FF]">
                {children}
                {subItems && (
                  <div className="flex flex-col mt-4 space-y-2">
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
    <Link {...rest} className="text-[#E6F3FF] hover:text-[#00DEFF]">
      {children}
    </Link>
  );
};

const navItems = {
  '/': {
    name: 'home',
  },
  '/projects': {
    name: 'projects',
    subItems: [
      { href: '/projects/open-source', name: 'Open Source' },
      { href: '/projects/closed-source', name: 'Closed Source' },
    ],
  },
  '/career': {
    name: 'career',
  },
  '/educational': {
    name: 'educational',
    subItems: [
      { href: '/educational/papers', name: 'Papers' },
    ],
  },
  '/personal': {
    name: 'personal',
    subItems: [
      { href: '/personal/hobbies', name: 'Hobbies' },
      { href: '/personal/calisthenics', name: 'Calisthenics' },
      { href: '/personal/mentors', name: 'Mentors' },
      { href: '/personal/books', name: 'Books' },
      { href: '/personal/psychology', name: 'Psychology' },
    ],
  },
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
              subItems={subItems}
            >
              <HoveredLink href={path}>{name}</HoveredLink>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </aside>
  );
}
