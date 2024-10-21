import { Link } from "react-router-dom";
import startIcon from "../../../assets/images/Star.png";
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    specialty,
    avgRating,
    totalRating,
    photo,
    totalPatients,
    hospital,
    adress,
  } = doctor;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} alt="name" />
      </div>
      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-textColor font-[700] ">
        {name}
      </h2>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 rounded font-[500]">
          {specialty}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7  ">
            <img src={startIcon} alt="rating" />
            {avgRating}
          </span>
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-textColor">
            +{totalPatients} patients
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            At {hospital}
          </p>
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            {" "}
            {adress.street}
          </p>
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            {" "}
            {adress.state}
          </p>
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            {" "}
            {adress.country}
          </p>
        </div>
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none hover:text-white"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
