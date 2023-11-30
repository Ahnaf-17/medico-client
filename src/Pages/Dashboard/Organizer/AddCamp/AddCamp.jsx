import { useForm } from "react-hook-form";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
const image_hosting_key = import.meta.env.VITE_image_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddCamp = () => {
    const axiosPublic = useAxiosPublic()
    const axiosPrivate = useAxiosPrivate()
    const { register, handleSubmit,reset } = useForm()
    const {user} = useAuth()

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
            const campRes = await axiosPrivate.post('/camps', campItem);
            console.log(campRes.data)
            if(campRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.campName} is added to the camp.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    };
    return (
        <div >
            <SectionHeading heading='add a camp'></SectionHeading>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="md:flex gap-2">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Camp Name</span>
                        </label>
                        <input {...register("campName",{required: true})}
                        type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Service</span>
                        </label>
                        <input {...register("servicesProvided",{required: true})}
                        type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    </div>

                    <div className="md:flex gap-2">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Healthcare Professionals</span>
                        </label>
                        <input {...register("healthcareProfessionals",{required: true})}
                        type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Audience</span>
                        </label>
                        <input {...register("targetAudience",{required: true})}
                        type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    </div>

                    <div className="md:flex gap-2">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input {...register("location",{required: true})}
                        type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Fees</span>
                        </label>
                        <input {...register("campFees",{required: true})}
                        type="number" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    </div>

                    <div className="md:flex gap-2">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Date&Time</span>
                        </label>
                        <input {...register("dateAndTime",{required: true})}
                        type="datetime-local" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Camp Image</span>
                        </label>
                        <input {...register("image",{required: true})}
                        type="file" className="file-input file-input-bordered w-full " />
                    </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register('longDescription')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <button className="btn bg-cyan-800 text-white mt-2">Add Camp</button>

                    {/* <input type="submit" /> */}
                </form>
            </div>
        </div>
    );
};

export default AddCamp;