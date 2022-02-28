import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {validator} from "./components/validator"
import "./styles/style.css"

class Simpleform extends react.Component{
  constructor(props){
    super(props)
    this.state={
        password : "",
        email : "",
    }
  }  

  render(){
  return(
    <> 
    <h1 className='log'>
        Login
    </h1>
    <div class ='container'>
    <form>
  <div class="col col-6" className='email'>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email}/>
  </div>
  <div class="col col-6" className='password'>
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={this.state.password}/>
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
