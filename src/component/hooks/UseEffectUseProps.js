import React, { useEffect } from "react";

const UseEffectUseProps = (props) => {
  //   console.log(props);

  useEffect(() => {
    console.log("called with props count");
  }, [props.count, props.data]);

  //   useEffect(() => {
  //     console.log("called with props data");
  //   }, [props.data]);

  return (
    <>
      <h3>count props : {props.count}</h3>
      <h3>data props : {props.data}</h3>
    </>
  );
};

export default UseEffectUseProps;
