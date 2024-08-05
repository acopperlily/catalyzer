import PeleHead from '../assets/peleSmol.png';

const Loading = () => {
  return (
    <section className="loading">
      <h2 className="loading__message">Loading...</h2>
      <img 
        className="loading__spinner"
        src={PeleHead} 
        alt="The spinning head of a cute cow cat" 
      />
    </section>
  );
}

export default Loading;
