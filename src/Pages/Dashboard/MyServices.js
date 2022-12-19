import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineStar } from "react-icons/ai";
import servicesApi from "../../api/servicesApi";
import Loading from "../../Components/Shared/Loading";
import auth from "../../firebase.init";
import ServicesTable from "./ServicesTable";

const MyServices = () => {
  const [user, loading] = useAuthState(auth);
  const [myOrder, setMyOrder] = useState([]);
  console.log(myOrder);
  useEffect(() => {
    servicesApi
      .get(`get-order?email=${user.email}`)
      .then((res) => setMyOrder(res.data));
  }, [user]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mt-16">
      <div className="card w-full shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">My Service Order</h2>
          <div className="divider">
            <AiOutlineStar className="w-14 h-14 text-primary" />
          </div>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Service Name</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {myOrder.map((order,index) => (
                  <ServicesTable key={order._id} index={index} order={order} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
