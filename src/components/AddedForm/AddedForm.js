import React from 'react';
import {
    makeStyles,
    Grid,
    Button,
    Divider


} from "@material-ui/core";
import { useForm } from "react-hook-form";
const useStyles = makeStyles( ( theme ) => ( {

    inputField: {

        height: "30px",
        width: "80%",
        border: "2px solid gray",
        padding: '10px',
        fontSize: '19px',
        margin: "5px"
    },
    buttonStyle: {
        float: "right",
        margin: "3.5%"
    },
    InputSubmit: {
        height: "30px",
        width: "80%",
        padding: '10px',
        fontSize: '19px',
        margin: "5px"
    }
} ) );

const AddedForm = ( props ) => {
    const { register, handleSubmit, errors } = useForm( {
        mode: "onChange"
    } );
    const classes = useStyles();
    const onSubmit = props.onsubmit
    const handleImageUpload = props.handleImageUpload





    return (
        <div>
            <form onSubmit={handleSubmit( onSubmit )}>
                <Grid container

                    spacing={2}>
                    <Grid xs={6} item >
                        <label >Product Name</label>
                        <br />
                        <input className={classes.inputField} name="name" defaultValue="" placeholder="Set product name" ref={register} />
                    </Grid >
                    <Grid xs={6} item>
                        <label >Width</label>
                        <br />
                        <input className={classes.inputField} name="width" placeholder="Set width" defaultValue="" ref={register} />
                    </Grid>
                    <Grid xs={6} item >
                        <label >Add Price</label>
                        <br />
                        <input className={classes.inputField} name="price" placeholder="set price" defaultValue="" ref={register} />
                    </Grid>
                    <Grid xs={6} item >
                        <label >Add Photo</label>
                        <br />
                        <input
                            className={classes.InputSubmit} type="file" style={{
                                height: "30px",
                                width: "80%",
                            }}
                            name="photo"
                            ref={register}
                            onChange={handleImageUpload} />
                        <br />
                        {errors.exampleRequired && <span>This field is required</span>}

                    </Grid>
                </Grid>
                <br />
                <Divider />


                <Button type="submit" className={classes.buttonStyle} variant="contained" color="secondary">
                    Submit
   </Button>



            </form>

        </div>
    );
};

export default AddedForm;