import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({Pokemon}) => {
    return (
    //     <div className="Pokedex">
    //     <h2 className="Pokedex-title">Pokedex</h2>
    //     <div className="Pokecard">
    //     {Pokemon.map(p => (
    //         <Pokecard name={p.name} type={p.type} exp={p.base_experience}/>
           
    //   ))}

    //     </div>

    // </div>
    // )


        <div className="Pokedex">
          <h2 className="Pokedex-title">Pokedex</h2>
          <div className="Pokedex-cards">
            {Pokemon.map(p => (
              <Pokecard
                id={p.id}
                name={p.name}
                type={p.type}
                exp={p.base_experience}
              />
            ))}
          </div>
        </div>
      );
}

export default Pokedex;