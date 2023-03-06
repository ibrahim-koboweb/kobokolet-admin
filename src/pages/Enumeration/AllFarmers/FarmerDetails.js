import React from "react";
import { Link } from "react-router-dom";
import OtherQuestions from "./OtherQuestions";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";


export default function FarmerDetails() {

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'farmer data',
        onAfterPrint: () => alert('print success')
    })

  return (
    <div
      ref={componentRef}
      style={{ width: "100%", height: window.innerHeight }}
      className="p-4"
    >
      <div className="flex items-center justify-between">
        <div className="text-2xl  pt-1 font-medium">Farmer Details</div>
        <button
          className="bg-primary py-3 px-6 rounded text-white"
          onClick={handlePrint}
        >
          print details to pdf
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-3 mt-4 lg:grid-rows-1 ">
        <div className="bg-grey-100 rounded ">
          <div className="bg-white rounded p-6">
            <div
              className="h-28 w-28 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/80x80?face")',
              }}
            >
              {" "}
            </div>
            <h2 className="text-2xl mt-2 font-regular">Mohammed Sani</h2>
            <div className="gap-y-4 column-gap">
              <div className="mt-6">
                <span className="flex gap-2 mt-2 items-center">
                  <p> Phone Number:</p>{" "}
                  <p className="font-extralight">08100112233</p>
                </span>
              </div>
              <div>
                <span className="flex gap-2 mt-2 items-center">
                  <p>Email:</p>{" "}
                  <p className="font-extralight">sani@gmail.com</p>
                </span>
              </div>

              <div>
                <span className="flex gap-2 mt-2 items-center">
                  <p>Gender:</p> <p className="font-extralight">Male</p>
                </span>
              </div>
              <div>
                <span className="flex gap-2 mt-2 items-center">
                  <p>Have NIN:</p> <p className="font-extralight">Yes</p>
                </span>
              </div>
              <div>
                <span className="flex gap-2 mt-2 items-center">
                  <p>NIN:</p> <p className="font-extralight">2334985743</p>
                </span>
              </div>
              <div>
                <span className="flex gap-2 mt-2 items-center">
                  <p>State: </p> <p className="font-extralight">Benin</p>
                </span>
              </div>
              <div>
                <span className="flex gap-2 mt-2 items-center">
                  <p>L.G.A: </p> <p className="font-extralight">Benden</p>
                </span>
              </div>
              <div>
                <span className="flex gap-2 mt-2 items-center">
                  <p>Ward:</p> <p className="font-extralight">Ikperi</p>
                </span>
              </div>
              <div>
                <span className="flex gap-2 mt-2 items-center">
                  <p>Date:</p> <p className="font-extralight">02/04/2023</p>
                </span>
              </div>
              <div>
                <span className="flex gap-2 mt-2 items-center">
                  <p>Time:</p> <p className="font-extralight">12:23pm</p>
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white flex-1 rounded p-6 mt-6">
            <div className="flex align-center justify-between text-md">
              <p>Assigned Field Agents</p>
              <Link className="text-primary" to="#">
                Assign a Field Agent
              </Link>
            </div>
            <div className="mt-8">
              <div className="flex items-center mt-2 gap-2">
                <div
                  className="h-6 w-6 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage:
                      'url("https://source.unsplash.com/80x80?face")',
                  }}
                >
                  {" "}
                </div>
                <p>Sani Gabriel</p>
              </div>
              <div className="flex items-center mt-3 gap-2">
                <div
                  className="h-6 w-6 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage:
                      'url("https://source.unsplash.com/80x80?face")',
                  }}
                >
                  {" "}
                </div>
                <p>Musa Mohammad</p>
              </div>
            </div>
          </div>
        </div>

        <OtherQuestions />
      </div>
    </div>
  );
}
