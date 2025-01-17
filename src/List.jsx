import Person from "./Person";

const List = ({ people, setPeople }) => {
  return (
    <section >
      <h3>{people.length} Birthdays Today</h3>
      {people.map((people) => {
        return <Person key={people.key} {...people} />;
      })}
    </section>
  );
};
export default List;
