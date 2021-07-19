import { useState } from "react"

const Navbar = () => {
    const [user, setUser] = useState(null)

    const login = () => {
      setUser({id:1,nombre:"Fabricio Lopez"})
    }
    const logout = () => {
      setUser(null)
    }
    return(
        <nav className='navbar navbar-light bg-gradient' Style='background-color: #0A1B40'>
            <div className='container-fluid'>
                <span className='navbar-brand mb-0 fs-4 text-white'>usuario:{user? user.nombre :"Desconocido"}</span>
                {user 
                    ? (<button 
                        className="btn btn-outline-success text-white" 
                        type="Button" 
                        onClick = {logout} >Cerrar Sesion
                    </button>)
                    : (<button 
                        className="btn btn-outline-success text-white" 
                        type="Button" 
                        onClick = {login} >Iniciar Sesion
                    </button>)
      }

            </div>
        </nav>
    )
}

export default Navbar