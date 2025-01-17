const Person = ({ image, name, age, key }) => {
  return (
    <article className="person" key={key}>
      <img src={image} alt={name} className="img" />
      <div key={key}>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </article>
  );
};
export default Person;
