import { useParams, useNavigate, useMatch, useLocation } from "react-router-dom";

function Movies() {
  const { id } = useParams();
  const nav = useNavigate();
  //const value = useMatch('movies/5556');
  const value2 = useLocation();
  //console.log('1',value);
  console.log('2',value2);


  return (
    <>
      <h1> Hello from Movies {id}</h1>
      <button className="btn" onClick={() => nav(-1)}>
        Go back
      </button>
    </>
  );
}
export { Movies };
