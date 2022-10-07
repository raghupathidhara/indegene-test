import { Grid, Typography } from "@mui/material";
import styles from './Percentage.module.css'

const Percentage = () => {
    return (
        <Grid container className={styles.Percentage}>
            <Grid item container
                className={styles.section}>
                <Grid item className={styles.box}>
                    <Typography variant="h3"
                        className={styles.heading}>
                        25-30%  
                    </Typography>
                    <Typography variant="div"
                        className={styles.content} >
                        average SG&A cost as a percentage of sales
                    </Typography>
                </Grid>
                <Grid item className={styles.box}>
                    <Typography variant="h3"
                    className={styles.heading}>
                        15-20% 
                    </Typography>
                    <Typography variant="div"
                    className={styles.content} >
                    average R&D cost as a percentage of sales
                    </Typography>
                </Grid>
                <Grid item className={styles.box}>
                    <Typography variant="h3"
                    className={styles.heading}>
                        12 Years  
                    </Typography>
                    <Typography variant="div"
                    className={styles.content} >
                        average time from patent filing to market launch
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Percentage;