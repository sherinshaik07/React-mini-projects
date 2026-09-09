import HelloReact from './days/day1/HelloReact';
import ProfileCard from './days/day1/ProfileCard';
import Skills from './days/day1/Skills';
import UserCard from './day2/UserCard';
import Product from './day2/Product';
function App(){
  return(
    <div> 
    {/*<h1>DAY 1</h1> <HelloReact/>
     
      <hr></hr>
      <ProfileCard/>
      <hr></hr>
      <Skills/>*/}
      <h1>DAY 2</h1>
      <h2>PROPS</h2>
      <UserCard name="sherin" age="20" role="software engineer"/>
      <UserCard name="ravi" age="22" role="AI engineer"/>
      <UserCard name="Mona" age="20" role="RAG engineer"/>
      <h1>PRODUCT DETAILS </h1>
      <Product name ="AC" price="20000" category="Appliances"/>
      <Product name ="TV" price="20000" category="Appliances"/>
    </div>
  );
}
export default App;