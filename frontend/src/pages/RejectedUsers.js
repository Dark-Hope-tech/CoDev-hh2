/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Oval } from "react-loader-spinner";
import List from "../components/List";

export default function RejectedUsers({ setCurUser }) {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    // console.log('here');
    let isSubscribed = true;
    const fetchData = async () => {
      const params = {
        user_id: cookies["UserId"],
      };
      const data = await axios.get(
        "https://codevv.herokuapp.com/users/reject",
        { params }
      );
      // console.log('here');
      // console.log(data);

      if (isSubscribed) {
        setUsers(data.data);
      }
    };
    fetchData().catch(console.error);

    return () => (isSubscribed = false);
  }, [cookies["UserId"]]);

  // console.log(users)
  if (!users) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <Oval color="#fd2f6e" height={80} width={80} />
      </div>
    );
  }

  // console.log(users);

  return (
    <div className="flex flex-col justify-center mt-28 items-center">
      <h1 className="text-2xl mb-4 text-[#fd2f6e] font-semibold">
        Rejected Users
      </h1>
      <div className=" h-[1px] bg-slate-700 mt-2 mb-2 opacity-20 w-[340px] md:w-[420px]"></div>
      {users.map((user, _index) => (
        <List
          user={user}
          key={_index}
          pending={false}
          setCurUser={setCurUser}
        />
      ))}
    </div>
  );
}
