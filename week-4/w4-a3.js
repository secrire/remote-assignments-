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
class Header extends React.Component {
  state = {
    navlist: ["about", "work", "blog", "contact"],
    mobileMenuDisplayed: false,
  };

  showMobileMenu = () => {
    this.setState({ mobileMenuDisplayed: true });
  };

  hideMobileMenu = () => {
    this.setState({ mobileMenuDisplayed: false });
  };

  render() {
    return(
    <header>
    <a href="w4-a3.html" className="logo">allie wu</a>

     {/*<!-- Nav -->*/}
     <MainNav
        navlist={this.state.navlist}
        showMobileMenu={this.showMobileMenu}
      />
      <MobileMenu
        navlist={this.state.navlist}
        mobileMenuDisplayed={this.state.mobileMenuDisplayed}
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
      props.mobileMenuDisplayed ? "shown" : "hidden"
    }`}
  >
    <button
      className="closemenu"
      onClick={ ()=> props.hideMobileMenu }
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


		{/*<!-- content-->*/}
class MainContent extends React.Component {
  state={
         originalboxes: true,
         moretoshowDisplayed: false,
  };

 showMoreBox=() =>{
  this.setState({ moretoshowDisplayed: true });
};

render() {
    return(
<section className="main-content">
<h2 className="main-content-title">to start somewhere</h2>

        <ContentBoxes Displayed={this.state.originalboxes}>
          <ContentBox> content1 </ContentBox>
          <ContentBox> content2 </ContentBox>
          <ContentBox> content3 </ContentBox>
          <ContentBox> content4 </ContentBox>
        </ContentBoxes>

        <button className="call" onClick={ ()=> {this.showMoreBox();}}> call to action</button>

        <ContentBoxes Displayed={this.state.moretoshowDisplayed}>
          <ContentBox> content5 </ContentBox>
          <ContentBox> content6 </ContentBox>
          <ContentBox> content7 </ContentBox>
          <ContentBox> content8 </ContentBox>
        </ContentBoxes>
      </section>
    );
  }
}

const ContentBoxes = (props) => (
  <div
    className="content-boxes"
    style={{ display: props.Displayed ? "block" : "none" }}
  >
    <div className="row">{props.children}</div>
  </div>
);

const ContentBox = (props) => (
  <div className="content-box">
  </div>
);

{/*
  <div className="row" >
<div className="content-box">content1</div>
<div className="content-box">content2</div>
<div className="content-box">content3</div>
<div className="content-box">content4</div>
</div>

  <button className="call" onClick={ ()=> {this.showMoreBox();}}> call to action</button>

<div Moretoshow Displayed={this.state.moretoshowDisplayed}>
  <div className="content-box">content5</div>
  <div className="content-box">content6</div>
  <div className="content-box">content7</div>
  <div className="content-box">content8</div>
</Moretoshow>
</div>
</section>
)}};

const Moretoshow = (props) => (
  <div className="moretoshow"
    style={{ display: props.Displayed ? "flex" : "none" }}
  >
  <div>{props.lastChild}</div>
  </div>
);
*/}

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
