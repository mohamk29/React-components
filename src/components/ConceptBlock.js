const ConceptBlock = ({ conceptArray }) => {
  return (
    <>
      {conceptArray.map((concept) => {
        return (
          <ul id="concepts">
            <li className="concept">
              <img src={concept.image} alt={concept.title} />
              <h2>{concept.title}</h2>
              <p>{concept.description}</p>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default ConceptBlock;
