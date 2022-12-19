import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../Components/Shared/Loading";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
 
  return (
    <>
      <div className="card  bg-base-100 shadow-xl">
        <div className="avatar py-5 mt-5">
          <div className="w-24 rounded-full mx-auto">
            <img src={user.photoURL} alt={user.displayName} />
          </div>
        </div>

        <div className="card-body">
          <h2 className="card-title">Name : {user.displayName}</h2>
          <p>Email : {user.email}</p>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
