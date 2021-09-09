import React, { useState, useEffect } from "react";

import { post } from "./Api";
const Trash = ({ T }) => {
  const readtrash = T.filter((curElem) => {
    if (curElem.value === "trash") {
      return curElem;
    }
  });
  function Restore(id, did, Nt, t, co) {
    const daa = {
      aid: did,
      Notetitle: Nt,
      text: t,
      color: co,
      value: "none",
      id: id,
    };

    post(daa, id);
  }

  return (
    <>
      <br />
      <div class="row">
        {readtrash.map((curElem) => {
          const { aid, Notetitle, text, color, value, id } = curElem;

          return (
            <>
              <div class="col-lg-3">
                <div
                  class="card mb-3 "
                  style={{
                    color: "blue",
                    maxWidth: "18rem",
                    backgroundColor: curElem.color,
                  }}
                >
                  <div class="card-header">
                    <b>Title</b>
                    <br />
                    {Notetitle}
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Task</h5>
                    <p class="card-text">{text}</p>
                  </div>
                  <div class="card-header">
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => Restore(id, aid, Notetitle, text, color)}
                    >
                      Restore
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Trash;
