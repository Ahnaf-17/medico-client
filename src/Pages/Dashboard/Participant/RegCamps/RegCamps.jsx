import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import useAuth from "../../../../Hooks/useAuth";
import DataTable from "react-data-table-component";
import useCamp from "../../../../Hooks/useCamp";
const RegCamps = () => {
    const axiosPrivate = useAxiosPrivate();
    const [camp] = useCamp()
    const {user} = useAuth()
    const {data: registeredCamps=[]} = useQuery({
        queryKey:['registeredCamps'],
        queryFn: async()=>{
            const res = await axiosPrivate.get('/reg-camps',{
                headers:{
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data.filter(camp=>camp.regUser == user.email);
        }
    })
    // const matchedCamps = registeredCamps.filter(registeredCamp =>
    //     camp.some(campItem => campItem._id === registeredCamp.regCampId)
    // );
    const matchedCamps = camp.filter(campItem =>
        registeredCamps.some(registeredCamp => registeredCamp.regCampId === campItem._id)
    );


    console.log("matched", matchedCamps);

    const columns = [
        {
          name: 'Camp Title',
          selector: row => row.campName,
        //   sortable: true,
        },
        {
          name: 'Date&Time',
          selector: row=> row.dateAndTime,
        //   sortable: true,
        },
        {
          name: 'Location',
          selector: row=> row.location,
        //   sortable: true,
        },
        {
          name: 'Have to Pay',
          selector: row=> row.campFees,
        //   sortable: true,
        },
        {
          name: 'Payment Status',
        //   selector: row=> row.campFees,
        //   sortable: true,
        },
        {
          name: 'Status',
        //   selector: row=> row.campFees,
        //   sortable: true,
        },

      ];


    return (
        <div>
            {/* <h2 className=" text-2xl">Total camps{matchedCamps.length}</h2> */}

            {/* <div className="overflow-x-auto">
  <table className="table table-zebra">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {matchedCamps.map(camp=> <tr key={camp._id}>
        <th>1</th>
        <td>{camp.campName}</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> )}
      

    </tbody>
  </table>
</div> */}


<DataTable
                columns={columns}
                data={matchedCamps}
                pagination
            />

        </div>
    );
};

export default RegCamps;