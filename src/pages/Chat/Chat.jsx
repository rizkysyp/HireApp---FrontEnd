import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/navbarHome";
import { Link } from "react-router-dom";
import Assets from "../../assets/img";
import swal from "sweetalert";
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import NavbarLandingAfterLogin from "../../components/NavbarLandingAfter/NavbarLandingAfter";
import NavbarLandingBeforeLogin from "../../components/NavbarLandingBefore/NavbarLandingBefore";

const Chat = ({ socket }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [listPekerja, setListPekerja] = useState([]);
  const [chat, setChat] = useState(false);
  const [dataPekerja, setDataPekerja] = useState([]);
  const [friend, setFriend] = useState({});
  const token = localStorage.getItem("Token");
  const { id: idPekerja } = useParams();
  const [submited, setSubmited] = useState(false);

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    //get data pekerja
    const fetchPekerja = async () => {
      try {
        const res = await axios.get(
          `https://hireapp-be-production-e91c.up.railway.app/users/profile`,
          user
        );
        console.log("data pekerja", res.data.data[0]);
        res.data && setDataPekerja(res.data.data[0]);
      } catch (e) {
        console.log(e);
        return swal({
          title: "Hire",
          text: `${e.response.data.message}`,
          icon: "error",
        });
      }
    };
    if (idPekerja) {
      fetchPekerja();
    }
  }, [idPekerja]);

  useEffect(() => {
    //get data list chat
    const fetchListChat = async () => {
      try {
        const res = await axios.get(
          `https://hireapp-be-production-e91c.up.railway.app/hire/list`,
          user
        );
        console.log("list pekerja", res.data.chat);
        res.data && setListPekerja(res.data.data);
        // setMessages(res.data.data);
      } catch (e) {
        console.log(e);
        return swal({
          title: "Hire",
          text: `${e.res.data.message}`,
          icon: "error",
        });
      }
    };

    fetchListChat();
  }, []);

  const handleChat = (data) => {
    setChat(true);
  };
  const chooseFriend = (friend) => {
    setFriend(friend);
  };
  // const handleSendMessage = () => {
  //   if (socket && message) {
  //     console.log(socket);
  //     console.log("haloooo");
  //     socket.emit(
  //       "sendMessage",
  //       {
  //         idReceiver: friend.users_id,
  //         idSender: socket.hire_id,
  //         messageBody: chat,
  //       },
  //       (message) => {
  //         setMessages((current) => [...current, message]);
  //       }
  //     );
  //     console.log("lohaaaa");
  //   }
  //   setMessage("");
  // };

  useEffect(() => {
    if (socket) {
      socket.off("newMessage");
      socket.on("newMessage", (message) => {
        setMessages((current) => [...current, message]);
        console.log(message);
      });
    }
  }, [socket]);

  useEffect(() => {
    axios
      .get(
        `https://hireapp-be-production-e91c.up.railway.app/hire/chat/${friend.id}`,
        user
      )
      .then((res) => {
        const messages = res.data.data.chat;
        setMessages(messages);
      })
      .catch((e) => {
        console.log(e);
        // return swal({
        //   title: "Hire",
        //   text: `${e.response.data.message}`,
        //   icon: "error",
        // });
      });
  }, [friend]);

  // useEffect(() => {
  //   axios
  //     .post(
  //       `https://hireapp-be-production-e91c.up.railway.app/hire/post-chat/${friend.users_id}`,
  //       user
  //     )
  //     .then((res) => {
  //       const messages = res.data.data;
  //       setMessage(messages);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       return swal({
  //         title: "Hire",
  //         text: `${e.response.data.message}`,
  //         icon: "error",
  //       });
  //     });
  // }, [friend]);
  useEffect(() => {
    if (submited) {
      const postHire = async () => {
        try {
          const res = await axios.post(
            `https://hireapp-be-production-e91c.up.railway.app/hire/post-chat/${friend.users_id}`,
            message,
            user
          );
          console.log("sukses post data", res.data.data);
          const messages = res.data.data;
          setMessage(messages);
          swal({
            title: "hire",
            text: `${res.data.message}`,
            icon: "success",
          });
          setSubmited(false);
        } catch (e) {
          console.log(e);
          setSubmited(false);
          return swal({
            title: "hire",
            text: `${e.response.data.message}`,
            icon: "error",
          });
        }
      };
      postHire();
    }
  }, [submited, friend, message]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setMessage({
      ...message,
      // idPerekrut: friend.users_id,
      // idPekerja: friend.hire_id,
    });
    setSubmited(true);
  };

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <nav className="pb-3" style={{ backgroundColor: "white" }}>
        {token ? <NavbarLandingAfterLogin /> : <NavbarLandingBeforeLogin />}
      </nav>
      <main className="d-flex flex-row m-5">
        {/*daftar user yg chat*/}
        <div
          className="col-4 "
          style={{ backgroundColor: "white", height: "90vh" }}
        >
          <div>
            <h5
              className=" d-flex justify-content-start px-2 "
              style={{ height: "60px" }}
            >
              Messages
            </h5>
            <hr />
          </div>
          <div
            className="overflow-auto"
            style={{ backgroundColor: "white", height: "80vh" }}
          >
            {listPekerja.length > 1
              ? listPekerja.map((item) => {
                  return (
                    <div
                      className="list-chatting d-flex p-2 m-3"
                      style={{ backgroundColor: "#E5E5E5" }}
                      key={item.id}
                      onClick={() => handleChat()}
                    >
                      <img
                        src={item.photo}
                        alt="user pict"
                        width="64"
                        height="64"
                        style={{ borderRadius: "25px" }}
                      />
                      <div className="ms-3">
                        <h5
                          onClick={() => chooseFriend(item)}
                          className="d-flex align-items-start"
                        >
                          {item.name}
                        </h5>
                        <p className="last-message d-flex align-items-start">
                          {item.position}
                        </p>
                      </div>
                    </div>
                  );
                })
              : "kosong"}
          </div>
        </div>

        <div className="col-1" />

        <div
          className="d-flex flex-column col-7 p-2"
          style={{ backgroundColor: "white", height: "90vh" }}
        >
          {/*isi messages*/}

          {chat === false ? (
            <h3>Silahkan mulai chat</h3>
          ) : (
            <>
              <div style={{ backgroundColor: "#E2E5ED", height: "82vh" }}>
                {/*kepala chat*/}

                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ height: "60px", backgroundColor: "white" }}
                >
                  <div className="d-flex mx-3">
                    <img
                      src={friend.photo}
                      alt="profile"
                      style={{
                        backgroundColor: "grey",
                        borderRadius: "100%",
                        width: "50px",
                      }}
                    />
                    <h5 className="d-flex align-self-center mx-2">
                      {friend.name}
                    </h5>
                  </div>
                  <p className="d-flex align-self-center">{friend.position}</p>
                  <Link>
                    <button className="btn">
                      <b style={{ color: "blue" }}>Detail Profile</b>
                    </button>
                  </Link>
                </div>
                <hr style={{ backgroundColor: "white" }} />
                {/*message*/}
                <div className="messages-user ">
                  {messages.map((item, index) =>
                    item.receiver_id === friend.id ? (
                      <>
                        <div
                          className="sender d-flex justify-content-end align-items-start col-6"
                          key={index}
                        >
                          <p>
                            <Moment format="DD/MM/LT">{item.created_at}</Moment>
                          </p>
                          <div
                            className="chat-message-from p-2 mx-2"
                            style={{
                              backgroundColor: "green",
                              borderRadius: "10px",
                            }}
                          >
                            <div>{item.chat} </div>
                          </div>
                        </div>
                      </>
                    ) : item.receiver_id !== friend.id ? (
                      // item.receiver_id !== friend.sender_id ?
                      <>
                        <div
                          className="receive d-flex justify-content-start align-items-end  col-6"
                          key={item.id}
                        >
                          <div
                            className="chat-message-to p-2 mx-2"
                            style={{
                              backgroundColor: "yellow",
                              borderRadius: "10px",
                            }}
                          >
                            <div>{item.chat}</div>
                          </div>
                          <p>
                            <Moment format="DD/MM/LT">{item.created_at}</Moment>
                          </p>
                        </div>
                      </>
                    ) : (
                      ""
                    )
                  )}
                </div>
              </div>
              {/*post chat*/}
              <div
                className="footer-chat-message d-flex justify-content-center"
                style={{ backgroundColor: "white", height: "8vh" }}
              >
                <input
                  className="col-10 px-3 my-3"
                  type="text"
                  placeholder="Type your message..."
                  name="chat"
                  id="chat"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ borderRadius: "20px" }}
                />

                <button
                  className="btn m-3 "
                  type="submit"
                  onClick={handleSendMessage}
                  style={{ borderRadius: "100%", backgroundColor: "#5E50A1" }}
                >
                  <img src={Assets.sendchat} alt="inputchat" />
                </button>
              </div>
            </>
          )}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Chat;
