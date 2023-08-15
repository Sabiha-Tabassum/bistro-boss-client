import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_token;

const AddItem = () => {



    const { register, handleSubmit, reset} = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, category,recipe} = data;
                const newItem = {name,price: parseFloat(price),category,recipe,image:imgURL};
                console.log(newItem);
                fetch('http://localhost:5000/menu', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newItem)
                    })
                
                .then(data => {
                   reset();
                    if(data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    }
    
       
   

    return (
        <div className='w-full'>
            <SectionTitle subHeading="what's new" heading="add an item"></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)} className='px-10'>
                <div class="form-control w-full  ">
                    <label class="label">
                        <span class="label-text">Recipe Name*</span>

                    </label>
                    <input type="text" placeholder="Recipe Name Here"
                        {...register("name", { required: true, maxLength: 80 })}
                        class="input input-bordered w-full " />

                </div>
                <div className='flex'>
                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text">Category*</span>

                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Drinks</option>

                        </select>

                    </div>

                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text">Price*</span>

                        </label>
                        <input type="price" placeholder="Type here"
                            {...register("price", { required: true })}
                            class="input input-bordered w-full " />

                    </div>
                </div>


                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Recipe Details</span>

                    </label>
                    <textarea
                        {...register("recipe", { required: true })}
                        className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                </div>

                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text">Item Image*</span>

                    </label>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full " />

                </div>
                <input className='btn btn-sm mt-2' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;