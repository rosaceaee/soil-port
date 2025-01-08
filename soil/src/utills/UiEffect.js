import { useEffect } from "react";

// nav
export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export const handleMouseEnter = (id, e, setIsHovered, onMouseEnter) => {
  if (setIsHovered) {
    setIsHovered((prev) => ({ ...prev, [id]: true }));
  }
};

export const handleMouseLeave = (id, e, setIsHovered, onMouseLeave) => {
  if (setIsHovered) {
    setIsHovered((prev) => ({ ...prev, [id]: false }));
  }
};

export const cursorClassName = (id, isHovered, setIsHovered) => {
  const base = "allign-r";
  const hoverIt = isHovered && isHovered[id] ? "cursor-toUp" : "";

  return `${base} ${hoverIt}`.trim();
};
