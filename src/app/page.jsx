import Nav from "./(component)/Nav";
import Test from "./(component)/Test";
import Hero from "./(component)/Hero"
import About from "./(component)/About"
import Cards from "./(component)/Cards"
import Weddings from "./(component)/Weddings";
import Guest from "./(component)/Guest";
import Book from "./(component)/Book"





export default function Home() {
  return (
    <div>

      {/* <Test /> */}
      <Hero />
      {/* <Book /> */}
      <About />
      <Cards />
      <Weddings />
      <Guest />
      
      
    

    </div>
    
  );
}
