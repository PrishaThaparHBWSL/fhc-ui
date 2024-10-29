import { LiaEdit } from "react-icons/lia";
import { FiCopy } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { FaRegSave } from "react-icons/fa";
import { GrSend } from "react-icons/gr";

export default function OverView() {
  return (
    <div className="bg-[#F2F2F2] w-[90%] mx-auto border border-gray-300">
      <div className="w-[90%] mx-auto">
        <div className="text-2xl font-bold text-center mb-2">
          Your InstaQuote Overview
        </div>

        <div className="bg-[#D9D9D9]">
          <div>
            <div className="flex space-x-10 justify-center">
              <div className="mt-4 mb-4">1</div>
              <div className="mt-4 mb-4">Herc Door Entrances</div>
              <div className="mt-4 mb-4">View Configurations</div>
              <div className="mt-4 mb-4">
                <input
                  type="text"
                  id="notes"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your notes here"
                />
              </div>
              <div className="mt-4 mb-4">
                <input
                  type="text"
                  id="notes"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your notes here"
                />
              </div>
              <div className="mt-4 mb-4">ea.</div>
              <div className="mt-4 mb-4">
                <input
                  type="text"
                  id="notes"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="1"
                />
              </div>
              <div className="mt-4 mb-4">$0.00</div>
              <div className="mt-4 mb-4">$0.00</div>
              <div className="flex mt-4 mb-4">
                <div>
                  <LiaEdit />
                </div>
                <div>
                  <FiCopy />
                </div>
                <div>
                  <RiDeleteBinLine />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 justify-end mr-10">
          <div>Amount Total</div>
          <div>$0.00</div>
        </div>

        <div className="bg-[#D9D9D9]">
          <div>Finalize Your Quote</div>
          <div className="flex space-x-10 justify-start">
            <div>
              <input
                type="text"
                id="notes"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your Purchase Order Number"
              />
            </div>
            <div>
              <input
                type="text"
                id="notes"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your Job Name"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-wrap gap-2">
              <div>
                <button className="flex gap-2 bg-[#004361] text-white p-3">
                  <GrView className="h-5 w-5" />
                  <div>View Quotes</div>
                </button>
              </div>
              <div>
                <button className="flex gap-  bg-[#004361] text-white p-3">
                  <RiDeleteBinLine className="h-5 w-5" />
                  <div>Clear Layout and start over</div>
                </button>
              </div>
              <div>
                <button className="flex gap-2 bg-[#004361] text-white p-3">
                  <FaRegSave className="h-5 w-5" />
                  <div>Save Layout</div>
                </button>
              </div>
              <div>
                <button className="flex gap-2 bg-[#004361] text-white p-3">
                  <GrSend className="h-5 w-5" />
                  <div>Request A Formal Quote</div>
                </button>
              </div>
            </div>
          </div>
          <div className="text-[#004361]">
            <div>
              <span className="font-bold">Clear Layout and Start Over </span>
              Deletes your current configurations and allows you to start from
              scratch.
            </div>
            <div>
              <span className="font-bold">Save Layout </span>
              Saves your configuration and allows you to come back and add, edit
              or remove items later.
            </div>
            <div>
              <span className="font-bold">Generate Formal Quote </span>
              Submits your configurations as a Formal Quote into our system. You
              can convert this order online or by calling in when you are ready
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
