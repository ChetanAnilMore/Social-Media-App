const LoadingSpinner = () => {
  return (
    <div class="d-flex justify-content-center my-5">
      <div
        class="spinner-border"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
