import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { cart } = useSelector((root) => root);

  let cartInit = 0;
  cart.forEach((element) => (cartInit += element.stock));
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <a className="navbar-brand text-muted" href="#">
            FALVORUM
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active text-muted"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <Link to="/cart" className="bg-info text-light">
                <i className="fa-solid fa-cart-shopping text-muted"></i>
                <span className="badge text-bg-secondary">{cartInit}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
