const Navbar = () => {
    return (  
        <>
      <header className="header js-header">
        <div className="container">
          <div className='logo'>
            <a href="/">Tolmol <span>cleaning services</span></a>
          </div>
          <button type="button" class="nav-toggler js-nav-toggler">
            <span></span>
          </button>
          <nav className="nav js-nav">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/contact"></a>Contact</li>
            </ul>
          </nav>
        </div>

      </header>
     
        </>
    );
}
 
export default Navbar;