/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

const DownloadItem = ( { ico, label, handleClick } )=>{

    return (
        <>
            <Box
            className={'download'}
            onClick={handleClick}
            sx={{
                minWidth:'300px',
                cursor:'pointer',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                gap:'10px',
                height:'40px',
                border: '1px solid',
                borderColor: 'border.soft',
                borderRadius:'10px',
                transition:'0.3s',
                ":hover":{
                    borderColor: 'primary.main',
                },
                ":active":{
                    scale:'1.04',
                    borderColor: 'primary.main',
                },
            }}
            >
                <div>{ico}</div><div>{label}</div>
            </Box>
        </>
    )
}

export default DownloadItem;