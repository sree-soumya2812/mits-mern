import React from 'react'
import {Link} from 'react-router-dom'
const Hook = () => {
  return (
    <div>
        <ol>
            <li><Link to='/useState'>useState</Link></li>
            <li><Link to='/useEffect'>useEffect</Link></li>
            <li><Link to='/useEffectApi'>useEffectApi</Link></li>
        </ol>
      
    </div>
  )
}

export default Hook