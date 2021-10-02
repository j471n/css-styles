import React from 'react'
import { Link } from 'react-router-dom'


const Tool = ({ name, path }) => {
    
    return (
        <Link className="tool" to={`/${name}`}>
            {name}
        </Link>
    )
}

export default Tool
