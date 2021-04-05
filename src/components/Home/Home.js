import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';
import Products from '../Products/Products';
import './Home.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles( ( theme ) => ( {
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop:"50px"
    },
} ) );


const Home = () => {
    const [loggedInUser, setLoggedInUser] = useContext( UserContext );

    const [products, setProducts] = useState( [] );
    const [spinner, setSpinner] = useState( true )

    useEffect( () => {
        fetch( 'https://apple-cobbler-58977.herokuapp.com/products' )
            .then( res => res.json() )
            .then( data => {
                setProducts( data )
                setSpinner( false )
            } )
    }, [] )



    const handleProducts = ( product ) => {
        const key = product._id;
        const date = new Date().toISOString().slice( 0, 10 )
        const user = loggedInUser.name
        const email = loggedInUser.email
        fetch( `https://apple-cobbler-58977.herokuapp.com/orders`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify( { key, date, user, email } )

        } )

    }
    const classes = useStyles();
    return (
        <div>
            {spinner ?
                <div className={classes.root}>
                    <CircularProgress />
                </div>

                : <div id='home'>

                    {products.map( product => <Products
                        key={product._id}
                        product={product}
                        handleProducts={handleProducts}
                    ></Products> )}

                </div>}

        </div>
    );
};

export default Home;
