    import frameworkLogo from '../assets/Framework_logo.svg.webp';
    import userProfile from '../assets/user-profile-icon.png';
    import cartIcon from '../assets/shopping-bag-icon.png';
    import usaFlag from '../assets/united-states-flag.png';
export default function NavBar() {
    return (
           <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://frame.work/">
      <img src={frameworkLogo} alt="Framework" width="160" height="21" className="d-inline-block align-text-top"/>
    </a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
     aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="https://frame.work/desktop">Desktop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://frame.work/laptop12">Laptop 12</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://frame.work/laptop13pro">Laptop 13</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://frame.work/laptop16">Laptop 16</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://frame.work/support">Shop all</a>
          </li>
          </ul>

         
          <ul className="navbar-nav ms-lg-4">
          <li className="nav-item">
            <a className="nav-link" href="https://frame.work/support">Support</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://frame.work/framework-for-business">For Business</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://frame.work/about">About</a>
          </li>
        </ul>

       <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://frame.work/account/login">
              <img src={userProfile} alt="User Profile" width="30" height="30" className="d-inline-block align-text-top"/>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://frame.work/cart">
              <img src={cartIcon} alt="Cart" width="30" height="30" className="d-inline-block align-text-top"/>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://frame.work/locale/edit">
              <img src={usaFlag} alt="USA Flag" width="30" height="30" className="d-inline-block align-text-top"/>USA
            </a>
          </li>
        </ul>
      </div>
    </div>


    


</nav>  
    );
}