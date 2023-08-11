import React from 'react'
import { Link } from 'react-router-dom'

const Lndingpg = () => {
  return (
    <div>
      <Link to="/login">
     <button type="submit">Login</button>
     </Link>
     <Link to="/signup">
      <button type="submit">SignUp</button>
      </Link>
    </div>
  )
}

export default Lndingpg
