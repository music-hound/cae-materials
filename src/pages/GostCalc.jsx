/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";

const GostCalc = ()=>{

    return (
        <Box
        className={'pagePadding'}
            sx={{
                width:'100%',
                height:'inherit',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
            }}>
                <Typography
                variant="h2"
                sx={{
                    fontSize:'30px',
                    fontWeight:'600',
                    mb:'20px'
                }}>
                    Калькулятор расчета превышения температуры
                </Typography>

                <Divider
                sx={{
                    mb:2,
                }}
                />

                <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'10px',
                }}
                >
                </Box>

        </Box>
    )
}

export default GostCalc;