/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

export default function Stepper({
  step,
  steps,
  section,
  setSections,
  sections,
}) {
  const [stepperSection, setStepperSection] = useState({});

  useEffect(() => {
    setStepperSection(sections);
  }, [section]);

  return (
    <>
      <div className="mx-8 p-4">
        <div className="flex items-center">
          <div className="flex items-center text-teal-600 relative">
            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bookmark"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600 font-bold">
              Personal Info
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              stepperSection.Objective ? 'border-teal-600' : 'border-gray-300'
            }`}
          ></div>
          <div
            className={`flex items-center ${
              stepperSection.Objective ? 'text-teal-600' : 'text-gray-500'
            } relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  ${
                stepperSection.Objective ? 'border-teal-600' : 'border-gray-300'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-user-plus "
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                stepperSection.Objective ? 'text-teal-600' : 'text-gray-600'
              } font-bold`}
            >
              Objective
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              stepperSection.Skills ? 'border-teal-600' : 'border-gray-300'
            }`}
          ></div>
          <div
            className={`flex items-center ${
              stepperSection.Skills ? 'text-teal-600' : 'text-gray-500'
            } relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  ${
                stepperSection.Skills ? 'border-teal-600' : 'border-gray-300'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail "
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                stepperSection.Skills ? 'text-teal-600' : 'text-gray-600'
              } font-bold`}
            >
              Skills
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              stepperSection.Projects ? 'border-teal-600' : 'border-gray-300'
            }`}
          ></div>
          <div
            className={`flex items-center ${
              stepperSection.Projects ? 'text-teal-600' : 'text-gray-500'
            } relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  ${
                stepperSection.Projects ? 'border-teal-600' : 'border-gray-300'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-database "
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                stepperSection.Projects ? 'text-teal-600' : 'text-gray-600'
              } font-bold`}
            >
              Projects
            </div>
          </div>

          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              stepperSection.History ? 'border-teal-600' : 'border-gray-300'
            }`}
          ></div>
          <div
            className={`flex items-center ${
              stepperSection.History ? 'text-teal-600' : 'text-gray-500'
            } relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  ${
                stepperSection.History ? 'border-teal-600' : 'border-gray-300'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-database "
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                stepperSection.History ? 'text-teal-600' : 'text-gray-600'
              } font-bold`}
            >
              Work History
            </div>
          </div>

          <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
              stepperSection.Education ? 'border-teal-600' : 'border-gray-300'
            }`}
          ></div>
          <div
            className={`flex items-center ${
              stepperSection.Education ? 'text-teal-600' : 'text-gray-500'
            } relative`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  ${
                stepperSection.Education ? 'border-teal-600' : 'border-gray-300'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-database "
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                stepperSection.Education ? 'text-teal-600' : 'text-gray-600'
              } font-bold`}
            >
              Education
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
