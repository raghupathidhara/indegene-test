import { Grid, Typography } from "@mui/material"
import styles from './Video.module.css'

const Video = () => {
    return (
        <Grid container className={styles.Video}>
            <Grid item sx={12} sm={4} md={5} lg={5} xl={5} 
            className={styles.section_1}>
                <Typography variant="div"
                    className={styles.content}>
                Opportunities for the pharmaceutical industry from the digitization of healthcare
                </Typography>
            </Grid>
            <Grid item sx={12} sm={7} md={6} lg={6} xl={6}
                className={styles.section_2}>
            <iframe className={styles.video_section} src="https://www.youtube.com/embed/eHUjwiVQqV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Grid>
        </Grid>
    );
}

export default Video;