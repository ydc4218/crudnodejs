import { useState } from 'react';
import InputLabel from './Items/InputLabel';
import Input from './Items/Input';
import { Grid, Button } from '@material-ui/core';
import '../../Style/Style.css';
const Fetch = require('node-fetch');



const Register = () => {
  const [DataRegister, setDataRegister] = useState([]);

  const onsubmit =()=> {

    Fetch('http://localhost:3000/urljson', {
    method: 'POST',
    body: JSON.stringify(DataRegister)
  })
  .then(res => res.text())
  .then(res => console.log(res))
  .catch(err => {
    console.error(err)
  })


  }

  

  return (
    <Grid className="grid mt-5">
      <InputLabel Id="UserId"></InputLabel>

      <Input
        State={DataRegister}
        SetState={setDataRegister}
        Name={'userId'}
      ></Input>

      <InputLabel Id="Title"></InputLabel>

      <Input
        State={DataRegister}
        SetState={setDataRegister}
        Name={'title'}
      ></Input>

      <InputLabel Id="Body"></InputLabel>

      <Input
        State={DataRegister}
        SetState={setDataRegister}
        Name={'body'}
      ></Input>

      <div className="container mt-4">
        <Button
          color="primary"
          variant="contained"
          onClick={onsubmit}
        >
          Register
        </Button>
      </div>
    </Grid>
  );
};
export default Register;
