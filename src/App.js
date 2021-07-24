import Header from "./components/Header"
import Footer from "./components/Footer"
 
import{ Container } from 'react-bootstrap'
function App() {
  return (
    <div>
      <Header />
      <main>
        <Container></Container>
     <h1>Welcom to 1st website</h1>
     </main>
     <Footer />
    </div>
  );
}

export default App;
