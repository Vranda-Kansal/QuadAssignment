import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ movieData }) => {
  const { name, schedule, runtime, averageRuntime } = movieData;
  const [text, setText] = useState("Book Now");
  const [storedName, setStoredName] = useState("Enter Full Name");
  const [storedEmail, setStoredEmail] = useState("Enter Email");
  const [storedPlace, setStoredPlace] = useState("Enter Theatre Name");
  const navigate = useNavigate();
  const Fullname = useRef();
  const email = useRef();
  const adults = useRef();
  const place = useRef();

  const checkText = () => {
    localStorage.setItem(
      "name",
      JSON.stringify(Fullname.current.value || storedName)
    );
    localStorage.setItem(
      "email",
      JSON.stringify(email.current.value || storedEmail)
    );
    localStorage.setItem(
      "place",
      JSON.stringify(place.current.value || storedPlace)
    );
    setText("Booked");
    navigate("/");
  };
  useEffect(() => {
    const storedName = JSON.parse(localStorage.getItem("name"));
    const storedEmail = JSON.parse(localStorage.getItem("email"));
    const storedPlace = JSON.parse(localStorage.getItem("place"));
    setStoredName(storedName);
    setStoredEmail(storedEmail);
    setStoredPlace(storedPlace);
  }, []);

  return (
    <div className="w-1/2 m-5 p-2 mx-auto  h-full bg-yellow-200  rounded my-7">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1 className=" text-4xl font-bold text-center text-amber-800 my-2 py-2">
          Book Ticket
        </h1>
        <div className="flex flex-wrap w-full m-5 p-2">
          <div className="flex ">
            <label htmlFor="name" className=" m-2 p-2">
              Movie:{" "}
            </label>
            <input
              id="name"
              type="name"
              placeholder={name}
              className=" px-4 py-2 my-2 bg-green-100 placeholder-black rounded "
              disabled
            />
          </div>
          <div className="flex ">
            <label htmlFor="Duration" className="m-2 p-2">
              Duration:{" "}
            </label>
            <input
              id="Duration"
              placeholder={
                schedule?.days +
                " at " +
                schedule?.time +
                " " +
                (runtime || averageRuntime) +
                "min"
              }
              className=" px-4 py-2 my-2 bg-green-100 placeholder-black rounded "
              disabled
            />
          </div>
          <div className="flex ">
            <label htmlFor="Fullname" className="p-2">
              Full Name:{" "}
            </label>
            <input
              ref={Fullname}
              id="Fullname"
              type="Fullname"
              placeholder={storedName}
              className=" px-4 py-2 my-2 bg-green-100 placeholder-black rounded "
            />
          </div>
          <div className="flex">
            <label htmlFor="email" className="p-2">
              Email Address:{" "}
            </label>
            <input
              ref={email}
              id="email"
              type="text"
              placeholder={storedEmail}
              className="px-4 py-2 my-2 bg-green-100 placeholder-black rounded  "
            />
          </div>
          <div className="flex">
            <label htmlFor="adults" className="p-2">
              Members:{" "}
            </label>
            <input
              ref={adults}
              id="adults"
              type="text"
              placeholder="Enter Adults"
              className="px-4 py-2 my-2 bg-green-100 placeholder-black rounded  "
            />
          </div>
          <div className="flex">
            <label htmlFor="place" className="p-2">
              Theater Name:{" "}
            </label>
            <input
              ref={place}
              id="place"
              type="text"
              placeholder={storedPlace}
              className="px-4 py-2 my-2 bg-green-100 placeholder-black rounded  "
            />
          </div>
        </div>
        <button
          className="px-4 py-3 my-6  w-full bg-amber-700 text-white rounded-xl"
          onClick={checkText}
        >
          {text}
        </button>
      </form>
    </div>
  );
};
export default BookingForm;
