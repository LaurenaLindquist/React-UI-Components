import React from 'react';
import './App.css';
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
// import Footer from "./footercomponents/footer";


const App = () => {
  return (
    <div>
      <HeaderContainer/>
      <CardContainer/>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
