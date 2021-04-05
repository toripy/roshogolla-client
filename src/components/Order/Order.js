import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles( {
    table: {
        minWidth: 650,
    },
} );


const Order = () => {

    const [loggedInUser, setLoggedInUser] = useContext( UserContext );
    const [orderedProduct, setOrderedProduct] = useState( [] )
    const [success, setSuccess] = useState( false )

    const orderDocument = {
        ...orderedProduct,


    }
    useEffect( () => {
        fetch( 'https://apple-cobbler-58977.herokuapp.com/orderedProduct' )
            .then( res => res.json() )
            .then( data => setOrderedProduct( data ) )
    }, [] )
    useEffect( () => {

    } )

    const handleOrder = () => {
        fetch( `https://apple-cobbler-58977.herokuapp.com/ordered`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify( orderDocument )

        } )
            .then(
                fetch( 'https://apple-cobbler-58977.herokuapp.com/deleteAddedProduct', {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json'
                    }
                } )
            )
        setSuccess( !success )
    }

    const classes = useStyles();


    return (
        <div style={{ width: "80%", margin: 'auto' }}>
            {!success ? <div >
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Price</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orderedProduct.map( ( row ) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.quantity}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>

                                </TableRow>
                            ) )}
                        </TableBody>

                    </Table>

                </TableContainer>
                <Button onClick={handleOrder} style={{ float: "right", marginTop: '10px' }} variant="contained" color="secondary">
                    Place Order
  </Button>


            </div> : null}
            {success ? <div>
                <p style={{ color: 'green', textAlign: 'center' }}>your order placed successfully</p>
            </div> : null}
        </div>

    );
};

export default Order;