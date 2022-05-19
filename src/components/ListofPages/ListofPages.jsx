import {NavLink} from "react-router-dom";
import React from "react";

import './ListOfPages.css'

const ListOfPages = () => {
    return (

        <div className='list-pages'>
                <NavLink to='/sacrifice'>Sacrifice  </NavLink>
                <NavLink to='/multipliers'>Multipliers  </NavLink>
                <NavLink to='/statistics'>Statistics  </NavLink>
        </div>
    )

}
export default ListOfPages;