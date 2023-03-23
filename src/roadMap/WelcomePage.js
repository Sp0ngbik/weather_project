import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const check = useNavigate();
  return (
    <div>
      <div>hello</div>
      <button
        onClick={() => {
          check("/weather_info");
        }}
      >
        sad
      </button>
    </div>
  );
};

export default WelcomePage;
