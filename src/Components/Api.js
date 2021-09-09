import axios from "axios";

export const post = (daa, id) => {
  axios.put(`http://localhost:3002/user/${id}`, daa).then((res) => {
    alert("Note updated,Please refresh page");
  });
};
export const dataEnter = (daa) => {
  axios.post("http://localhost:3002/user", daa).then((res) => {
    alert("Note Saved,Please refresh page");
  });
};
