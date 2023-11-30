import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import useAuth from "../../../../Hooks/useAuth";
// import DataTable from "react-data-table-component";
import useCamp from "../../../../Hooks/useCamp";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";
const RegCamps = () => {
    const axiosPrivate = useAxiosPrivate();
    const [camp] = useCamp()
    const { user } = useAuth()
    const { data: registeredCamps = [] } = useQuery({
        queryKey: ['registeredCamps'],
        queryFn: async () => {
            const res = await axiosPrivate.get('/reg-camps', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data.filter(camp => camp.regUser == user.email);
        }
    })
    // const matchedCamps = registeredCamps.filter(registeredCamp =>
    //     camp.some(campItem => campItem._id === registeredCamp.regCampId)
    // );
    const matchedCamps = camp.filter(campItem =>
        registeredCamps.some(registeredCamp => registeredCamp.regCampId === campItem._id)
    );


    console.log("matched", matchedCamps);

    // const columns = [
    //     {
    //       name: 'Camp Title',
    //       selector: row => row.campName,
    //     //   sortable: true,
    //     },
    //     {
    //       name: 'Date&Time',
    //       selector: row=> row.dateAndTime,
    //     },
    //     {
    //       name: 'Location',
    //       selector: row=> row.location,
    //     },
    //     {
    //       name: 'Have to Pay',
    //       selector: row=> row.campFees,
    //     },
    //     {
    //       name: 'Payment Status',
    //     //   selector: row=> row.campFees,
    //     cell: (row)=>{
    //         <div>
    //             <button className="btn" onClick={() => handlePayment(row)}>Pay Now</button>
    //         </div>
    //     },
    //     ignoreRowClick: true,
    //         allowOverflow: true,
    //         button: true,

    //     },
    //     {
    //       name: 'Status',
    //     //   selector: row=> row.campFees,
    //     //   sortable: true,
    //     },

    //   ];



    return (
        <div>
            <SectionHeading heading='camp info'></SectionHeading>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    <thead>
      <tr>
        <th>#</th>
        <th>Camp Name</th>
        <th>Date&Time</th>
        <th>Location</th>
        <th>Fees</th>
        <th>Status</th>
        
      </tr>
    </thead>
    <tbody>
      {matchedCamps.map((camp,i)=> <tr key={camp._id}>
        <th>{i+1}</th>
        <td>{camp.campName}</td>
        <td>{camp.dateAndTime}</td>
        <td>{camp.location}</td>
        <td>{camp.campFees}</td>
        <td>pending</td>
        <td>
            <Link to={`/dashboard/payment/${camp._id}?campPrice=${camp.campFees}`}>
            <button className="btn btn-md bg-cyan-800 text-white">Pay</button>
            </Link>
        </td>
      </tr> )}
      

    </tbody>
  </table>
</div>

{/* 
            <DataTable
                columns={columns}
                data={matchedCamps}
                pagination
            /> */}


        </div>
    );
};

export default RegCamps;