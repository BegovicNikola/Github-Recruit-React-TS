import spinner from "../../assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="mt-20">
      <img
        width={180}
        className="mx-auto text-center"
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
};

export default Spinner;
