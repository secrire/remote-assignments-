class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

{/*<!-- Header -->*/}

  {/*<!-- Nav -->*/}
class Header extends React.Component {
  state = {
    navlist: ["about", "work", "blog", "contact"],
    isMobileMenuShown: false,
  };

  showMobileMenu = () => {
    this.setState({ isMobileMenuShown: true });
  };

  hideMobileMenu = () => {
    this.setState({ isMobileMenuShown: false });
  };

  render() {
    return(
      <header className="main-header">
              <a href="w4-a3.html" className="logo">allie wu</a>

      <MainNav
         navlist={this.state.navlist}
         showMobileMenu={this.showMobileMenu}
       />
       <MobileMenu
         navlist={this.state.navlist}
         isMobileMenuShown={this.state.isMobileMenuShown}
         hideMobileMenu={this.hideMobileMenu}
       />
     </header>
 );
 }
 };

 const MainNav = (props) => (
   <nav className="main-nav">
   <span className="menuImg" onClick={ () =>props.showMobileMenu()}>
 <img src="iconfinder_line-list_1954545-1.png" width="30px" height="30px" />
 </span>
     <ul className="nav-list">
       {props.navlist.map((navItem) => (
         <li key={navItem}>{navItem}</li>
       ))}
     </ul>
   </nav>
 );

 const MobileMenu = (props) => (
   <nav
     className={`mobile_menu mobile_menu_${
       props.isMobileMenuShown ? "shown" : "hidden"
     }`}
   >

     <button
       className="closemenu"
       onClick={ ()=> props.hideMobileMenu() }
     >
       x
     </button>

     <ul className="mobile_menu_list">
       {props.navlist.map((navItem) => (
         <li key={navItem}>{navItem}</li>
       ))}
     </ul>
   </nav>
 );



{/*
  <div>
    <div>



     <ul className="main-nav" style={{display: this.state.display}}>
                 <li><a href="#">about</a></li>
                 <li><a href="#">work</a></li>
                 <li><a href="#">blog</a></li>
                 <li><a href="#">contact</a></li>
               </ul>
    </div>

    <div className = "menuImg" onClick={this.showMobileMenu}>
                <img src="iconfinder_line-list_1954545-1.png" width="30px" height="30px" />
              </div>

              <button
                className="closemenu"
                onClick={ ()=> props.hideMobileMenu }
                style={{display: this.state.display}}
              >
                x
              </button>
</div>
         );
      }
    }

*/}



{/*<!-- Banner -->*/}
class Banner extends React.Component {
  state={
   welcomeMessage: "hey world"
  };

changeWelcomeMessage =() =>{
  this.setState({ welcomeMessage: "Have a Good Time!" });
};

render() {
    return(
	<div className="banner">
	<h1 className="welcomeMessage"
      onClick={ ()=>this.changeWelcomeMessage() }>
      {this.state.welcomeMessage}   {/*!!!!!!!!!!!!!!!!!!!!*/}
      </h1>
</div>
      );
}};


		{/*<!-- content-->
      <section className="main-content"></section> */}
      class MainContent extends React.Component {
        state = {
          isBoxesGroup2Displayed: false,
        };

        showMoreBox = () => {
          this.setState({ isBoxesGroup2Displayed: true });
        };

        render() {
          return (
            <section className="main-content">

            <div>
            <h2 className="main-content-title">to start somewhere</h2>
            </div>

              <section className="row">
              <div className="content-box">content1</div>
              <div className="content-box">content2</div>
              <div className="content-box">content3</div>
              <div className="content-box">content4</div>
              </section>

  <button className="call" onClick={ ()=> {this.showMoreBox();}}> call to action</button>


              <Moretoshow isDisplayed={this.state.isBoxesGroup2Displayed}>
              <div>
                <div className="content-box">content5</div>
                <div className="content-box">content6</div>
                <div className="content-box">content7</div>
                <div className="content-box">content8</div>
              </div>
              </Moretoshow>
            </section>
          );
        }
      }

      const Moretoshow = (props) => (
        <div
          className="moretoshow"
          style={{ display: props.isDisplayed ? "flex" : "none" }}
        >
          <div>{props.children}</div>
        </div>
      );



{/*<!-- Footer-->*/}
function Footer() {
  return (
   <footer>
				<p>get in touch:)</p>
   <div>
				<p>&copy; allie wu. 2020</p>
	 </div>
			</footer>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
