const UpdatePropsFuncDis = (props) => {
  return (
    <>
      <div
        style={{ backgroundColor: "skyblue", margin: "5px", padding: "10px" }}
      >
        <h1>Hello {props.name}</h1>
        <h1>Email : {props.email}</h1>
        <h3>Address : {props.other.address}</h3>
        <h3>Mobile : {props.other.mobile}</h3>
      </div>
    </>
  );
};

export default UpdatePropsFuncDis;
