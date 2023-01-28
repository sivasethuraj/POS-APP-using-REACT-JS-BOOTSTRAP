import React, { useState, createContext } from 'react'

import { Route, Routes } from "react-router-dom";

import ItemRequestPage from "./components/itemrequest/ItemRequestPage";
import MainMenuPage from './components/mainmenupage/MainMenuPage';
import Billing from './components/billing/Billing'
import Inventory from './components/inventory/Inventory'
import SalesReportPage1 from './components/salesreport/SalesReportPage1.jsx'
import Edit from './components/inventory/Edit';


export const InventoryContext = createContext();

function App () {
  const [ tableOfItems, setTableOfItems ] = useState( [] );
  const [ clickedId, setClickedId ] = useState( '' );
  const style = {
    backgroundColor: '#aaaeb1af',
    minHeight: '97.8vh',
    width: '99.9vw',
  };

  return (
    <div className="App" style={ style }>
      <InventoryContext.Provider value={ { tableOfItems, setTableOfItems, setClickedId } }>

        <Routes>
          <Route path='/' element={ <MainMenuPage /> } />
          <Route path='/billing' element={ <Billing /> } />
          <Route path='/inventory' element={ <Inventory /> } />
          <Route path='/itemrequest' element={ <ItemRequestPage /> } />
          <Route path='/salesreport' element={ <SalesReportPage1 /> } />
          <Route path='/inventory/edit' element={ <Edit clickedId={ clickedId } /> } />
        </Routes>

      </InventoryContext.Provider>
    </div>
  );
}

export default App;
