import React, { useState } from "react";

import { dataEnter } from "./Api";
import DashBoard from "./Dashboard";
const Da = "122";
const Card = ({ Data }) => {
  const [title, settitle] = useState(null);
  const [content, setcontent] = useState(null);

  const titlestore = (val) => {
    settitle(val.target.value);
  };
  const contentstore = (val) => {
    setcontent(val.target.value);
  };

  function SaveData() {
    const daa = {
      aid: Da,
      Notetitle: title,
      text: content,
      color: "white",
      value: "none",
    };

    dataEnter(daa);
  }

  return (
    <div>
      <br />
      <div
        class="card bg-light mb-3"
        style={{ color: "blue", maxWidth: "18rem" }}
      >
        <div class="card-header">
          <b>Title</b> <input type="text" size="15" onChange={titlestore} />
        </div>
        <div class="card-body">
          <h5 class="card-title">Task</h5>
          <p class="card-text">
            <textarea
              rows="5"
              cols="20"
              name="description"
              onChange={contentstore}
            ></textarea>
          </p>
        </div>
        <div class="card-header">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => SaveData()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
