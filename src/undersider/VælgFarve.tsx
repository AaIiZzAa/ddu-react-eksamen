function VælgFarve(props: any) {
  return (
    <>
      <h1>Vælg en farve</h1>
      <button
        className="bg-red-500 px-2 py-2 m-2 rounded-lg text-white font-bold"
        onClick={() => props.setPrimaryColor("#FF0000")}
      >
        Rød
      </button>
      <button
        className="bg-green-500 px-2 py-2 m-2 rounded-lg text-white font-bold"
        onClick={() => props.setPrimaryColor("#00FF00")}
      >
        Grøn
      </button>
      <button
        className="bg-blue-500 px-2 py-2 m-2 rounded-lg text-white font-bold"
        onClick={() => props.setPrimaryColor("#0000FF")}
      >
        Blå
      </button>
      <button
        className="bg-slate-500 px-2 py-2 m-2 rounded-lg text-white font-bold"
        onClick={() => props.setPrimaryColor(undefined)}
      >
        Reset
      </button>

      <h2>Vælg en sekundær farve</h2>
      <button
        className="bg-red-500 px-2 py-2 m-2 rounded-lg text-white font-bold"
        onClick={() => props.setSecondaryColor("#FF0000")}
      >
        Rød
      </button>
      <button
        className="bg-green-500 px-2 py-2 m-2 rounded-lg text-white font-bold"
        onClick={() => props.setSecondaryColor("#00FF00")}
      >
        Grøn
      </button>
      <button
        className="bg-blue-500 px-2 py-2 m-2 rounded-lg text-white font-bold"
        onClick={() => props.setSecondaryColor("#0000FF")}
      >
        Blå
      </button>
      <button
        className="bg-slate-500 px-2 py-2 m-2 rounded-lg text-white font-bold"
        onClick={() => props.setSecondaryColor(undefined)}
      >
        Reset
      </button>
    </>
  );
}

export default VælgFarve;
