import keyConceptsImage from "./../assets/images/key-concepts.png";
const Header = (props) => {
  return (
    <header>
      <img src={keyConceptsImage} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>The most important react concepts!</p>
    </header>
  );
};

export default Header;
