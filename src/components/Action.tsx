import { actions } from "astro:actions";
import React, { useState } from "react";

const Action = () => {
  const [res, setRes] = useState<{ data: any; error: any } | null>(null);

  const handleLeftClick = async () => {
    const { data, error } = await actions.myAction.example({
      error: false,
    });

    setRes({ data, error });
  };

  const handleRightClick = async () => {
    const { data, error } = await actions.myAction.example({
      error: true,
    });

    setRes({ data, error });
  };

  return (
    <>
      <div onClick={handleLeftClick} onAuxClick={handleRightClick}>
        Trigger
      </div>
      {res && <pre>{JSON.stringify(res, null, 2)}</pre>}
    </>
  );
};

export default Action;
