import type { TooltipProps } from "../data/types";
import { useState } from "react";

const Tooltip = ({ content, children, className }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  if (content?.endsWith('English')) {
    content = 'English';
  }

  return (
    <div 
      id="trigger"
      aria-describedby="tooltip-content"
      className="tooltip__container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div 
          id="tooltip-content"
          role="tooltip"
          className={`tooltip__content ${className}`}
        >
          {content}
        </div>)}
    </div>
  );
};

export default Tooltip;
