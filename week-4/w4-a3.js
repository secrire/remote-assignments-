class App extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <Footer />
      </div>
    );
  }
}

{/*<!-- Header -->
class Header extends React.Component {
  state={

  };

=() =>{
  this.setState({  });
};

  render() {
    return(
    <header>
    <a href="w4-a3.html" className="logo">allie wu</a>
     <!-- Nav-->
				<nav className="main-nav">
				<a href="#"><img className="menuImg"
      onClick={ () =>this.()}
src="iconfinder_line-list_1954545-1.png" width="30px" height="30px">
  </a>
  <ul class= "navlist">
<li><a href="#">about</a></li>
<li><a href="#">work</a></li>
<li><a href="#">blog</a></li>
<li><a href="#">contact</a><li>
</ul>
          <div class="mobile_menu">
    <button className="closemenu" onClick={ ()=>}>x</button>
  <ul class="mobile_menu_list">
<li><a href="#">about</a></li>
<li><a href="#">work</a></li>
<li><a href="#">blog</a></li>
<li><a href="#">contact</a><li>
            </ul>
		</div>
        </nav>
  </header>
        );
  }
};

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
class MainContent extends React.Component {
  state={
         moretoshowDisplayed: false,
  };

 showMoreBox=() =>{
  this.setState({ moretoshowDisplayed: !this.state.moretoshowDisplayed });
};

render() {
    return(
<section className="main-content">
<h2 className="main-content-title">to start somewhere</h2>

<div className="row" >
<div className="content-box">content1</div>
<div className="content-box">content2</div>
<div className="content-box">content3</div>
<div className="content-box">content4</div>
</div>
  <button className="call" onClick={ ()=> {this.showMoreBox();}}> call to action</button>

  <div className={"moretoshow" + (this.state.moretoshowDisplayed ? "active" : null)}>
<div className="content-box">content5</div>
<div className="content-box">content6</div>
<div className="content-box">content7</div>
<div className="content-box">content8</div>

</div>
</section>
)}};
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

ReactDOM.render (
     <App />,
     document.getElementById('root')
      );
