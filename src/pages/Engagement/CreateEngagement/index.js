import React from "react";

export default function CreateEngagement() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-start-4 col-span-6 border rounded bg-white">
        <div className="text-xl font-medium text-center my-8">Create an Engagement</div>
        <form>
          <div className="px-8">
            <div className="">
              <label className="block text-gray-700 mb-2 text-sm">
                Select Engagement Type
              </label>
              <select className="text-sm bg-gray-50 appearance-none border-gray-300 rounded w-full py-3 px-3  text-gray-500  leading-tight focus:outline-none focus:shadow-outline">
                <option disabled selected>
                  --Select State--
                </option>
                <option value="Lagos">Lagos State</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 px-6 py-2">
            <div className="p-2">
              <label className="block text-gray-700 mb-2 text-sm">State</label>
              <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="p-2">
              <label className="block text-gray-700 mb-2 text-sm">LGA</label>
              <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="p-2">
              <label className="block text-gray-700 mb-2 text-sm">Ward</label>
              <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="p-2">
              <label className="block text-gray-700 mb-2 text-sm">City</label>
              <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="p-2">
              <label className="block text-gray-700 mb-2 text-sm">Date</label>
              <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="p-2">
              <label className="block text-gray-700 mb-2 text-sm">Time</label>
              <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="p-2">
              <label className="block text-gray-700 mb-2 text-sm">
                Assign Agent
              </label>
              <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="p-2">
              <label className="block text-gray-700 mb-2 text-sm">
                Assign Influencer
              </label>
              <input className="text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
          </div>
          <div className="p-6">
            <button
              className="bg-primary w-full  text-white py-3 px-10 rounded-lg focus:outline-none focus:shadow-outline"
              type="button"
            >
              NEXT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
