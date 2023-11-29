// import { useForm } from "react-hook-form";
// import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import Swal from "sweetalert2";


// const JoinNow = () => {
//     const { register, handleSubmit, reset } = useForm()
//     const axiosPrivate = useAxiosPrivate()
//     const axiosPublic = useAxiosPublic();
//     const onSubmit = async (data) => {
//         console.log(data)

//         if (data.success) {
//             // now send the menu item data to the server with the image url
//             // const regCamp = {
//             //             name: data.name,
//             //             address: data.address,
//             //             age: data.age,
//             //             contact: data.contact,
//             //             regFees: camp.campFees,
//             //             regCampId: camp._id,
//             //             regUser: user.email
//             //         }
//             // const campRes = await axiosPrivate.post('/camps', campItem);
//             // console.log(campRes.data)
//             // if (campRes.data.insertedId) {
//             //     // show success popup
//             //     reset();
//             //     Swal.fire({
//             //         position: "top-end",
//             //         icon: "success",
//             //         title: `${data.campName} is added to the camp.`,
//             //         showConfirmButton: false,
//             //         timer: 1500
//             //     });
//             // }
//         }
//     };
//     return (
//         <div>
//             <form method="dialog" onSubmit={handleSubmit(onSubmit)}>


//                 <div className="flex gap-2">
//                     <div className="form-control w-full ">
//                         <div className="label">
//                             <span className="label-text">What is your name?</span>
//                         </div>
//                         <input {...register("name", { required: true, maxLength: 40 })}
//                             type="text" placeholder="Type here" className="input input-bordered w-full " />
//                     </div>
//                     <div className="form-control w-full ">
//                         <div className="label">
//                             <span className="label-text">Age</span>
//                         </div>
//                         <input {...register("age", { required: true })}
//                             type="number" placeholder="Type here" className="input input-bordered w-full " />
//                     </div>
//                 </div>
//                 <div className="form-control w-full ">
//                     <div className="label">
//                         <span className="label-text">Address</span>
//                     </div>
//                     <input {...register("address", { required: true, maxLength: 40 })}
//                         type="text" placeholder="Type here" className="input input-bordered w-full " />
//                 </div>
//                 <div className="form-control w-full ">
//                     <div className="label">
//                         <span className="label-text">Contact number</span>
//                     </div>
//                     <input {...register("contact", { required: true })}
//                         type="number" placeholder="Type here" className="input input-bordered w-full " />
//                 </div>
//                 {/* <input
//                     {...register('campId')} // Register the campId field
//                     type="hidden" // Hide this field in the form
//                     id="campId" // Set camp ID as its value
//                     value=''
//                 /> */}


//                 <button className="btn bg-cyan-800 text-white mt-2">Update</button>

//             </form>
//         </div>
//     );
// };

// export default JoinNow;