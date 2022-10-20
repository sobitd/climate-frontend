import { Button } from '@mui/material';
import SelectedField from '../src/Components/SelectField'

function Settings() {
  const handleSubmit = (e) = {
    e.preventDefault();
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
