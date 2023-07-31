import { Link } from "react-router-dom";


function Header() {
    return (
        <div>
            {/* Spinner Start */}
            {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> */}
            {/* Spinner End */}
            {/* Topbar Start */}
            <div className="container-fluid bg-light p-0">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-map-marker-alt text-primary me-2" />
                            <small>103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District, Danang City, Vietnam</small>
                        </div>
                    
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-phone-alt text-primary me-2" />
                            <small>+84-236-3847 333/888</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <a className="btn btn-sm-square bg-white text-primary me-1" ><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-sm-square bg-white text-primary me-1" ><i className="fab fa-twitter" /></a>
                            <a className="btn btn-sm-square bg-white text-primary me-1" ><i className="fab fa-linkedin-in" /></a>
                            <a className="btn btn-sm-square bg-white text-primary me-0" ><i className="fab fa-instagram" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary">FURAMA RESORT</h2>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to='/' className="nav-item nav-link active">Home</Link>
                        <Link to='/room' className="nav-item nav-link">Room & suits</Link>
                        <Link to='/customer' className="nav-item nav-link">Customer</Link>
                        <Link to='/service' className="nav-item nav-link">Service</Link>
                        <Link to='/contract' className="nav-item nav-link">Contract</Link>
                        <div className="nav-item dropdown">
                            <a  className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu fade-up m-0">
                                <a  className="dropdown-item">Feature</a>
                                <a className="dropdown-item">Free Quote</a>
                                <a className="dropdown-item">Our Team</a>
                                <a  className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
        </div>
    );
}
export default Header;