type FactProps = {
  fade: boolean,
  label: string,
  fact: string;
}

const FastFact = ({ fade, label, fact }: FactProps ) => {
  return (
    <div className="info__wrapper">
      <span className="info__label">{label}</span>
      <p className={`${fade ? "fade-in info__text" : "info__text"}`}>{fact}</p>
    </div>
  );
};

export default FastFact;
