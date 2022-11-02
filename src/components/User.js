import React, { useState } from "react";
import Pagination from "./pagination/Paginations";

const User = () => {
  const [userData, setUserData] = useState([
    {
      userName: "test 1",
      email: "bahromjonsobitxanov@gmail.com",
      password: "4234332",
      id: 1667362083881,
    },
    {
      userName: "Bahromjon050",
      email: "bahromjonsobitxanov468@gmail.com",
      password: "234234234234",
      id: 1667362071534,
    },
    {
      userName: "test 1",
      email: "bahromjonsobitxanov@gmail.com",
      password: "4234332",
      id: 1667362083881,
    },
  ]);
  const editFun = () => {
    // edit dispatch
  };
  const deleteFun = () => {
    // delete dispatch
  };

  // Pagination Funk elementlari
  // array: userData, setUserData
  // nechchidan boshlanishi Current page
  const [currentPage, setCurrentPage] = useState(1);
  // pagination length || uzunligi
  const [dataPerPage, setDataPerPage] = useState(5);

  // Pagination dataga qismlab jo'natish umumiy
  //
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;

  const currentPost = userData.slice(indexOfFirstPost, indexOfLastPost);
  const clickPages = Math.ceil(userData.length / dataPerPage);

  return (
    <>
      <div className="container">
        <h1 className="title">User</h1>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input type="text" placeholder="Enter your username" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter your password" required />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
        <div className="content" style={{ width: "100%" }}>
          <div className="table-container">
            <h1 className="title">Table</h1>
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>#</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentPost ? (
                  currentPost.map((val, i) => (
                    <tr key={i}>
                      <td style={{ textAlign: "center" }}>{i + 1}</td>
                      <td>{val.userName}</td>
                      <td>{val.email}</td>
                      <td>{val.password}</td>
                      <td style={{ width: "350px", textAlign: "center" }}>
                        <button
                          className="btn btn_action"
                          onClick={() => editFun(val)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn_action"
                          onClick={() => deleteFun(val.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="found-container">
                    <h2 className="found">There is no information</h2>
                  </div>
                )}
                {currentPost.length === 0 ? (
                  <div className="found-container">
                    <h2 className="found">There is no information</h2>
                  </div>
                ) : null}
              </tbody>
            </table>
          </div>
          <Pagination
            pages={clickPages}
            setCurrentPage={setCurrentPage}
            justify={"right"} // center, left, right
            // borderColor={"red"} // border rangi
            // textColor={"red"} // textlarni rangi
            // activBgColor={"crimson"} // activ holatdagi postni background rangi
            // activFontColor={"#fff"} // activ holatdagi postni rangi
            // hoverBg={"#ff1c4738"} // pastda classni orqali hover holatda backgroundni rangini o'zgartirasiz
            // .pagination-container a:hover:not(.active) hover class <css>
          />
        </div>
      </div>
    </>
  );
};

export default User;
