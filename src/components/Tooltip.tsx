import { useState } from "react";

type TooltipProps = {
  language: string;
  greeting: string;
};

const Tooltip = ({ language, greeting }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  if (language.endsWith('English')) {
    language = 'English';
  }

  return (
    <div 
      className="tooltip__container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {greeting}
      {isVisible && (
        <span className="tooltip__content">{language}</span>
      )}
    </div>
  );
};

export default Tooltip;
