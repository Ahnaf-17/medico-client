import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { FaEdit, FaTimes } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";

import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
const image_hosting_key = import.meta.env.VITE_image_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const ManageCamp = () => {
    const {user} = useAuth()
    const axiosPrivate = useAxiosPrivate();
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit,reset } = useForm()
    const [selectedCamp, setSelectedCamp] = useState(null);
    const [campData, setCampData] = useState(null);



    const {data: camps = [],refetch} = useQuery({
        queryKey: ['camps'],
        queryFn: async()=>{
            const res = await axiosPrivate.get('/camps',{
                headers:{
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data.filter(camp=>camp.userEmail === user.email);
            // return res.data;
        }
    })

    const fetchCampDataById = async (_id) => {
        const res = await axiosPrivate.get(`/camps/${_id}`);
        return res.data;
    };
    useEffect(() => {
        if (selectedCamp) {
            fetchCampDataById(selectedCamp._id)
                .then((data) => {
                    setCampData(data);
                })
                .catch((error) => {
                    console.error('Error fetching camp data:', error);
                });
        }
    }, [selectedCamp]);




    const handleDeleteCamp = camp =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPrivate.delete(`/camps/${camp._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const campItem = {
                campName: data.campName,
                servicesProvided: data.servicesProvided,
                healthcareProfessionals: data.healthcareProfessionals,
                targetAudience: data.targetAudience,
                location: data.location,
                longDescription: data.longDescription,
                dateAndTime: data.dateAndTime,
                campFees: parseFloat(data.campFees),
                image: res.data.data.display_url,
                userEmail: user.email

            }
            // 
            const campRes = await axiosPrivate.patch(`/camps/${selectedCamp._id}`, campItem);
            console.log(campRes.data)
            if(campRes.data.modifiedCount>0){
                // show success popup
                reset();
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.campName} updated successfully.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    };

    return (
        <div>
            <div>
                <h2 className=" text-2xl">Total camps{camps.length}</h2>
            </div>
            <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Camp Name</th>
        <th>Date&Time</th>
        <th>Venue</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        camps.map((camp,index)=> <tr key={camp._id}>
            <th>{index+1}</th>
            <td>{camp.campName}</td>
            <td>{camp.dateAndTime}</td>
            <td>{camp.location}</td>
            {/* <td>
                <button onClick={()=>handleUpdateCamp()}
                className='btn btn-ghost text-xl text-cyan-800'>
                    <FaEdit></FaEdit>
                </button>
            </td> */}

<td>
{/* <Link to={`/dashboard/updateCamp/${camp._id}`}>
<button className="btn btn-ghost text-xl text-cyan-800" onClick={()=>document.getElementById('my_modal_5').showModal()}><FaEdit></FaEdit></button>
</Link> */}
<button className="btn btn-ghost text-xl text-cyan-800" onClick={()=> {setSelectedCamp({...camp,_id:camp._id}); document.getElementById('my_modal_5').showModal()}}><FaEdit></FaEdit></button>

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <div className="flex justify-between items-center">
    <h3 className="font-bold text-lg">Update Now</h3>
    <form method="dialog">
        <button className="btn"><FaTimes></FaTimes></button>
      </form>
    </div>
    <div className="modal-action">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                    <div className="md:flex gap-2">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Camp Name</span>
                        </label>
                        <input {...register("campName",{required: true})}
                        defaultValue={campData?.campName}
                        type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Service</span>
                        </label>
                        <input defaultValue={campData?.servicesProvided} {...register("servicesProvided",{required: true})}
                        type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    </div>

                    <div className="md:flex gap-2">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Healthcare Professionals</span>
                        </label>
                        <input defaultValue={campData?.healthcareProfessionals} {...register("healthcareProfessionals",{required: true})}
                        type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Audience</span>
                        </label>
                        <input defaultValue={campData?.targetAudience} {...register("targetAudience",{required: true})}
                        type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    </div>

                    <div className="md:flex gap-2">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input defaultValue={campData?.location
                        } {...register("location",{required: true})}
                        type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Fees</span>
                        </label>
                        <input defaultValue={campData?.campFees} {...register("campFees",{required: true})}
                        type="number" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    </div>

                    <div className="md:flex gap-2">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Date&Time</span>
                        </label>
                        <input defaultValue={campData?.dateAndTime} {...register("dateAndTime",{required: true})}
                        type="datetime-local" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Camp Image</span>
                        </label>
                        <input defaultValue={campData?.image} {...register("image",{required: true})}
                        type="file" className="file-input file-input-bordered w-full " />
                    </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea defaultValue={campData?.longDescription} {...register('longDescription')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <button className="btn bg-cyan-800 text-white mt-2">Update</button>
                </form>
                
                
    </div>
  </div>
</dialog>
</td>
            <td>
                <button onClick={()=> handleDeleteCamp(camp)}
                 className='btn btn-ghost text-xl text-red-500'>
                    <FaDeleteLeft></FaDeleteLeft>
                </button>
            </td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageCamp;