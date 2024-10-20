import React from 'react';

const VaccineRegistration = () => {
    return (
        <div className="flex flex-wrap lg:flex-row items-center justify-around p-4 md:p-8 lg:p-12 gap-8">
            {/* Form Section */}
            <div className="w-full max-w-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left">
                    Get your vaccine registration today
                </h2>
                <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Patient's Full Name</label>
                        <input
                            type="text"
                            placeholder="Full name"
                            className="border border-gray-300 rounded-lg bg-[#0B153C26] p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Mobile Number</label>
                        <p className="text-sm text-gray-500 mb-2">
                            Notifications for appointment and reminders will be sent to this provided number
                        </p>
                        <div className="flex flex-col sm:flex-row items-stretch gap-2">
                            <select
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>🇳🇬 +234</option>
                                <option>🇺🇸 +1</option>
                                <option>🇬🇧 +44</option>
                                {/* More country codes */}
                            </select>
                            <input
                                type="text"
                                placeholder="Phone number"
                                className="flex-1 border border-gray-300 bg-[#0B153C26] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="button"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                            >
                                Verify
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                    <p className="text-center text-gray-500 mt-4">
                        Already registered? <a href="#" className="text-blue-500 hover:underline">Check your status</a>
                    </p>
                </form>
            </div>

            {/* Image Section */}
            <div className="w-full max-w-xs lg:max-w-md">
                <div className="relative bg-gray-100 rounded-lg p-4 shadow-md">
                    <img
                        src="images\Group 45.png" // Replace with the actual image path
                        alt="COVID-19 Vaccine"
                        className="rounded-lg w-full h-auto"
                    />
                   
                </div>
            </div>
        </div>
    );
};

export default VaccineRegistration;
