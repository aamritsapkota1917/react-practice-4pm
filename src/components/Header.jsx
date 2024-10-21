import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { isAuthenticated,signout } from '../auth/authIndex'

const Header = () => {

const navigate=useNavigate()

  return (
<>

<header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src="" alt=""/>
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
          <li><Link to="/products" className="nav-link px-2 text-white">Products</Link></li>
          <li><Link to="#" className="nav-link px-2 text-white">Pricing</Link></li>
          <li><Link to="#" className="nav-link px-2 text-white">Cart</Link></li>

          <li><Link to="#" className="nav-link px-2 text-white">FAQs</Link></li>
          <li><Link to="#" className="nav-link px-2 text-white">About</Link></li>

        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>
        {isAuthenticated() && isAuthenticated().user.role===1 &&
        <div className="text-end">
          <Link type="/admin/dashboard" className=" me-2 text-decoration-none text-white">Admin</Link>
          
          </div>
        }
        {isAuthenticated() && isAuthenticated().user.role===0 &&
        <div className="text-end">
          <Link type="/profile" className=" me-2 text-decoration-none text-white">Profile</Link>
          
          </div>
        }
        {!isAuthenticated()&&
        <div className="text-end">
        <Link type="/Login" className="btn btn-outline-light me-2">Login</Link>
        <Link type="/signup" className="btn btn-warning">Sign-up</Link>
      </div>
        }

        {isAuthenticated() &&
        <button className='btn btn-danger' onClick={()=>signout(()=>{

navigate('/login') 
       })}>Logout</button>
        
        }

        
      </div>
    </div>
  </header>

</>
    )
}

export default Header