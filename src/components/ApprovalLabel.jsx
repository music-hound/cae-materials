import PropTypes from 'prop-types';
import { Box } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

const ApprovalLabel = ( { approved } ) => {
    return (
        <Box
        sx={{
            mr:2
        }}>
                { approved ? <VerifiedIcon sx={{ color:'#0f0' }} /> : <NewReleasesIcon sx={{ color:'yellow' }} /> }
        </Box>
    )
}

ApprovalLabel.propTypes = {
    approved : PropTypes.bool.isRequired,
}

export default ApprovalLabel;