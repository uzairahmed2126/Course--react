import React, { useMemo, useState } from "react";

function Memo({ name }) {
  console.log("rendering memo component");
  return <div>{name}</div>;
}

export default Memo;
