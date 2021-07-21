import './NavBar.css';
import SendIcon from '@material-ui/icons/Send';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';

export const NavBar = ()=>{
  return(
    

        <nav id="menu">
          <div className="container">
            <div className="row">
              <article className="col-sm-1">
                <HomeIcon></HomeIcon>
              </article>  
              <article className="col-sm-9">
                <form>
                  <input type={"text"} placeholder={"buscar.."} className="form-control"></input>          
                </form>       
              </article>
              
              <article className="col-sm-1">
                <CategoryIcon></CategoryIcon>
              </article>
              <article className="col-sm-1">
              <SendIcon></SendIcon>
              </article>                
            </div>
          </div>
        </nav>

        
      
  );
}



//export default NavBar;
