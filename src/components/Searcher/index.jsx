import React, { useState } from 'react';
import { Stack, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Searcher = (props) => {

    const { setInputUser } = props;


    const [ valueInput, setValueInput] = useState("");
    const onSearchValueChange = (event) => {
        const inputValue = event.target.value;
        setValueInput(inputValue);
    }
    const handleSubmit = () => {
        setInputUser(valueInput);
    };

  return (
    <Stack
      direction="row"
      sx={{
        marginTop: '25px',
        width: '80%',
      }}
    >
      <TextField
        id="outlined-basic"
        label="GitHub User"
        variant="standard"
        placeholder="Ingresa el nombre de usuario"
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: '80%',
        }}
      />
      <IconButton
      onClick={handleSubmit}
      size="small"
        sx={{
          left: '-50px',
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Searcher;
