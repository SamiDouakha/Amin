import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    contact : {firstname :"" , lastname:"",email:"",message:"" }
    
  };
  hanleAjouterClient = () => {
    

    const clients = this.state.clients.slice();
    const key=clients.length + 1 
    const client = {
      key: key,
      nom: "anounymous",
      prenom: "anounymous",
      email: "anounymous@anounymous.com"
    };
    const compteur = clients.push(client);

    this.setState({ clients: clients, compteur: compteur });
  };

  handleDeleteClient(key){
    const clients = this.state.clients.slice();
    const index = clients.findIndex((element) => element.key ===key ) 
    
    clients.splice(index,1)
    this.setState({ clients: clients})

  }
  
  handleSubmit(event){
   
    event.preventDefault()
    console.log(event.target)
  }
  
  handelChange = (event)=>{
    
    console.log(event.target.value)
    console.log(event.target.name)
    console.log('i am chnaging')
  }
  render() {
    const title = "Contact me \"Am-You\"";
    
    return (
   
<div className="container">
  <div className="text-center">
  <img className="img-thumbnail " src="https://avatars1.githubusercontent.com/u/52196250?s=400&v=4://i.pravatar.cc/150?u=a042581f4e29026704d" alt="avatar of am-you"/>
	<h1 className="">{title}</h1>
  </div>
	<form  className="form" onSubmit={this.handleSubmit}>
	
	<div className="row">
		
		<div className="col-md-6">
		<div className="form-group">
			<label htmlFor="firstName">First name</label>	
			<input onChange={this.handelChange} type="text" id ="firstName" name="firstName" placeholder="Fist name" value={this.state.contact.firstname} className="form-control"/>
		</div>
		</div>
		
		<div className="col-md-6">
		<div className="form-group">
			<label htmlFor="lastName">Last name</label>	
			<input onChange={this.handelChange} type="text" id ="lastName" name="lastName" placeholder="Fist name" value={this.state.contact.lastname} className="form-control"/>
		</div>
		</div>
	</div>	
	
	<div className="row">
		<div className="col-md-12">
		<div className="form-group">
			<label htmlFor="email">Email</label>	
			<input onChange={this.handelChange} type="text" id ="email" name="email" placeholder="Your email here ... " value={this.state.contact.email} className="form-control"/>
		</div>
		</div>
	</div>
	
	<div className="row">
		<div className="col-md-12">
		<div className="form-group">
			<label htmlFor="message">Message</label>	
			<textarea onChange={this.handelChange} className="form-control" id="message" name="message" placeholder="Your Message here ..." value ={this.state.contact.message}></textarea>
		</div>
		</div>
	</div>

		<button type="submit" className="btn btn btn-success btn-lg btn-block">Confirmer</button>

	</form>
</div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
