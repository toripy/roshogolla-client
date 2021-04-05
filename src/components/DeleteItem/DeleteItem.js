import React, { useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, Divider } from '@material-ui/core';


const DeleteItem = ( { products, handleDeleteProduct } ) => {

    const displayNone = ( id ) => {
        document.getElementById( id ).style.display = 'none'
    }



    return (
        <div>
            <h5>Delete Product</h5>
            <Divider></Divider>

            <div style={{ marginTop: '5px' }} >
                {
                    products.map( product =>
                        <div id={product.name} key={product.name} style={{ display: "flex", justifyContent: "space-between" }}>
                            <Avatar alt={product.name} src={product.imageURL} />
                            <p>{product.name}</p>
                            <IconButton onClick={() => [handleDeleteProduct( product._id ), displayNone( product.name )]} edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </div>

                    )
                }

            </div>



        </div>
    );
};

export default DeleteItem;