import { useNavigate } from "react-router-dom";

const WelcomeMessage = ({ onGetPostClick }) => {
  const navigate = useNavigate();
  return (
    <center>
      <div className="bg-gray text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-warning py-3">
            There are no posts to show
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4 text-white">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                onClick={() => navigate("/create-post")}
                type="button"
                className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              >
                Create Post
              </button>
              <button
                onClick={onGetPostClick}
                type="button"
                className="btn btn-outline-light btn-lg px-4"
              >
                Get Posts from server
              </button>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default WelcomeMessage;
