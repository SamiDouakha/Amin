import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    inputs:
    [
      {id :"nom", name: "nom", nom :"" ,label:"Nom",placeholder:"Nom"} ,
      {id :"prenom", name: "prenom" ,prenom:"",label:"Pénom",placeholder:'prénom...'} ,
      {id :"email", name: "email", email :"",label:"Email" , placeholder: 'email@example.com'}
    ] 
    
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

  render() {
    const title = "Contact me \"Am-You\"";
    const inputs = this.state.inputs.map(input => {
      return (
        <div class="form-group"> <label for={input.name}>{input.label}</label>
        <input class="form-control" id ={input.id} name={input.name} type="text" placeholder={input.placeholder}/>
        </div>
      );
    });
    return (
   
<div class="container">
  <div class="text-center">
  <img class="img-thumbnail " src="https://avatars1.githubusercontent.com/u/52196250?s=400&v=4://i.pravatar.cc/150?u=a042581f4e29026704d" alt="avatar of am-you"/>
	<h1 class="">{title}</h1>
  </div>
	<form  class="form" onSubmit={this.handleSubmit}>
	
	<div class="row">
		
		<div class="col-md-6">
		<div class="form-group">
			<label for="firstName">First name</label>	
			<input type="text" id ="firstName" name="firstName" placeholder="Fist name" class="form-control"/>
		</div>
		</div>
		
		<div class="col-md-6">
		<div class="form-group">
			<label for="lastName">Last name</label>	
			<input type="text" id ="lastName" name="lastName" placeholder="Fist name" class="form-control"/>
		</div>
		</div>
	</div>	
	
	<div class="row">
		<div class="col-md-12">
		<div class="form-group">
			<label for="email">Email</label>	
			<input type="text" id ="email" name="email" placeholder="Your email here ... " class="form-control"/>
		</div>
		</div>
	</div>
	
	<div class="row">
		<div class="col-md-12">
		<div class="form-group">
			<label for="message">Message</label>	
			<textarea class="form-control" id="message" name="message" placeholder="Your Message here ..."></textarea>
		</div>
		</div>
	</div>

		<button type="submit" class="btn btn btn-success btn-lg btn-block">Confirmer</button>

	</form>
</div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
