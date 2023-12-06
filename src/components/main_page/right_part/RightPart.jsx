import React, { useContext, useEffect } from "react";
import styles from "./style.module.css";
import TextField from "@mui/material/TextField";
import { jsonUserContext } from "../../../contexts/auth/JsonServerUserContext";
import { getAuth } from "firebase/auth";
import { NavLink } from "react-router-dom";
const RightPart = () => {
  const auth = getAuth();
  const { getUsers, users, defaultAvatar } = useContext(jsonUserContext);
  useEffect(() => {
    getUsers();
  }, []);
  const allUsers = users.filter((item) => item.id !== auth.currentUser.uid);
  return (
    <div className={styles.main}>
      <TextField
        id="filled-basic"
        variant="filled"
        className={styles.input}
        label="search..."
      />
      <ul className={styles.ul}>
        {allUsers.map((item) => (
          <NavLink to={`/profile/${item.id}`} className={styles.navlink}>
            <li key={item.id}>
              <img
                src={item.photoUrl}
                onError={defaultAvatar}
                className={styles.avatar}
              />
              <spna className={styles.username}>{item.username}</spna>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default RightPart;
