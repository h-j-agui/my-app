import Card from "../Card/Card";
function ItemListContainer({ greeting }) {
  //  const usuario = {
  //   name: "Hannah",
  //   age: 30,
  // };
  // const alumno = {
  //   class: "react-js",
  //   promedio: 5,
  // };

  // const alumnoCh = { ...usuario, ...alumno, idCh: 12 };

  // console.log(alumnoCh);

  return (
    <div className="item_container">
      <h1>{greeting}</h1>
      <Card />
    </div>
  );
}

export default ItemListContainer;
