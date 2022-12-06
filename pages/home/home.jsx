import { Link } from "react-router-dom";
import { Button } from "../components";
const Home = () =>{
  return (<>
    <h1>Home</h1>
    <Link to='/login'>
     <Button title="Fazer login">
    
    </Button>
    </Link>
    
  
</>
  );
}

export { Home }