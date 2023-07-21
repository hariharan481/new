import React from 'react'
import { useState } from "react";
import"../styles/IndexSearch.css";
import IndexTables from '../IndexTables';




import { DrugTables } from './DrugTables';

export const IndexSearch = () => {

  const [value, setValue] = useState(0);
  const [showTable, setShowTable] = useState(false);
  const [showIndx, setShowIndex] = useState(false);
  const [showDrug, setShowdrug] = useState(false);
  const handleIndexClick = () => {
    setShowIndex(!showIndx);
    setShowTable(false);
    setShowdrug(false);
  };
  const handleTableClick = () => {
    setShowTable(!showTable);
    setShowIndex(false);
    setShowdrug(false);
  };
  const handleDrugClick = () => {
    setShowdrug(!showDrug);
    setShowIndex(false);
    setShowTable(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShowIndex(false);
    setShowTable(false);
    setShowdrug(false);
  };

  return (
    

<div className="indexcontainer">
      <button className="btn1"
        onClick={handleIndexClick}
        >
        {showIndx ? "" : ""}
        Index
      </button>
      <div className="IndexTablecontainer">

      {showIndx && <IndexTables/>}
      </div>
      <button  className="btn2"
        onClick={handleTableClick}
      >
        {showTable ? "" : ""}
        Neoplasam
      </button>

      <div className="neoplasmcontainer">


</div>

    
      <button className="btn3"
      
        onClick={handleDrugClick}
      >
        {showDrug ? "" : ""}
        Drugs
      </button>
      <div className="drugcontainer">


      {showDrug && <DrugTables/>}
      </div>
    </div>
  
  )
}
