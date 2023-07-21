import React, { Fragment, useState } from "react";
import "../styles/Pagination.css";
import { Autocomplete, Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const IndexTables = () => {
  const items = [
    "0-9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const [selectedAlphabet, setSelectedAlphabet] = useState(null);

  const handleClick = (alphabet) => {
    setSelectedAlphabet(alphabet);

    console.log("Selected alphabet:", alphabet);
    global.alphabets = alphabet;
    console.log(global.alphabets);
  };
  const [result, setResult] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [first, setFirst] = useState("");
  const [word, setWord] = useState("");
  const [isValueSelected, setIsValueSelected] = useState(false);
  function handleChange(e) {
    setWord(e.target.value);
  }
  return (
    <div>
      <div className="center">
        <div className="pagination">
          {items.map((item, index) => (
            <a key={index} onClick={() => handleClick(item)}>
              {item}
            </a>
          ))}
        </div>
      </div>
      <Fragment>
        <Autocomplete
          id="users"
          defaultValue={null}
          getOptionLabel={(result) => `${result.id} ${result.description}`}
          options={result}
          sx={{
            width: "20%",
            backgroundColor: "white",
            mt: "1%",
            ml: "1%",
            display: "inline-block",
            "& input": {
              height: "5px",
              bgcolor: "background.paper",
              color: (theme) =>
                theme.palette.getContrastText(theme.palette.background.paper),
            },
          }}
          isoptionequalToValue={(option, value) =>
            option.description === value.description
          }
          noOptionsText={"PLEASE ENTER VALID CODES"}
          open={open}
          onInputChange={(_, value) => {
            if (value.length === 0) {
              if (open) setOpen(false);
            } else {
              if (!open) setOpen(true);
            }
          }}
          onClose={() => setOpen(false)}
          popupIcon={<SearchIcon sx={{ marginLeft: "60px" }} />}
          onChange={(event, newValue) => {
            setFirst(newValue);
            setIsValueSelected(true);
          }}
          autoSelect
          renderOption={(props, result) => (
            <Box {...props} key={result.id}>
              {result.id} {result.description}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={handleChange}
              placeholder="filter"
            />
          )}
        />
      </Fragment>
      <div></div>
    </div>
  );
};

export default IndexTables;
