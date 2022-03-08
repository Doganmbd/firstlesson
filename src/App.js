
import './App.css';
import Header from "./component/header";

const name = "Mustafa Bilal"
const surname = "DOĞAN"
function App() {
  return (
    <div>
      <h1>Merhaba Bilal</h1>
      <Header/>
      <Header></Header>
      <h1>{name}{surname}</h1>
      <h1>{`benim adım ${name},  soyadım ${surname}`}</h1>

      
    </div>
  );
}
export default App ;