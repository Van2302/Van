import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './contact.js';
class App extends Component {
	foo(){
  return <h2>Contacts</h2>
};
render() {
	const a = [
	{name:'Van',surname:'Maruqyan', img:'https://img1.looper.com/img/gallery/spider-man-3-reportedly-includes-team-up-thatll-please-fans/intro-1580241227.jpg', mail:'van.marukyan@mail.ru', tel:'+37493156103'}
		];
  return (
    <div className="App">
	<div className="contacts">
	{a.map(i => <Contact img={i.img} name={i.name} surname={i.surname} mail={i.mail} tel={i.tel} key={i.name} />)}
	</div>
    </div>
	
  );
}
}

export default App;