import React from 'react'
import { Link } from 'react-router-dom'
const Fotter = () => {
  return (
<>

<footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top bg-dark text-white">
    <div className="col mb-3">
      <Link href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
      <li class="fa-brands fa-facebook fa-bounce fs-2 text-info ms-3 "></li>

      <li class="fa-brands fa-linkedin fa-bounce fs-2 text-info ms-3"></li>

      <li class="fa-brands fa-square-instagram fa-bounce fs-2  bg-white ms-3"></li>
      <li class="fa-brands fa-youtube fa-bounce fs-2 text-danger bg-white ms-3"></li>
      </Link>
      <p className="text-white">&copy; 2023</p>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white">Home</Link></li>
        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white">Features</Link></li>
        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white">Pricing</Link></li>
        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white">FAQs</Link></li>
        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white">About</Link></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white">Home</Link></li>
        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white">Features</Link></li>
        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white">Pricing</Link></li>
        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white">FAQs</Link></li>
        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white">About</Link></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white">Home</Link></li>
        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white">Features</Link></li>
        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white">Pricing</Link></li>
        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white">FAQs</Link></li>
        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white">About</Link></li>
      </ul>
    </div>
  </footer>

</>
    )
}

export default Fotter