import ComponentC from "./ComponentC";

import React,{useContext} from "react";
import {UserContext} from "./ComponentA";

function ComponentB() {
const user = useContext(UserContext);
    return(


        <div className="box">
            <h1>Component B</h1>
            <h2>{`hello again from B ${user}`}</h2>
            <ComponentC/>
        </div>
    )

}
export default ComponentB;