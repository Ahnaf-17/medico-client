/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { FaEdit, FaTimes } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
const image_hosting_key = import.meta.env.VITE_image_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const OrganizerProfile = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic();
    const axiosPrivate = useAxiosPrivate();
    const { register, handleSubmit, reset } = useForm();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPrivate.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data.filter(user => user.userEmail === user.email);
            // return res.data;
        }
    })
    const [selectedUser, setselectedUser] = useState(null)
    const [userData, setUserData] = useState(null);

    const fetchUserDataByEmail = async (email) => {
        const res = await axiosPrivate.get(`/getUsers/${email}`);
        return res.data;
    };
    useEffect(() => {
        if (selectedUser) {
            fetchUserDataByEmail(selectedUser._id)
                .then((data) => {
                    setUserData(data);
                })
                .catch((error) => {
                    console.error('Error fetching camp data:', error);
                });
        }
    }, [selectedUser]);





    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            const userInfo = {
                name: data.name,
                image: res.data.data.display_url
            };

            const userRes = await axiosPrivate.patch(`/users/${user.email}`, userInfo);
            console.log(userRes.data);
            if (userRes.data.modifiedCount > 0) {
                reset();
                refetch()
                //     const updatedUserData = await fetchUserDataByEmail(user.email);
                // setUserData(updatedUserData);
                const userRes = await axiosPrivate.patch(`/users/${user.email}`, userInfo);
                console.log("userRes after update:", userRes.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `updated successfully.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }


    };

    return (
        <div>
            {/* <h1>{userData.name}</h1> */}
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={user?.photoURL} className="md:max-w-xl max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{user?.displayName}</h1>
                        <p className="py-6">Contact: {user?.email}</p>
                        <button className="btn btn-ghost text-xl text-cyan-800" onClick={() => { setselectedUser({ ...user, email: user.email }); document.getElementById('my_modal_5').showModal() }}>Edit profile<FaEdit></FaEdit></button>
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
                                                    <span className="label-text">Name</span>
                                                </label>
                                                <input {...register("name", { required: true })}
                                                    defaultValue={userData?.name}
                                                    type="text" placeholder="Type here" className="input input-bordered w-full " />
                                            </div>
                                            <div className="form-control w-full ">
                                                <label className="label">
                                                    <span className="label-text">Image</span>
                                                </label>
                                                <input defaultValue={userData?.image} {...register("image", { required: true })}
                                                    type="file" className="file-input file-input-bordered w-full " />
                                            </div>

                                        </div>



                                        <button className="btn bg-cyan-800 text-white mt-2">Update</button>
                                    </form>


                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizerProfile;