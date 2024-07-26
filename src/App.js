import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import Signup from './FormControl/Signup';
import Signin from './FormControl/Signin'
function App() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="App">
      <Paper elevation={3} style={{ padding: "10px" }}>

{checked ? (

        <Chip
          icon={<FaceIcon />}
          label="Sign Up"
          color="primary"
          variant="outlined" />
        ) : (
        <Chip
          icon={<LockIcon />}
          label="Sign In"
          color="primary"
          variant="outlined" />
        )}
          <br/>

<Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />

<br/>

{checked ?  <Signup/> : <Signin/>}
      </Paper>
    </div>
  );
}

export default App;
