import Navi from './components/Navbar/Navbar'
import './App.css'
import Card from './components/Section/card'
import Data from  './components/constant/data'
import Footer from './components/Footer/Footer'
console.log(Data);

function App() {

  return (
    <>
      <Navi />
      <div className="containerQuote">
          {
            Data.map((ele , index)=>{
              return <Card {...ele} key={index}/>
              
            })
          }
      </div>
      <Footer />
    </>
  )
}

export default App
