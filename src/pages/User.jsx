import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/userSlice";

const User = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(JSON.stringify(user));

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="container p-4">
      <h1>List User</h1>

      {user.load && <h1>Loading...</h1>}
      {user.error && <h1 className="text-danger">Error: {user.error}</h1>}
      {!user.load && user.data?.length === 0 && (
        <i className="text-danger">Data Empty</i>
      )}
      {user.data?.length > 0 && (
        <ul className="list-group">
          {user.data.map((user, index) => (
            <li key={index} className="list-group-item">
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default User;
