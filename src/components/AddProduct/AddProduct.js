import React from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log( data );
    return (
        <div>
            <form onSubmit={handleSubmit( onSubmit )}>

                <div>
                    <div>
                        <label >Product Name</label>
                        <input name="example" defaultValue="test" ref={register} />
                    </div>
                    <div>
                        <label >Width</label>
                        <input name="example" defaultValue="test" ref={register} />
                    </div>
                </div>
                <div>
                    <label >Add Price</label>
                    <input name="example" type="text" defaultValue="test" ref={register} />
                </div>
                <div>
                    <label >Add Photo</label>
                    <input name="example" type="file" defaultValue="test" ref={register} />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>

        </div>
    );
};

export default AddProduct;