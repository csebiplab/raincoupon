
const ServicePageHeader = ({ bg, title }) => {
  return (
    <section
      className="bg-cover bg-center bg-black/70 py-20"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="container text-center">
        <h2 className="text-white">{title}</h2>
      </div>
    </section>
  );
};

export default ServicePageHeader;
