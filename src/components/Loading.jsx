import "./index.css";

export const Loading = () => {
  return (
    <div className="container-lds">
      <div className="container-loading">
        <div className="container-lds">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
