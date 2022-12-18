import ItemList from "../ItemList/ItemList";

function ItemListContainer(props) {
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
      <ItemList genero={props.genero} />
    </div>
  );
}

export default ItemListContainer;
