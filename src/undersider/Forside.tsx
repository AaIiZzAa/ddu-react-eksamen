import VælgFarve from "./VælgFarve";

function Forside(props: any) {
  return (
    <>
      <h1>Forside</h1>
      <VælgFarve
        setPrimaryColor={props.setPrimaryColor}
        setSecondaryColor={props.setSecondaryColor}
      />
    </>
  );
}

export default Forside;
