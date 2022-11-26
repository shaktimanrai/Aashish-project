import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import HOC from "../../layout/HOC";
import axios from "axios";
import auth from "../../Auth";
import BaseUrl from "../../BaseUrl";
import { toast } from "react-toastify";

const Users = () => {

  const [popup, setPopup] = useState(false);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    const url = BaseUrl() + "/api/admin/users";
    try {
      const res = await axios.get(url, auth);
      setUsers(res?.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteuser = async (_id) => {
    const url = BaseUrl() + `/api/admin/users/${_id}`;
    try {
      const res = await axios.delete(url, auth);
      toast.success("User Deleted Success");
      fetchUsers();
    } catch (e) {
      setData(e.message);
      toast.error(e.name);
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white ">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Users
          </span>
        </div>

        <div className=" wcomp overflow-y-auto">
          <table className="table-auto  w-full text-left whitespace-no-wrap">
            <thead>
              <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                <th className="px-4 py-3 title-font tracking-widest font-medium md:textP-base text-sm">
                  Profile
                </th>

                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm">
                  Email
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Mobile No.
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Address
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Pincode
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Role
                </th>
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {users?.map((e, i) => {
                return (
                  <tr key={i} className="tracking-wider text-gray-900 ">
                    <td className=" py-3 w-36 md:text-base text-sm ">
                      <img
                        src={BaseUrl() + "/" + e.profileImage}
                        alt={e.name}
                        className="xl:w-36 shadow-xl rounded-lg lg:w-32 md:w-28 w-24"
                      />
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm">{e.name}</td>
                    <td className="px-4 py-3 md:text-base text-sm">
                      {e.email}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm">
                      {e.mobile}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm">
                      {e.address}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm">
                      {e.pincode}
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm">{e.role}</td>
                    <td className="px-4 py-3  space-x-3">
                      <button className="font-semibold tracking-widest">
                        <GrFormClose
                          className="text-lg md:text-2xl"
                          onClick={() => deleteuser(e._id)}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HOC(Users);
