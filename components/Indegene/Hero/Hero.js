import { Grid, Typography } from "@mui/material";
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <Grid container 
            className={styles.Hero}
            sx={{
                backgroundColor:'rgb(3, 78, 162)',
                color: '#fff',
                alignItems:'center',
            
            }}>
            <Grid item container sx={{
                alignItems:'center'
            }} >
                <Grid item container 
                className={styles.section_1}>
                    <Typography variant="div" className={styles.heading}  >
                        Pharmaceuticals
                    </Typography>
                    <Typography variant="div" className={styles.sub_heading} >
                    Improve the effectiveness, efficiency and experience of your operations
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Hero;