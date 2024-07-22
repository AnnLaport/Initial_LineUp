import { useDispatch, useSelector } from "react-redux";
import { deleteTitular } from "./titularSlice";
import { playerAdded } from "./playerSlice";


export default function ShowTitulares(){

    const titulares= useSelector(state=>state.titulares);
    const dispatch=useDispatch();

    const showLineup=titulares.map(titular=>(
        <div className="titular" key={titular.number}>
            <h3>{titular.name}</h3>
            <p>{titular.number}-{titular.position}</p>
            <button onClick={()=>{dispatch(playerAdded(titular.name, titular.number, titular.position)); dispatch(deleteTitular(titular.number))}}>Bench</button>
        </div>
    ))

    return(
        <>
            <h2>Initial Line-Up:</h2>
            <section className="lineUp">
                {showLineup}
            </section>
        </>
    )
}