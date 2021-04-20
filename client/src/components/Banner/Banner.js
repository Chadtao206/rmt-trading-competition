import "./Banner.scss";
import gif from "../../assets/rmt_gif.gif";

export const Banner = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img className="banner" src={gif} alt="loading..." />
      </div>
    </>
  );
};
