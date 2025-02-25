/* eslint-disable react/prop-types */
import { Paper } from "@mui/material";

const GostCalc = ()=>{

    return (
        <Paper
        onClick={()=>{alert('!')}}
        sx={{
            maxWidth:'600px',
            wordWrap: "break-word",
            width:'100%',
            borderRadius:'10px',
            padding:'20px',
            cursor:'pointer',
            display:'flex',
            flexDirection:'column',
            gap:'20px',
            position:'relative'
        }}>

        </Paper>
    )
}

export default GostCalc;