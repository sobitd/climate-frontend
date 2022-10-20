import React, { useState } from 'react'
import { Box } from '@mui/system'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
const {label} = props;


function SelectField() {
    const handleChange = () => {
        const [value, setValue] = useState('')
    }

  return (
    <Box marginTop={3} width="100%">
        <FormControl size="small">
            <InputLabel value={value} label={label} onChange={handleChange}></InputLabel>
            <Select>
                <MenuItem>Options 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
            </Select>
        </FormControl>

    </Box>
  )
}

export default SelectField