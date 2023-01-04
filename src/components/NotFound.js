const NotFound = ({ needFullHeight }) => {
  return (
    <section className={`not-found wrapper ${needFullHeight && "min-h-100vh"}`}>
      <h2 className="section-title">Page Not Found</h2>
    </section>
  );
};

export default NotFound;
