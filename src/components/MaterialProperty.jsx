import { Box } from "@mui/material";

const MaterialProperty = ( { label, property,  } )=>{

    return (
        <Box
        onClick={()=>{alert('!')}}
        sx={{
            maxWidth:'600px',
            wordWrap: "break-word",
            width:'100%',
            border:'1px solid',
            borderColor:'secondary.main',
            borderRadius:'10px',
            padding:'20px',
            cursor:'pointer',
            display:'flex',
            flexDirection:'column',
            gap:'20px',
        }}></Box>
    )
}

export default MaterialProperty;