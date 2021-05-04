import Header from "../header";
import Footer from "../footer/Footer";
import TopNav from "../header/topNav";
import Navigation from "../header/navigation";

const Layout = ({
  children,
  topTitle = "Top Navigation",
  mainTitle = "Main Navigation",
}) => {
  return (
    <>
      <button id="mm-menu-toggle" className="mm-menu-toggle my-menu">
        <span className="menu-icon bar-menu lnr lnr-menu"></span>
        <span className="menu-icon back-menu lnr lnr-arrow-left"></span>
      </button>
      <nav id="mm-menu" className="mm-menu">
        <span className="nav-title">{topTitle}</span>
        <TopNav />
        <span className="nav-title">{mainTitle}</span>
        <Navigation />
      </nav>
      <div id="wrapper" className="wrapper">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
