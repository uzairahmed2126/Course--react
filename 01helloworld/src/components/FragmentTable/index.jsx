import React from "react";
import FragmentTd from "../FragmentTd/index.jsx";

function FragmentTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <FragmentTd />
        </tr>
      </tbody>
    </table>
  );
}

export default FragmentTable;
