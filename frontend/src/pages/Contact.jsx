import { assets } from "../assets/assets"

const Contact = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>CONTACT <span className="text-gray-700 font-semibold">US</span></p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img className="w-full max-w-[360px]" src={assets.contact_image} alt="" />

        <di className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">We are always ready to listen and support you.</p>
          <p className="text-gray-500">Address: 123 ABC street, A district, Ha Noi </p>
          <p className="text-gray-500">Tel: (+84) 012.345.578 <br />Email: 123abc@gmail.com</p>
          <p className="text-gray-500">Learn more about our teams and job opening</p>
          <p className="font-semibold text-lg text-gray-600">Careers</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transation-all duration-500">Explore Jobs</button>
        </di>
      </div>
    </div>
  )
}

export default Contact