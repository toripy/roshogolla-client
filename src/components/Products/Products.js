import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( {
    root: {

        margin: 10,



    },
    media: {
        height: '25em'



    },
    cardAction: {
        display: "flex",
        justifyContent: "space-between",
        margin: 10

    }
} );

const Products = ( props ) => {
    const { price, imageURL } = props.product
    const { handleProducts } = props;

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageURL}
                    title="Contemplative Reptile"
                />
            </CardActionArea>
            <CardActions className={classes.cardAction}>
                <Typography gutterBottom variant="h5" color="primary" component="h2">
                    ${price}
                </Typography>
                <Button onClick={() => handleProducts( props.product )} variant="contained" color="primary">
                    Buy Now
            </Button>
            </CardActions>
        </Card>
    );
};

export default Products;