import { useState } from "react";

type TooltipProps = {
  content: string | null;
  children: any;
  className: string;
};

const Tooltip = ({ content, children, className }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  if (content?.endsWith('English')) {
    content = 'English';
  }

  return (
    <div 
      className="tooltip__container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <span 
          className={`tooltip__content ${className}`}
        >
          {content}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
