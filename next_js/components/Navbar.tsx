
"use client";

import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
} from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-6 z-50 mx-auto w-fit",
        className
      )}
    >
      <div className="rounded-full border border-white/10 bg-black/70 p-1 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-xl">
        <Menu setActive={setActive}>
          <Link href="/">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            >
              <span className="text-sm text-neutral-300 transition-colors hover:text-white">
                Home
              </span>
            </MenuItem>
          </Link>

          <MenuItem
            setActive={setActive}
            active={active}
            item="Our Courses"
          >
            <div className="flex min-w-[220px] flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">
                All Courses
              </HoveredLink>

              <HoveredLink href="/courses">
                Basic Music Theory
              </HoveredLink>

              <HoveredLink href="/courses">
                Advanced Composition
              </HoveredLink>

              <HoveredLink href="/courses">
                Songwriting
              </HoveredLink>

              <HoveredLink href="/courses">
                Music Production
              </HoveredLink>
            </div>
          </MenuItem>

          <Link href="/about">
            <MenuItem
              setActive={setActive}
              active={active}
              item="About"
            >
              <span className="text-sm text-neutral-300 transition-colors hover:text-white">
                About
              </span>
            </MenuItem>
          </Link>

          <Link href="/contact">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact"
            >
              <span className="text-sm text-neutral-300 transition-colors hover:text-white">
                Contact
              </span>
            </MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
