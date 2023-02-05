import { useNavigate } from "react-router";

const Success = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div>Success</div>
      <div className="btn btn-danger" onClick={() => navigate(-1)}>Return page</div>
    </div>
  );
};

export default Success;
