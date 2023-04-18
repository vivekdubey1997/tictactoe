import { GiCircle } from "react-icons/gi";
import { FaTimes, FaPen } from "react-icons/fa";


const Icon=({player_icon})=>{

   switch(player_icon){
    case `circle`:
        return <GiCircle/>
   case `cross`:
    return <FaTimes/>
    default :
    return <FaPen/>
   }
}

export default Icon