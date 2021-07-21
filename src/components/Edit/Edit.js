import './Edit.css';
import Fab from '@material-ui/core/Fab';
import MicIcon from '@material-ui/icons/Mic';
import { Checkbox, FormGroup, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import LinearProgress from '@material-ui/core/LinearProgress'

const player = document.getElementById('player');


const Edit = ()=>{
  return(
    <div className="containter">
      <div className="row">
        <div className="col-sm-4">

        <form className="formulario">
          <TextField label="Título" variant="outlined"  required  size="small" fullWidth />
          <br></br><br></br>

          <TextField label="Descripción" variant="outlined"  required  size="small" multiline  fullWidth rows={3} />
          <div><span id="char">0</span>/280</div>
          
          <Fab color="inherit" aria-label="add" size="small">
            <MicIcon></MicIcon>
          </Fab>
          <audio id="player" controls></audio>

          <hr></hr>
          <h4>Categorías</h4>
          <FormGroup row>
            <label><Checkbox></Checkbox> Categoria 1</label>
            <label><Checkbox></Checkbox> Categoria 2</label>
            <label><Checkbox></Checkbox> Categoria 3</label>
            <Button color="primary">Nueva</Button>
          </FormGroup>
          <hr></hr>
          <h4>Similares / Afines</h4>
          <TextField id="buscarAfines" label="Buscar..." variant="filled"  fullWidth  size="small" />
          <LinearProgress></LinearProgress>
          <Fab id="guardar" size="large" style={{backgroundColor:'orangered',color:'#fff'}}>
            <SaveIcon></SaveIcon>
          </Fab>
        </form>

        </div>
      </div>      
    </div>
  );    
}

export default Edit;