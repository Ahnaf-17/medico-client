import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";

const PaymentHistory = () => {
    const {user} = useAuth()
    const axiosPrivate = useAxiosPrivate()
    const {data: payments=[]} = useQuery({
        queryKey:['payments',user.email],
        queryFn: async()=>{
            const res = await axiosPrivate.get(`/payments/${user.email}`)
            return res.data
        }
    })
    return (
        <div>
            <SectionHeading heading='payment history'></SectionHeading>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Date</th>
        <th>Transaction Id</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {
        payments.map((payment,i)=> <tr key={payment._id}>
            <th>{i+1}</th>
            <td>{payment.email}</td>
            <td>{payment.date}</td>
            <td>{payment.transactionId}</td>
            <td>${payment.price} paid</td>
          </tr>)
      }
      

    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;