import React, { useEffect, useState } from "react";

import { post } from "./Api";

const Viewtask = ({ V }) => {
  const [cha, setcha] = useState([]);
  useEffect(() => {
    setcha(
      V.filter((curElem) => {
        if (curElem.value === "none") {
          return curElem;
        }
      })
    );
  }, []);
  function Revalue(id, rid, Nt, t, co, v) {
    const daa = {
      id: id,
      aid: rid,
      Notetitle: Nt,
      text: t,
      color: co,
      value: v,
    };

    post(daa, id);
  }
  function Renderitem(u, value) {
    const read = cha.filter((curElem) => {
      if (curElem.id === u) {
        {
          curElem.value = value;
          Revalue(
            curElem.id,
            curElem.aid,
            curElem.Notetitle,
            curElem.text,
            curElem.color,
            curElem.value
          );
        }
      }
    });

    setcha(read);
  }

  function Re(u, colorchange) {
    const read = cha.filter((curElem) => {
      if (curElem.id === u) {
        {
          curElem.color = colorchange;
          Revalue(
            curElem.id,
            curElem.aid,
            curElem.Notetitle,
            curElem.text,
            curElem.color,
            curElem.value
          );
        }
      }
    });

    setcha(read);
  }

  return (
    <div class="row">
      {cha.map((item) => (
        <div class="col-lg-3">
          <div
            class="card bg-light mb-3"
            style={{
              color: "blue",
              maxWidth: "18rem",
            }}
          >
            <div
              style={{
                backgroundColor: item.color,
              }}
            >
              <div class="card-header">
                <b>Title</b>
                <br />
                {item.Notetitle}
              </div>
              <div class="card-body">
                <h5 class="card-title">Task</h5>
                <p class="card-text">{item.text}</p>
              </div>
            </div>
            <div class="card-header">
              <button
                type="button"
                class="  btn-outline-primary"
                onClick={() => Renderitem(item.id, "trash")}
              >
                Trash
              </button>

              <button
                type="button"
                size="4"
                class="btn-outline-primary"
                onClick={() => Renderitem(item.id, "ar")}
              >
                Archieve
              </button>
              <div class="dropdown">
                <button
                  type="button"
                  class="btn-outline-primary"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Color
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <button
                    class="dropdown-item"
                    onClick={() => Re(item.id, "Orange")}
                  >
                    Orange
                  </button>
                  <button
                    class="dropdown-item"
                    onClick={() => Re(item.id, "White")}
                  >
                    White{" "}
                  </button>
                  <button
                    class="dropdown-item"
                    onClick={() => Re(item.id, "Black")}
                  >
                    Black
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Viewtask;
