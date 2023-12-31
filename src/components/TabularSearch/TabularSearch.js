
import React from "react";

import {
 
  Typography,

} from "@mui/material";

import"../styles/TabularSearch.css";

import { Tabscontainer } from "./Tabscontainer";
import Codedetails from "./Codedetails";





export const TabularSearch = (isValueSelected) => {
  return (
    <div className='TabularContainer'>
 
<Typography
          className="tabshead"
          variant="subtitle1"
          fontFamily={"sans-serif"}
          color={"black"}
          noWrap
          
        >
          Tabular Search
        </Typography>
       
        
        <div className='codedetails'>

        <div className="codeHead"> 

    <Typography
            variant="subtitle1"
            fontFamily={"sans-serif"}
            color={" #4185d2"}
            fontWeight={600}
            sx={{
              borderBottom:"0.5px solid grey"
            }}
            
          >
        code details
          </Typography>
          </div>
    
     
          {isValueSelected && <Codedetails />}
          <Tabscontainer/>
          </div>
 
        

 

        
    </div>
  )
}
