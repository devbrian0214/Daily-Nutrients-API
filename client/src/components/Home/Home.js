import React from 'react';
import { Container, Grow, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import styles/images
import useStyles from './styles.js';
import HEP from '../../image/HEP.jpg';

import { Post } from '../../constants/constantTypes.js';
const Home = () => {
    const classes = useStyles();

    return (
        <Grow in>
            <Container className={classes.mainContainer}>
                <Grid container justify='center' alignItems='center' >
                    <img className={classes.image} src={HEP} alt="icon" />
                    <Button component={Link} to={Post} >Clickme</Button>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home;
