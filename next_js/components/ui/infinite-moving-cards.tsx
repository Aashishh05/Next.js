"use client";

import { cn } from "@/lib/utils";
import { Quote, Star } from "lucide-react";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  // Derive avatar initials from the student's name
  const initials = (name: string) =>
    name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap py-4",
          start && "animate-scroll",
          pauseOnHover && "rounded-xl hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className={cn(
              "group/card relative w-[350px] max-w-full shrink-0 snap-start rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-8 backdrop-blur-sm transition-colors duration-300",
              "hover:border-indigo-400/30 hover:bg-white/[0.07] md:w-[440px]",
            )}
            key={item.name || idx}
          >
            {/* Gradient hover glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
            />

            <blockquote className="flex h-full flex-col justify-between">
              <div>
                {/* Quote icon + rating */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-indigo-400 text-indigo-400"
                      />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 rotate-180 text-indigo-400/40" />
                </div>

                <span className="relative z-20 block text-sm leading-[1.7] text-slate-200">
                  {item.quote}
                </span>
              </div>

              <div className="relative z-20 mt-8 flex items-center gap-3 border-t border-white/5 pt-6">
                {/* Avatar with initials */}
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20">
                  {initials(item.name)}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-white">
                    {item.name}
                  </span>
                  <span className="text-xs text-slate-400">{item.title}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
