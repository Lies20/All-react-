import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/style.css"

class Simpleform extends react.Component{
  constructor(props){
    super(props)
    this.state={
        password : "",
        emailClass:"is-invalid",
        email : "",
        passwordClass:"",
    };
    
  }
  handleChange(event) {
    var value = event.target.value;
    this.setState({
      email: value
    })
    if(value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
     this.setState({
       emailClass : "is-valid"
     }) 
    }else{
      this.setState({
        emailClass : "is-invalid"
      })
    }
  }
  handleChangePass(event) {
    var value = event.target.value;
    this.setState({
      password: value
    })
    if(value.length > 5){
      this.setState({
        passwordClass:"is-valid"
      })
    }else{
      this.setState({
        passwordClass:"is-invalid"
      })
    }
  }


  
    

  render(){
    console.log(this.state.email)
  return(
    <> 
    <h1 className='log'>
        Login
    </h1>
    <div class ='container'>
    <form onSubmit={event => this.state.email}>
  <div class="col col-6" className='email'>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className={`form-control ${ this.state.emailClass}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter email...' value={this.state.email} onChange={event=>this.handleChange(event)} />
  </div>
  <div class="col col-6" className='password'>
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class={`form-control ${this.state.passwordClass}`} id="exampleInputPassword1"placeholder='Enter password...' value={this.state.password} onChange={event=>this.handleChangePass(event)}/>
  </div>
  <div class="col col-6 form-check" className='checking'>
    <input type="checkbox" class="form-check-input" id="exampleCheck1" value=""/>
    <label class="form-check-label" for="exampleCheck1">Remember me</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    </>
    
  )
}




}
    








export default Simpleform;
