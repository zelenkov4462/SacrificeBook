import {Link} from "react-router-dom";
import React from "react";

import './ListOfPages.css'

const ListOfPages = () => {
    return (

        <div className='list-pages'>
                <Link to='/sacrifice'>Sacrifice  </Link>
                <Link to='/multipliers'>Multipliers  </Link>
                <Link to='/statistics'>Statistics  </Link>
        </div>
    )

}
export default ListOfPages;