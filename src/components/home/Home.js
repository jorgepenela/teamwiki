import './Home.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PeopleIcon from '@material-ui/icons/People';



const Home = ()=>{
  return(
    <>
      <div className="masonry-wrapper">
        <div className="masonry">
        <Card className="masonry-item">
          <CardContent>
            <h3>Titulo del Wiki</h3>
            <p><PeopleIcon></PeopleIcon> Vos, Lucia Zuleta y 3 mas mas mas mas masa asdmasdma dmasd masdmsamd masdmasmdamsdamsdmas</p>
            <p>asdkjasdlk a</p>
          </CardContent>
          <CardActions>
            <button>gogogo!</button>
          </CardActions>
        </Card>

        <Card className="masonry-item">
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

        <Card className="masonry-item">
          <CardContent>
            <h3>Titulo del Wiki</h3>
            <p><PeopleIcon></PeopleIcon> Vos, Lucia Zuleta y 3 mas</p>
          </CardContent>
          <CardActions>
            <button>gogogo!</button>
          </CardActions>
        </Card>

        <Card className="masonry-item">
          <CardContent>
            <h3>Titulo del Wiki</h3>
            <p><PeopleIcon></PeopleIcon> Vos, Lucia Zuleta y 3 mas</p>
          </CardContent>
          <CardActions>
            <button>gogogo!</button>
          </CardActions>
        </Card>

        <Card className="masonry-item">
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

        <Card className="masonry-item">
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

        <Card className="masonry-item">
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
      </div>                    
    </>
  );
}

export default Home;