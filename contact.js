import React, { Component} from 'react';
import './contact.css';
export class Contact extends Component{
	constructor(props) {
		super(props);
		this.name = props.name;
		this.img = props.img;
		this.surname = props.surname;
		this.mail = props.mail;
		this.tel = props.tel;
	}
	render(){
const {img, name, surname, mail, tel} = this;
return ( <div className='contact'>
<img src={img}/>
 <p><div className='mail'>
 <p><h4>{name}  {surname} </h4></p>
<p><img src='https://tochkatepla71.ru/sites/default/files/high-contrast-emblem-mail.svg_.png' height='20' width='20'/> {mail}</p>
<p><img src='https://c7.hotpng.com/preview/982/427/634/telephone-call-computer-icons-iphone-symbol-telefono.jpg' height='20' width='20'/>  {tel}</p>
</div></p>
</div>
);
	}
	}
export default Contact;