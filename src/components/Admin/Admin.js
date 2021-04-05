import React, { useEffect, useState } from 'react';
import {
    makeStyles,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import AddedForm from '../AddedForm/AddedForm';
import DeleteItem from '../DeleteItem/DeleteItem';

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        display: "flex"

    },
    manageItem: {
        width: "100%",
        maxWidth: 200,
        backgroundColor: "#203D37",
        color: 'white',
        minHeight: 500
    }
} ) );


const Admin = () => {
    const classes = useStyles();

    const [clickItem, setClickItem] = useState( 0 )
    const [products, setProducts] = useState( [] );

    const onSubmit = ( data ) => {
        const eventData = {
            name: data.name,
            width: data.width,
            price: data.price,
            imageURL: imageURL,
        }
        fetch( "https://apple-cobbler-58977.herokuapp.com/addProduct", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( eventData )
        } )
            .then( res => res.json() )
            .then( data => {

            } )

    };
    useEffect( () => {
        fetch( 'https://apple-cobbler-58977.herokuapp.com/products' )
            .then( res => res.json() )
            .then( data => setProducts( data ) )
    }, [] )



    const [imageURL, setImageURL] = useState( null )
    const handleImageUpload = event => {

        const imageData = new FormData();
        imageData.set( "key", "143a93c16a290ca2beab5de6e6bb4cf8" );
        imageData.append( 'image', event.target.files[0] )
        axios.post( 'https://api.imgbb.com/1/upload', imageData )
            .then( function ( response ) {
                setImageURL( response.data.data.display_url );
            } )
            .catch( function ( error ) {
                console.log( error );
            } );
    }

    const handleDeleteProduct = ( key ) => {
        fetch( `https://apple-cobbler-58977.herokuapp.com/delete/${key}`, {
            method: 'DELETE'
        } )

    }





    return (
        <div className={classes.root}>
            <div className={classes.manageItem}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button onClick={() => setClickItem( 0 )}>
                        <ListItemIcon>
                            <AddIcon style={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Add Product" />
                    </ListItem>
                    <ListItem button onClick={() => setClickItem( 1 )}>
                        <ListItemIcon>
                            <DeleteIcon style={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Delete Product" />
                    </ListItem>
                    <ListItem button onClick={() => setClickItem( 2 )}>
                        <ListItemIcon>
                            <EditIcon style={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Edit Product" />
                    </ListItem>
                </List>
            </div>
            <div style={{ textAlign: "center", margin: "auto", padding: "5px" }}>
                {( clickItem === 0 ) &&
                    <AddedForm onsubmit={onSubmit} handleImageUpload={handleImageUpload} />
                }
                {( clickItem === 1 ) &&
                    <DeleteItem products={products} handleDeleteProduct={handleDeleteProduct} />
                }
                {( clickItem === 2 ) && <p>edit Item</p>}




            </div>
        </div>
    );
};

export default Admin;