import DoctorCard from '../../components/Doctors/DoctorCard'
import {doctors} from '../../assets/data/doctors'
import Testimonials from "../../components/Testimonial";


const Doctors = () => {
  return (
  <>
  <section className="bg-[#fff9ea]">
    <div className="container text-center">
      <h2 className="heading">Find a doctor</h2>
      <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0055ff2c] rounded-md flex items-center justify-between ">
        <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor " placeholder="Search a Doctor" />
        <button className="btn mt-0 rounded-none rounded-r-md">Search</button>
      </div>

    </div>
  </section>
  <section>
    <div className="container">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {doctors.map(doctor=> (<DoctorCard key={doctor.id} doctor={doctor}/>))}
      </div>
    </div>
  </section>
  <section>
          <div className="container">
          <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">What our patients say</h2>
              <p className="text__para text-center">
                World-class care for everyone. Our health system offers
                unmatched, expert health care.{" "}
              </p>
            </div>
            <Testimonials/>
          </div>
        </section>
  </>
  )
}

export default Doctors