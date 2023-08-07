import './App.css';
import { TableBasic } from './tables/tableBasic';
import {TableAxios} from './tables/tableAxios';
import {TableJson} from './tables/TableJson';




function App() {
  return (
    <div className="App">
     <TableBasic />
     {/* <TableJson /> */}
     {/* <TableAxios /> */}
    </div>
  );
}

export default App;
