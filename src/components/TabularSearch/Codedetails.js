
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import"../styles/Codedetails.css";
import React, { useEffect, useState } from "react";
const Codedetails = () => {
  const [result, setResult] = useState(null);
  const [isClosed, setIsClosed] = useState(false);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (global.values && global.values.code && global.years) {
          const response = await fetch(`/codes/${global.values.code}/details/?version=${global.years}`);
          if (response.ok) {
            const data = await response.json();
            setResult(data);
          } else {
            console.error("Failed to fetch data");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [global.values]);
  const handleClose = () => {
    setIsClosed(true);
    window.location.reload();
  };
  console.log("our result is", result);
  return (
    <div className="division">
      {!isClosed && global.values && global.values.code && (
        <div>
          <div className="codecontainer">
            <Button
              disableFocusRipple
              disableRipple
              sx={{
                border: "0.5px solid green",
                textAlign: "center",
                height: "3vh",
                width: "6vw",
                backgroundColor: "#ADD8E6",
                marginLeft: "6%",
              }}
            >
              {global.values.code}
              <Close
                sx={{
                  width: "1vw",
                  ml: "2%",
                  color: "#4169E1",
                }}
                onClick={handleClose}
              />
            </Button>
          </div>
          <table >
            <thead>
              
            </thead>
            <tbody>
              {result && (
                <tr key={result.code}>
                  <td>{result.code}</td>
                  <td className="resultdes">{result.longDescription}</td>
                  <td className="">
                    {result.billable === true ? (
                      <Button
                        variant="contained"
                        sx={{
                          width: "10vw",
                          height: "1vh",
                          color: "white",
                          fontFamily: "sans-serif",
                          ml: "3%",
                          backgroundColor: "green",
                          textTransform: "lowercase",
                          fontWeight: "700px",
                          textAlign: "center",
                          "&:hover": {
                            backgroundColor: "green",
                          },
                        }}
                      >
                        Billable Codes
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        disableElevation
                        disableFocusRipple
                        sx={{
                          width: "10vw",
                          height: "1vh",
                          color: "white",
                          fontFamily: "sans-serif",
                          ml: "4%",
                          backgroundColor: "orange",
                          textTransform: "lowercase",
                          fontWeight: "700px",
                          textAlign: "center",
                          "&:hover": {
                            backgroundColor: "orange",
                          },
                        }}
                      >
                        NonBillable Codes
                      </Button>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default Codedetails;

