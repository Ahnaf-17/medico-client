/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const CampCard = ({camp}) => {
    const state = useLocation()
    const joinButton = state.pathname.includes('availableCamps')
    const {_id,campName,image,campFees,dateAndTime,location} = camp;
    const {user} = useAuth()

    const { register, handleSubmit,reset } = useForm()
    const axiosPrivate = useAxiosPrivate()
    const axiosPublic = useAxiosPublic();

    // const onSubmit = (data) => console.log(data)
    const {data: regCamp = [],refetch} = useQuery({
        queryKey: ['regCamp'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/reg-camps')
            console.log('inside qf',res.data);
            return res.data
        }
    })

    const onSubmit = async (data) => {
        console.log('tuttut',data)
            const regCamp = {
                name: data.name,
                address: data.address,
                age: data.age,
                contact: data.contact,
                regFees: camp.campFees,
                regCampId: camp._id,
                regUser: user.email
            }
            // console.log("current id",data.campId);
            // 
            const campRes = await axiosPrivate.post('/reg-camps',regCamp);
            console.log(campRes.data)
            if(campRes.data.insertedId){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Registered`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch()
        }
    };


    // const openModal = (campId) => {
    //     const modal = document.getElementById('my_modal_1');
    //     if (modal) {
    //       modal.showModal();
    //       document.getElementById('campId').value = campId; // Set the campId in the hidden input field
    //     }
    //   };
    const openModal = (campId) => {
        console.log('Camp ID in modal:', campId); 
        const modal = document.getElementById('my_modal_1');
        if (modal) {
            modal.showModal();
            const campIdInput = document.getElementById('campId');
            if (campIdInput) {
                campIdInput.value = campId; // Set the campId in the hidden input field
            }
        }
    };

    const participantCount = regCamp.filter(reg => reg.regCampId === camp._id).length;


    return (
        <div className="card bg-base-100 shadow-xl  lg:flex">
            <div>
                <figure><img className="md:h-[300px] rounded-t-xl md:w-full" src={image} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {campName}
                </h2>
                <p>Fee : {campFees}</p>
                <p>Camp Date :{dateAndTime}</p>
                <p>Location :{location}</p>
                <p>Participant Count: {participantCount}</p>
                {/* <p className="font-semibold">{category}</p> */}
                <div className="card-actions justify-end">
                    <Link to={`/camp-details/${_id}`}>
                        <button className="badge badge-outline">View details</button>
                    </Link>
                    {
                        joinButton && <>

{/* <button className="badge badge-outline" onClick={() => openModal(_id)}>Join Now</button> */}
<button className="badge badge-outline" onClick={() => openModal(_id)}>Join Now</button>
{/* <button className="badge badge-outline" onClick={() => console.log(_id)}>Join Now</button> */}



<dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <div className="flex justify-between items-center">
    <h3 className="font-bold text-lg">Your Information</h3>

    <form method="dialog">
        <button className="btn btn-ghost border-none"><FaTimes></FaTimes></button>
      </form>
    </div>
    <div className="modal-action">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>


      <div className="flex gap-2">
      <div className="form-control w-full ">
  <div className="label">
    <span className="label-text">What is your name?</span>
  </div>
  <input {...register("name", { required: true, maxLength: 40 })}
   type="text" placeholder="Type here" className="input input-bordered w-full " />
</div>      
      <div className="form-control w-full ">
  <div className="label">
    <span className="label-text">Age</span>
  </div>
  <input {...register("age", { required: true })}
   type="number" placeholder="Type here" className="input input-bordered w-full " />
</div> 
        </div>     
      <div className="form-control w-full ">
  <div className="label">
    <span className="label-text">Address</span>
  </div>
  <input {...register("address", { required: true, maxLength: 40 })}
   type="text" placeholder="Type here" className="input input-bordered w-full " />
</div>      
      <div className="form-control w-full ">
  <div className="label">
    <span className="label-text">Contact number</span>
  </div>
  <input {...register("contact", { required: true})}
   type="number" placeholder="Type here" className="input input-bordered w-full " />
</div>      
<input
                {...register('campId')} // Register the campId field
                type="hidden" // Hide this field in the form
                id="campId" // Set camp ID as its value
                value=''
              />
              {/* <input
  {...register('campId', { value: camp._id })} // Register the campId field and set its value to the current camp ID
  type="hidden" // Hide this field in the form
  id="campId" // Set camp ID as its value
/> */}

<button className="btn bg-cyan-800 text-white mt-2">Update</button>

    </form>
    </div>
  </div>
</dialog>





                        </>
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default CampCard;