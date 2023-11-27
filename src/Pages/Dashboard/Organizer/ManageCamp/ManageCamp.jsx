import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";

const ManageCamp = () => {
    const axiosPrivate = useAxiosPrivate();

    const {data: camps = [],refetch} = useQuery({
        queryKey: ['camps'],
        queryFn: async()=>{
            const res = await axiosPrivate.get('/camps');
            return res.data;
        }
    })

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

    const handleUpdateCamp = camp =>{

    }

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
            <td>
                <button onClick={()=>handleUpdateCamp(camp)}
                className='btn btn-ghost text-xl text-cyan-800'>
                    <FaEdit></FaEdit>
                </button>
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