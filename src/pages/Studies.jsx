import { Box, Button, Divider, Typography } from "@mui/material";
import studiesDB from "../utils/studiesDB";
import StudyListItem from "../components/StudyListItem";

const Studies = () => {
    return (
        <Box
        className={'pagePadding hoverUp'}
            sx={{
                width:'100%',
                height:'inherit',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                gap:'20px',
            }}>
                <Box
                sx={{
                    display:'flex',
                    justifyContent:'space-between',
                }}>
                    <Typography
                    variant="h2"
                    sx={{
                        fontSize:'30px',
                        fontWeight:'600',
                    }}>
                        Учебные материалы
                    </Typography>
                    <Button variant='contained'>Добавить методичку</Button>
                </Box>

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

                <Box
                sx={{
                    display:'grid',
                    gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))',
                    gridGap:'20px',
                }}> 
                    {
                        studiesDB.map((study)=>{
                            return (
                                <StudyListItem key={study.id} study={study}/>
                            )
                        })
                    }
                </Box>

        </Box>
    )
}

export default Studies;