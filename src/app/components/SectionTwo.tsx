import { FaClock, FaChalkboardTeacher, FaVideo } from "react-icons/fa";
import { PiGraduationCapDuotone } from "react-icons/pi";

export default function StatsSection() {
  const stats = [
    {
      icon: <FaClock className="text-red-500 text-5xl" />,
      title: "+80k hours of course",
      desc: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices.",
    },
    {
      icon: <PiGraduationCapDuotone className="text-purple-500 text-5xl" />,
      title: "+4,000 students",
      desc: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student.",
    },
    {
      icon: <FaChalkboardTeacher className="text-gray-700 text-5xl" />,
      title: "+100 teachers",
      desc: "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization.",
    },
    {
      icon: <FaVideo className="text-red-500 text-5xl" />,
      title: "+60 webinars",
      desc: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student.",
    },
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold">
          All-In-One{" "}
          <span className="text-orange-500">Cloud Software.</span>
        </h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Skilline is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
