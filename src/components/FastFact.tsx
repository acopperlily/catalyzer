type FactProps = {
  isLoading: boolean,
  fade: boolean,
  label: string,
  fact: string;
}

const FastFact = ({ isLoading, fade, label, fact }: FactProps ) => {

  let classes: string = "info__wrapper";
  if (isLoading) classes += " hidden";
  else if (fade) classes += " fade-in";

  return (
    <div className={classes}>
      <span className="info__label">{label}</span>
      <p className="info__text">{fact}</p>
    </div>
  );
};

export default FastFact;
