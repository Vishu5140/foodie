import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const favCount = useSelector((state) => state.fav.favItems.length);
  const cartCount = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* PROFILE HEADER */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center text-3xl font-bold text-orange-600">
            D
          </div>
          <div>
            <h1 className="text-2xl font-bold">Devesh Gupta</h1>
            <p className="text-gray-500">devesh@email.com</p>
            <p className="text-sm text-orange-500 mt-1">Member since 2024</p>
          </div>
        </div>

        {/* ACCOUNT STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard title="Orders" value="12" />
          <StatCard title="Favourites" value={favCount} />
          <StatCard title="Cart Items" value={cartCount} />
        </div>

        {/* PERSONAL INFO */}
        <Section title="Personal Information">
          <InfoRow label="Full Name" value="Devesh Gupta" />
          <InfoRow label="Email" value="devesh@email.com" />
          <InfoRow label="Phone" value="+91 98765 43210" />
        </Section>

        {/* ADDRESS */}
        <Section title="Saved Address">
          <p className="text-gray-600">
            221B Baker Street,  
            <br />
            New Delhi, India – 110001
          </p>
        </Section>

        {/* PREFERENCES */}
        <Section title="Preferences">
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <input type="checkbox" defaultChecked className="accent-orange-500" />
          </div>

          <div className="flex items-center justify-between mt-3">
            <span>Dark Mode</span>
            <input type="checkbox" className="accent-orange-500" />
          </div>
        </Section>

        {/* SECURITY */}
        <Section title="Security">
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Change Password
          </button>
        </Section>

        {/* DANGER ZONE */}
        <div className="bg-white rounded-2xl shadow p-6 border border-red-200">
          <h2 className="text-lg font-semibold text-red-600 mb-3">
            Danger Zone
          </h2>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}

/* 🔹 Reusable Components */

const Section = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow p-6">
    <h2 className="text-xl font-semibold mb-4 text-orange-600">{title}</h2>
    {children}
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between py-2 border-b last:border-none">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const StatCard = ({ title, value }) => (
  <div className="bg-white rounded-2xl shadow p-4 text-center">
    <p className="text-gray-500">{title}</p>
    <p className="text-2xl font-bold text-orange-600">{value}</p>
  </div>
);

export default Profile;
