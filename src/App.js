import { useEffect } from "react";
import Pagination from "./components/Pagination";

function App({ posts}) {

  useEffect(()=> {
    
  }, [])

  return (
    <div className=" min-h-screen">
      <Pagination/>
    </div>
  );
}

export default App;
