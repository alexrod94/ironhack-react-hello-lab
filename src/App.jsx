import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="bg-black pb-10">
        <div className="container w-[90%] mx-auto">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="mt-12 p-5 w-[90%] mx-auto pb-20">
        <div className="grid grid-cols-4 gap-16">
          <div className="card flex flex-col items-start">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
              alt=""
              width="150"
            />
            <h2 className="text-2xl font-semibold mt-3 pl-4">Declarative</h2>
            <p className="pl-4">
              React makes it painless to create interactive UIs
            </p>
          </div>
          <div className="card flex flex-col items-start">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
              alt=""
              width="150"
            />
            <h2 className="text-2xl font-semibold mt-3 pl-4">Components</h2>
            <p className="pl-4">
              Build encapsulated components that manage their state
            </p>
          </div>
          <div className="card flex flex-col items-start">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
              alt=""
              width="150"
            />
            <h2 className="text-2xl font-semibold mt-3 pl-4">Single - Way</h2>
            <p className="pl-4">
              A set of immutable values are passed to the component's
            </p>
          </div>
          <div className="card flex flex-col items-start">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
              alt=""
              width="150"
            />
            <h2 className="text-2xl font-semibold mt-3 pl-4">JSX</h2>
            <p className="pl-4">
              Statically-typed, designed to run on modern browsers
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
