import React from 'react'

import { Route, Routes } from "react-router-dom";

import ItemRequestPage from "./components/itemrequest/ItemRequestPage";
import MainMenuPage from './components/mainmenupage/MainMenuPage';
import Billing from './components/billing/Billing'
import Inventory from './components/inventory/Inventory'
import SalesReportPage1 from './components/salesreport/SalesReportPage1'


function App () {

  const style = {
    backgroundColor: 'grey',
  };

  return (
    <div className="App" style={ style }>

      <Routes>
        <Route path='/' element={ <MainMenuPage /> } />
        <Route path='/billing' element={ <Billing /> } />
        <Route path='/inventory' element={ <Inventory /> } />
        <Route path='/itemrequest' element={ <ItemRequestPage /> } />
        <Route path='/salesreport' element={ <SalesReportPage1 /> } />
      </Routes>

    </div>
  );
}

export default App;
