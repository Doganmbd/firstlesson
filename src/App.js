
import './App.css';
import Header from "./component/header";

const name = "Mustafa Bilal"
const surname = "DOĞAN"

const isLog = false

function App() {
  return (
    <div>
      <h1>Merhaba Bilal</h1>
      <Header/>
      <Header></Header>
      <h1>{name}{surname}</h1>
      <h1>{`benim adım ${name},  soyadım ${surname}`}</h1>
      <h1>{isLog && `İkinci defa söylüyorum Benim adım ${name}`}</h1>
      <h1>{!isLog && `İkinci defa söylüyorum Benim adım ${name} değil. `}</h1>
      <h1>{isLog ? `İkinci defa söylüyorum Benim adım ${name}` : `İkinci defa söylüyorum Benim adım ${name} değil. `}</h1>


      
    </div>
  );
}
export default App ;