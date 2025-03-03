/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

const CustomButton = ( { label, handleClick } )=>{

    return (
        <Button
        fullWidth
        onClick={handleClick}
        variant="contained"
        sx={{
            height:'40px',
            border:'1px solid #ffffff44',
            borderRadius:'10px',
            mt:2
        }}
        >
            {label}
        </Button>
    )
}

export default CustomButton;