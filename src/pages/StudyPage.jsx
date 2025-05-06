import { Box, Divider, Typography } from "@mui/material";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import studiesDB from "../utils/studiesDB";
// import DownloadItem from "../components/DownloadItem";
// import Editor from "../components/Editor";

const StudyPage = () => {

    const { id } = useParams();
    // const studies = useSelector((state) => state.studies.studies);
    const studies = studiesDB;
    const study = studies.find((study) => study.id === Number(id));
    

    return (
        <Box
        className={'pagePadding'}
        sx={{
            width:'100%',
            height:'inherit',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            gap:'20px'
        }}>
            <Typography
            variant="h2"
            sx={{
                fontSize:'30px',
                fontWeight:'600',
            }}>
                {study.name}
            </Typography>

            <Divider />

            {/* <Box
            sx={{
                width:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'end',
                gap:'20px',
            }}>
                <Box>
                    <DownloadItem ico={'💾'} label={'Нагрев медной шины.mph'}/>
                    <DownloadItem ico={'📕'} label={'Нагрев медной шины.pdf'}/>
                </Box>
                <img
                style={{width:'300px', alignSelf:'end'}}
                src={ import.meta.env.BASE_URL + '/study/thumbnails/' + study.thumbnail } />
            </Box> */}

            <div>{ <div dangerouslySetInnerHTML={{ __html: studiesDB[id].data.text }} /> }</div>

            

        </Box>
    );
}
export default StudyPage;