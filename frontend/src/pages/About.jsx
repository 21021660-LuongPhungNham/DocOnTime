import { assets } from "../assets/assets"

const About = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>ABOUT <span className="text-gray-700 font-medium">US</span></p>
      </div>

      <div className="flex flex-col my-10 md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4">
          <p>Welcome to our online appointment booking application – a modern solution that helps you easily connect with top specialists without wasting time waiting in long queues.</p>
          <p>With a user-friendly interface and a simple booking process, our application allows you to choose doctors and specialties that suit your needs and schedule an appointment in just a few steps. You can track your appointments, receive reminders, and even participate in online consultations from home, saving time and improving healthcare efficiency.</p>
          <b className="text-gray-800">Our Vision</b>
          <p>We envision a future where healthcare is easily accessible to everyone, eliminating long waiting times and connecting patients with the right doctors anytime, anywhere. Our mission is to create a smart, secure, and efficient healthcare platform that enhances the well-being of every individual</p>
        </div>
      </div>

      <div className="text-xl mt-4">
        <p>WHY <span className="text-gray-700 font-semibold">CHOOSE US</span></p>
      </div>

      <div className="flex flex-col md:flex-row text-sm mt-6">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transaction-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p className="">Minimize waiting time, allowing you to book appointments and receive medical consultations quickly and accurately.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transaction-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p className="">Easily schedule appointments from home, track your schedule, and receive reminders so you never miss an appointment.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transaction-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p className="">Get personalized doctor recommendations based on your needs, ensuring the best healthcare experience.</p>
        </div>
      </div>

    </div>
  )
}

export default About