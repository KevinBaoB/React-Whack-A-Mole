import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole(props) {

  return (
    <div className="den">
      {props.isMoleVisible 
      && 
      
      <img src={MoleIcon} className="Mole" alt="Mole" onClick={props.onMoleWhacked}/>}
    </div>
  )
}

export default Mole
