import React, { Fragment } from "react";

interface Props {
  name: String;
}

const InputNumber: React.FC<Props> = ({ name }) => {
  return (
    <Fragment>
      <label>
        {name} : <input type="text" />
      </label>
    </Fragment>
  );
};

export default InputNumber;
