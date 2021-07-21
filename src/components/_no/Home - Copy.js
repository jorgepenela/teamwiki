import './Home.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PeopleIcon from '@material-ui/icons/People';
import 'masonry-layout/masonry';


const Home = ()=>{
  return(
    <>
      <div data-masonry='{ "itemSelector": ".MuiPaper-root" }'>
        <Card>
          <CardContent>
            <h3>Titulo del Wiki</h3>
            <p><PeopleIcon></PeopleIcon> Vos, Lucia Zuleta y 3 mas mas mas mas masa asdmasdma dmasd masdmsamd masdmasmdamsdamsdmas</p>
            <p>asdkjasdlk a</p>
          </CardContent>
          <CardActions>
            <button>gogogo!</button>
          </CardActions>
        </Card>

        <Card>
          <CardContent>
            <h3>Titulo del Wiki</h3>
            <p><PeopleIcon></PeopleIcon> Vos, Lucia Zuleta y 3 mas</p>
            <p>asdkjasdlk a</p>
            <p>asdkjasdlk a</p>
          </CardContent>
          <CardActions>
            <button>gogogo!</button>
          </CardActions>
        </Card>

        <Card>
          <CardContent>
            <h3>Titulo del Wiki</h3>
            <p><PeopleIcon></PeopleIcon> Vos, Lucia Zuleta y 3 mas</p>
          </CardContent>
          <CardActions>
            <button>gogogo!</button>
          </CardActions>
        </Card>

        <Card>
          <CardContent>
            <h3>Titulo del Wiki</h3>
            <p><PeopleIcon></PeopleIcon> Vos, Lucia Zuleta y 3 mas</p>
          </CardContent>
          <CardActions>
            <button>gogogo!</button>
          </CardActions>
        </Card>

        <Card>
          <CardContent>
            <h3>Titulo del Wiki</h3>
            <p><PeopleIcon></PeopleIcon> Vos, Lucia Zuleta y 3 mas</p>
            <p>asdkjasdlk a</p>
            <p>asdasdsad</p>
            <p>asdkjasdlk a</p>
          </CardContent>
          <CardActions>
            <button>gogogo!</button>
          </CardActions>
        </Card>

        <Card>
          <CardContent>
            <h3>Titulo del Wiki</h3>
            <p><PeopleIcon></PeopleIcon> Vos, Lucia Zuleta y 3 mas</p>
            
            <p>asdasdsad</p>
            <p>asdkjasdlk a</p>
          </CardContent>
          <CardActions>
            <button>gogogo!</button>
          </CardActions>
        </Card>

        <Card>
          <CardContent>
            <h3>Titulo del Wiki</h3>
            <p><PeopleIcon></PeopleIcon> Vos, Lucia Zuleta y 3 mas</p>
            <p>asdkjasdlk a</p>
            
          </CardContent>
          <CardActions>
            <button>gogogo!</button>
          </CardActions>
        </Card>
      </div> 

      
    </>
  );
}

export default Home;