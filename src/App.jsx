import React, { useState , useEffect } from 'react';
import { Container } from '@mui/material';
import Searcher from './components/Searcher';
import UserCard from './containers/userCard';
import { getGithubUser } from "./services/user";

const App = () => {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState('inputUser');
  const [notFound, setNotFound] = useState(false);

  const gettinUser = async (user) => {
    const userResponse = await getGithubUser(user)

    if (userState === 'octocat') {
      localStorage.setItem("octocat", userResponse)
    }

    // en caso de que el usuario no exista va a venir dentro de la respuesta un mensaje de Not Found
    if (userResponse.message === "Not Found") {
    // si no existe vamos a traer el octocat y lo seteamos 
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    // si existe el usuario lo seteamos y va a guardar la informacion de la respuesta
    } else {
      setUserState(userResponse);
    }
  }

  useEffect (() => {gettinUser(inputUser)}, [inputUser]);

  return (
    <Container
      sx={{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  );
};

export default App;
