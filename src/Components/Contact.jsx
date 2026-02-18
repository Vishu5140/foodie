import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-orange-50 px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* 🔶 HEADER */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-600">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Have a question, feedback, or craving?  
            We'd love to hear from you!
          </p>
        </div>

        {/* 🔶 CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* 📬 CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-linear-to-r from-orange-500 to-rose-500 text-white font-semibold shadow hover:scale-[1.02] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* 📍 CONTACT INFO */}
          <div className="space-y-6">
            <InfoCard
              title="📍 Address"
              text="221B Baker Street, New Delhi, India – 110001"
            />
            <InfoCard
              title="📧 Email"
              text="support@foodiehub.com"
            />
            <InfoCard
              title="📞 Phone"
              text="+91 98765 43210"
            />
            <InfoCard
              title="⏰ Working Hours"
              text="Mon – Sun: 9:00 AM – 11:00 PM"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

/* 🔹 Reusable Info Card */
const InfoCard = ({ title, text }) => (
  <div className="bg-white rounded-2xl shadow p-6">
    <h3 className="text-lg font-semibold text-orange-600 mb-2">
      {title}
    </h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default Contact;
