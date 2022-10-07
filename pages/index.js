import { Grid } from "@mui/material";
import Hero from "../components/Indegene/Hero/Hero";
import Monitor from "../components/Indegene/Monitor/Monitor";
import Operation from "../components/Indegene/Operations/Operation";
import Percentage from "../components/Indegene/Percentage/Percentage";
import Video from "../components/Indegene/Video/Video";

const Home = () => {
  return (
    <Grid container>
        <Hero/>
        <Video/>
        <Percentage/>
        <Operation/>
        <Monitor/>
    </Grid>
  );
}

export default Home;