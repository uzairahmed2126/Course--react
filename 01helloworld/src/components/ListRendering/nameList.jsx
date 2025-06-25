function ListRendering() {
  const arr = [
    { name: "Bruce", age: 28, skill: "java" },
    { name: "joe", age: 28, skill: "java" },
    { name: "kyle", age: 28, skill: "java" },
  ];
  return (
    <div>
      {arr.map(({ name, age, skill }) => {
        return <h1>I am {name} and I am {age} years old and my skill is {skill}</h1> ;
      })}
    </div>
  );
}

export default ListRendering;
