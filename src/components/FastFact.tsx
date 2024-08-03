interface FactProp {
  label: string,
  fact: string;
}

const FastFact = ({ label, fact }: FactProp ) => {
  return (
    <div className="info__wrapper">
      <span className="info__label">{label}</span>
      <p className="info__text">{fact}</p>
    </div>
  );
};

export default FastFact;
