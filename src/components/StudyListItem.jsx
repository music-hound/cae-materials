import PropTypes from 'prop-types';
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const StudyListItem = ( { study } ) => {
    return (
        <Link to={`/studies/${study.id}`} style={{ textDecoration: 'none', color: 'inherit' }} >
            <Box
            sx={{
                cursor:'pointer',
                border: '1px solid',
                borderColor: 'border.soft',
                borderRadius:'10px',
                transition: '0.3s',
                padding: '20px',
                display:'flex',
                flexDirection:'column',
                gap:'20px',
                '&:hover' : {
                    borderColor: 'primary.main',
                },
            }}>
                <Typography
                variant='h2'
                sx={{
                    margin:0,
                    fontSize:'24px',
                    fontWeight:'600',
                }}>
                    {study.name}
                </Typography>

                <img
                style={{
                    border: '1px solid #ccc',
                }}
                src={ import.meta.env.BASE_URL + '/study/thumbnails/' + study.thumbnail } />
                <Typography>
                    {study.description}
                </Typography>
                
            </Box>
        </Link>
    )
}

StudyListItem.propTypes = {
    study: PropTypes.object.isRequired,
};

export default StudyListItem;