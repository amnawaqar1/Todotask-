import React, { useEffect, useState } from "react";
import Viewtask from "./viewtask";

const Search = ({ S }) => {
  const [searchterm, setsearchterm] = useState("");

  const searchText = (event) => {
    setsearchterm(event.target.value);
  };
  let data = S.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(searchterm.toString().toLowerCase())
    );
  });

  return (
    <div>
      <div>
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          size="3"
          value={searchterm}
          onChange={searchText.bind(this)}
        />
      </div>
      <br />
      <Viewtask V={data} />
    </div>
  );
};
export default Search;
