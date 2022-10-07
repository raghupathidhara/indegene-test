import { Grid, Typography } from "@mui/material";
import styles from './Operation.module.css'

const Operation = () => {
    return (
        <Grid container className={styles.Operation}
            sx={{
                backgroundColor:'#ED0677',
            }}>
            <Grid item container className={styles.section_1}>
                <Typography variant="h3" className={styles.operation_heading} sx={{color:'#fff'}} >
                    Pharmaceutical companies’ operations are
                </Typography>
            </Grid>
            <Grid item container
                className={styles.section_2}>
                <Grid item className={styles.box}>
                    <Typography variant="h3"
                        className={styles.heading}>
                        Suboptimal 
                    </Typography>
                    <Typography variant="div"
                        className={styles.content} >
                        to sustain competitive advantage over the long term
                    </Typography>
                </Grid>
                <Grid item className={styles.box}>
                    <Typography variant="h3"
                    className={styles.heading}>
                        Unscalable 
                    </Typography>
                    <Typography variant="div"
                    className={styles.content} >
                    for personalized patient, physician and regulator experience
                    </Typography>
                </Grid>
                <Grid item className={styles.box}>
                    <Typography variant="h3"
                    className={styles.heading}>
                        Inflexible
                    </Typography>
                    <Typography variant="div"
                    className={styles.content} >
                        to adapt to global and local market requirements efficiently
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Operation;