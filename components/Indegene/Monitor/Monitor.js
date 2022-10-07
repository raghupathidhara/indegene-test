import { Grid, Typography } from "@mui/material";
import styles from './Monitor.module.css'

const Monitor = () => {
    return (
        <Grid container className={styles.Monitor}>
            <Grid item container className={styles.section_1}>
                <Typography variant="h3" className={styles.monitor_heading} sx={{color:'#000'}} >
                Modernize your operations for sustainable growth
                </Typography>
            </Grid>
            <Grid item container
                className={styles.section_2}>
                <Grid item xs={12} sm={5.5} md={5.5} lg={5.5} xl={5.5} 
                    className={styles.box}>
                    <Typography variant="h3"
                        className={styles.heading}>
                        Accelerate enterprise-wide transformation
                    </Typography>
                    <Typography variant="div"
                        className={styles.content} >
                        We bring your bold vision to life with proven expertise in clinical, medical and commercial operations, and deep understanding of therapies and diseases.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5.5} md={5.5} lg={5.5} xl={5.5}
                    className={styles.box}>
                    <Typography variant="h3"
                    className={styles.heading}>
                        Scale up outcomes faster
                    </Typography>
                    <Typography variant="div"
                    className={styles.content} >
                        Our fit-for-purpose technology contextualizes artificial intelligence, machine learning, natural language processing for life sciences applications to accelerate adoption at scale.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5.5} md={5.5} lg={5.5} xl={5.5}
                    className={styles.box}>
                    <Typography variant="h3"
                    className={styles.heading}>
                        Elevate your experience
                    </Typography>
                    <Typography variant="div"
                    className={styles.content} >
                    Our agile, global operations with flexible engagement models elevate your stakeholders and your experience as you grow around the world.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5.5} md={5.5} lg={5.5} xl={5.5}
                    className={styles.box}>
                    <Typography variant="h3"
                    className={styles.heading}>
                        Scale up outcomes faster
                    </Typography>
                    <Typography variant="div"
                    className={styles.content} >
                        Our fit-for-purpose technology contextualizes artificial intelligence, machine learning, natural language processing for life sciences applications to accelerate adoption at scale.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Monitor;