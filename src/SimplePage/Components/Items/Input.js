import { TextField } from '@material-ui/core';

const Input = ({ State, SetState, Name }) => {
  const onChange = (e) => {
    SetState({ ...State, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-2">
      <TextField onChange={onChange} name={Name}></TextField>
    </div>
  );
};
export default Input;
