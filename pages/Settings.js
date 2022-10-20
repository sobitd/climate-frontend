import { Button, CircularProgress, Typography } from '@mui/material';
import SelectedField from '../src/Components/SelectField'
import Axios from '../src/Hooks/Axios';


function Settings() {
  const {res,error,loading} = Axios({url: "" })
  if(loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Typography variant='h6' nt={20} color="red">
        Hey, there seems to be something wrong!
      </Typography>
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <SelectedField label="Category "/>
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  )
}

export default Settings;
