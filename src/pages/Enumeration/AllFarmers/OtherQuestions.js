import React from "react";
import { useState } from "react";
import classNames from "classnames";


export default function OtherQuestions() {
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [isOpenThird, setIsOpenThird] = useState(false);

  return (
    <div className="bg-white mt-5">
      <div id="accordion-open" data-accordion="open">
        <h2 id="accordion-open-heading-1">
          <button
            onClick={() => setIsOpenFirst((prev) => !prev)}
            type="button"
            className="flex items-center justify-between w-full p-5 font-regluar text-left text-gray-900 border border-b-0 border-gray-200 rounded-t-md focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-1"
            aria-expanded="true"
            aria-controls="accordion-open-body-1"
          >
            <span className="flex items-center">
              How do you raise fund/capital for your farm?
            </span>
            <svg
              data-accordion-icon
              className="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          className={classNames(isOpenFirst === true ? "" : "hidden")}
          aria-labelledby="accordion-open-heading-1"
        >
          <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Here is the answer to he question that the field agent asked the
              farmer. we hope it is a short and concise answer if its not, the
              field agent should summarize it.
            </p>
          </div>
        </div>
        <h2 id="accordion-open-heading-2">
          <button
            onClick={() => setIsOpenSecond((prev) => !prev)}
            type="button"
            className="flex items-center justify-between w-full p-5 font-regluar text-left text-gray-900 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-2"
            aria-expanded="false"
            aria-controls="accordion-open-body-2"
          >
            <span className="flex items-center">
              How do you sell your farm products?
            </span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          className={classNames(isOpenSecond === true ? "" : "hidden")}
          id="accordion-open-body-2"
          aria-labelledby="accordion-open-heading-2"
        >
          <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Here is the answer to he question that the field agent asked the
              farmer. we hope it is a short and concise answer if its not, the
              field agent should summarize it.
            </p>
          </div>
        </div>

        <h2 id="accordion-open-heading-3">
          <button
            onClick={() => setIsOpenThird((prev) => !prev)}
            type="button"
            className="flex items-center justify-between w-full p-5 font-regluar text-left text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-3"
            aria-expanded="false"
            aria-controls="accordion-open-body-3"
          >
            <span className="flex items-center">
              What factor can improve your yield?
            </span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          className={classNames(isOpenThird === true ? "" : "hidden")}
          id="accordion-open-body-3"
          aria-labelledby="accordion-open-heading-3"
        >
          <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Here is the answer to he question that the field agent asked the
              farmer. we hope it is a short and concise answer if its not, the
              field agent should summarize it.
            </p>
          </div>
        </div>

        <h2 id="accordion-open-heading-3">
          <button
            onClick={() => setIsOpenThird((prev) => !prev)}
            type="button"
            className="flex items-center justify-between w-full p-5 font-regluar text-left text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-3"
            aria-expanded="false"
            aria-controls="accordion-open-body-3"
          >
            <span className="flex items-center">
              How do you keep record of your farm sales?
            </span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          className={classNames(isOpenThird === true ? "" : "hidden")}
          id="accordion-open-body-3"
          aria-labelledby="accordion-open-heading-3"
        >
          <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Here is the answer to he question that the field agent asked the
              farmer. we hope it is a short and concise answer if its not, the
              field agent should summarize it.
            </p>
          </div>
        </div>

        <h2 id="accordion-open-heading-3">
          <button
            onClick={() => setIsOpenThird((prev) => !prev)}
            type="button"
            className="flex items-center justify-between w-full p-5 font-regluar text-left text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-3"
            aria-expanded="false"
            aria-controls="accordion-open-body-3"
          >
            <span className="flex items-center">
              What Challenges are affecting you as a farmer?
            </span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          className={classNames(isOpenThird === true ? "" : "hidden")}
          id="accordion-open-body-3"
          aria-labelledby="accordion-open-heading-3"
        >
          <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Here is the answer to he question that the field agent asked the
              farmer. we hope it is a short and concise answer if its not, the
              field agent should summarize it.
            </p>
          </div>
        </div>

        <h2 id="accordion-open-heading-3">
          <button
            onClick={() => setIsOpenThird((prev) => !prev)}
            type="button"
            className="flex items-center justify-between w-full p-5 font-regluar text-left text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-3"
            aria-expanded="false"
            aria-controls="accordion-open-body-3"
          >
            <span className="flex items-center">
              What type of farming do you engage in?
            </span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          className={classNames(isOpenThird === true ? "" : "hidden")}
          id="accordion-open-body-3"
          aria-labelledby="accordion-open-heading-3"
        >
          <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Here is the answer to he question that the field agent asked the
              farmer. we hope it is a short and concise answer if its not, the
              field agent should summarize it.
            </p>
          </div>
        </div>

        <h2 id="accordion-open-heading-3">
          <button
            onClick={() => setIsOpenThird((prev) => !prev)}
            type="button"
            className="flex items-center justify-between w-full p-5 font-regluar text-left text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-3"
            aria-expanded="false"
            aria-controls="accordion-open-body-3"
          >
            <span className="flex items-center">
              Are you benefiting from any agricultural interventions?
            </span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          className={classNames(isOpenThird === true ? "" : "hidden")}
          id="accordion-open-body-3"
          aria-labelledby="accordion-open-heading-3"
        >
          <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Here is the answer to he question that the field agent asked the
              farmer. we hope it is a short and concise answer if its not, the
              field agent should summarize it.
            </p>
          </div>
        </div>

        <h2 id="accordion-open-heading-3">
          <button
            onClick={() => setIsOpenThird((prev) => !prev)}
            type="button"
            className="flex items-center justify-between w-full p-5 font-regluar text-left text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-3"
            aria-expanded="false"
            aria-controls="accordion-open-body-3"
          >
            <span className="flex items-center">
              What is the source of your farm water?
            </span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          className={classNames(isOpenThird === true ? "" : "hidden")}
          id="accordion-open-body-3"
          aria-labelledby="accordion-open-heading-3"
        >
          <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Here is the answer to he question that the field agent asked the
              farmer. we hope it is a short and concise answer if its not, the
              field agent should summarize it.
            </p>
          </div>
        </div>

        <h2 id="accordion-open-heading-3">
          <button
            onClick={() => setIsOpenThird((prev) => !prev)}
            type="button"
            className="flex items-center justify-between w-full p-5 font-regluar text-left text-gray-900 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-3"
            aria-expanded="false"
            aria-controls="accordion-open-body-3"
          >
            <span className="flex items-center">
              What is the source of your farm Labour?
            </span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          className={classNames(isOpenThird === true ? "" : "hidden")}
          id="accordion-open-body-3"
          aria-labelledby="accordion-open-heading-3"
        >
          <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Here is the answer to he question that the field agent asked the
              farmer. we hope it is a short and concise answer if its not, the
              field agent should summarize it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
