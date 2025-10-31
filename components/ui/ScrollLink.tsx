"use client";

import React from "react";

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

export default function ScrollLink({
  href,
  children,
  className,
  offset = 80,
}: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Check if href is a hash link
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      // If it's not a hash link, navigate normally
      window.location.href = href;
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
