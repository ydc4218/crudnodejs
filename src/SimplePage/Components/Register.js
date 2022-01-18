import { useState } from 'react';
import InputLabel from './Items/InputLabel';
import Input from './Items/Input';
import { Grid, Button } from '@material-ui/core';
import axios from 'axios'
import '../../Style/Style.css';




const Register = () => {
  const [DataRegister, setDataRegister] = useState([]);

  const onsubmit =()=> {

    axios({
      method: 'post',
      url: 'http://localhost:3000/create',
      data: DataRegister
  }).then(() => {
    console.log('Success')
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
          type="submit"
        >
          Register
        </Button>
      </div>
    </Grid>
  );
};
export default Register;
