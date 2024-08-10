type FactProps = {
  isLoading: boolean,
  fade: boolean,
  label: string,
  fact: string;
}

const FastFact = ({ isLoading, fade, label, fact }: FactProps ) => {

  let classes: string = "info__text";
  if (isLoading) classes += " hidden";
  else if (fade) classes += " fade-in";
  
  return (
    <div className="info__wrapper">
      <span className="info__label">{label}</span>
      <p className={classes}>{fact}</p>
    </div>
  );
};

export default FastFact;
