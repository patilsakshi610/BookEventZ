import React, { useState } from "react";

const StateUpdate = () => {
  const [update, setUpdate] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setUpdate(!update);
        }}
      >
        {update ? "Hide Data" : "Show Data"}
      </button>

      {update && <p>State Updated</p>}
    </div>
  );
};

export default StateUpdate;
