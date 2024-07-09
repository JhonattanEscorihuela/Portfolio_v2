// ExperienceTW.jsx

import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ExperienceTW() {
  const [diferenciaMeses, setDiferenciaMeses] = useState(null);
  const [difMonths, setDifMonths] = useState(null);

  useEffect(() => {
    const fechaActual = new Date();
    const fechaObjetivo = new Date("2023-08-15");
    const dateTarget = new Date("2024-02-01");

    // Calcular la diferencia en meses
    const diferenciaAnos =
      fechaObjetivo.getFullYear() - fechaActual.getFullYear();
    const diferenciaMeses =
      diferenciaAnos * 12 + (fechaObjetivo.getMonth() - fechaActual.getMonth());

    const difAnos = dateTarget.getFullYear() - fechaActual.getFullYear();
    const difMonths =
      difAnos * 12 + (dateTarget.getMonth() - fechaActual.getMonth());

    setDiferenciaMeses(diferenciaMeses * -1);
    setDifMonths(difMonths * -1);
  }, []);

  return (
    <div className="section" id="experienceWork">
      <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center ">
        <svg
          className="size-7"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
          <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
          <path d="M12 12l0 .01"></path>
          <path d="M3 13a20 20 0 0 0 18 0"></path>
        </svg>
        Work experience
      </h2>
      <ol className="relative border-s ">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold mt-1 text-[#9783C2] ">
            Developer Full Stack
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:text-blue-300 ms-3">
              Current
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal ">
            February 2024 - Present ({difMonths} months)
          </time>
          <p className="mb-4 text-[#ababab] font-normal ">
            <div className=" space-y-1">
              <div className="relative">
                <div className="absolute top-2 left-0 h-2 w-2 bg-white rounded-full"></div>
                <div className="ml-4">
                  Development and maintenance of user interfaces.
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-2 left-0 h-2 w-2 bg-white rounded-full"></div>
                <div className="ml-4">
                  Collaboration in design and technical feasibility.
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-2 left-0 h-2 w-2 bg-white rounded-full"></div>
                <div className="ml-4">Management and resolution of issues.</div>
              </div>
              <div className="relative">
                <div className="absolute top-2 left-0 h-2 w-2 bg-white rounded-full"></div>
                <div className="ml-4">
                  Presenting and communicating progress
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-2 left-0 h-2 w-2 bg-white rounded-full"></div>
                <div className="ml-4">
                  Backend development and API design using Go.
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-2 left-0 h-2 w-2 bg-white rounded-full"></div>
                <div className="ml-4">
                  Implementation of server-side logic and database interactions.
                </div>
              </div>
            </div>
          </p>
        </li>

        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold mt-1 text-[#9783C2] ">
            Network Support Engineer L1
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:text-blue-300 ms-3">
              Current
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal ">
            August 2023 - Present ({diferenciaMeses} months)
          </time>
          <p className="mb-4 text-[#ababab] font-normal ">
            <div className="space-y-1">
              <div className="relative">
                <div className="absolute top-2 left-0 h-2 w-2 bg-white rounded-full"></div>
                <div className="ml-4">
                  Address and resolve network failures including Flex WAN,
                  MacroLAN, router, and switch configurations.
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-2 left-0 h-2 w-2 bg-white rounded-full mr-2"></div>
                <div className="ml-4">
                  Experienced in diagnostics and troubleshooting across various
                  devices, including fiber optic equipment, ADSL, and leading
                  vendor technologies (Cisco, Huawei, Nokia, Juniper).
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-2 left-0 h-2 w-2 bg-white rounded-full mr-2"></div>
                <div className="ml-4">
                  Prioritize operational continuity by employing agile problem
                  identification and resolution, utilizing tools such as
                  Telnet/SSH and other remote access solutions.
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-2 left-0 h-2 w-2 bg-white rounded-full mr-2"></div>
                <div className="ml-4">
                  Teach and mentor new team members, sharing best practices and
                  ensuring they are equipped to handle critical network support
                  responsibilities.
                </div>
              </div>
            </div>
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold mt-1 text-[#9783C2] ">
            Rollout Manager (ROM)
          </h3>
          <time className="block mb-2 text-sm font-normal ">
            March 2022 – May 2023 (1 year 3 months)
          </time>
          <p className="mb-4 text-[#ababab] font-normal ">
            <div className="space-y-1">
              <div className="relative">
                <div className="absolute top-2 left-0 h-2 w-2 bg-white rounded-full"></div>
                <div className="ml-4">
                  As Rollout Manager, I successfully led the deployment of the
                  LTE700 project for Claro in Colombia, insured quality and
                  efficiency in time and budget. I supervised multidisciplinary
                  teams, complying with quality and schedule.
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-2 left-0 h-2 w-2 bg-white rounded-full"></div>
                <div className="ml-4">
                  I preserved fluid communication with Nokia, meeting their
                  expectations. In addition, I optimized the allocation of
                  resources, overcoming challenges with determination to meet
                  deadlines.
                </div>
              </div>
            </div>
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold mt-1 text-[#9783C2] ">
            Technical Project Manager
          </h3>
          <time className="block mb-2 text-sm font-normal ">
            January 2022 - February 2022 (2 months)
          </time>
          <p className="mb-4 text-[#ababab] font-normal ">
            <div className="relative">
              <div className="absolute top-2 left-0 h-2 w-2 bg-white rounded-full mr-2"></div>
              <div className="ml-4">
                As leader in the implementation of the LTE700 project for Claro
                in Colombia, I ensured efficient and successful deployments,
                maintaining high quality standards and controlling time and
                budget. I addressed to multidisciplinary teams, guaranteed
                quality and schedule compliance
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-2 left-0 h-2 w-2 bg-white rounded-full mr-2"></div>
              <div className="ml-4">
                I maintained constant communication with Nokia to meet their
                needs and expectations. I coordinated resources, optimized
                budgets and faced challenges with effective solutions, always
                prioritizing quality results and established deadlines.{" "}
              </div>
            </div>
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold mt-1 text-[#9783C2] ">
            Telecommunications Project Coordinator
          </h3>
          <time className="block mb-2 text-sm font-normal ">
            September 2019 - December 2021 (2 years 4 months)
          </time>
          <p className="mb-4 text-[#ababab] font-normal ">
            <div className="mb-3">
              As Facilities Coordinator at ELETCOL, I led the implementation of
              key telecommunications projects, overseeing the installation of
              more than 150 links, including the first 5G equipment pilot in
              Colombia. I actively participated in the modernization of Claro's
              network with 5GDSS and the installation of the LTE700 band under
              Nokia, improving coverage
            </div>
            My role included team coordination, project management and quality
            standards assurance, contributing to the success and technological
            evolution of Claro in Colombia.{" "}
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold mt-1 text-[#9783C2] ">
            Facilities Quality Auditor
          </h3>
          <time className="block mb-2 text-sm font-normal ">
            February 2019 - August 2019 (7 months)
          </time>
          <p className="mb-4 text-[#ababab] font-normal ">
            <div className="mb-3">
              As an Installation Quality Auditor, I solved technical problems
              and ensured compliance with standards in radio base installations.
              I collaborated with multidisciplinary teams to assess the quality
              of work and used data analysis skills to interpret technical
              results.
            </div>
            I sustained a proactive and customer-oriented attitude when
            interacting with Nokia representatives and other customers during
            audits, providing clarity on processes and results.
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold mt-1 text-[#9783C2] ">
            Telecommunications Installation Supervisor
          </h3>
          <time className="block mb-2 text-sm font-normal ">
            September 2018 - January 2019 (5 months)
          </time>
          <p className="mb-4 text-[#ababab] font-normal ">
            <div className="mb-3">
              As leader, I coordinated and managed the team of installers in the
              field, assigning responsibilities and supervising the assembly of
              telecommunications equipment in the radio bases. I ensured that
              installations met established standards, providing technical
              guidance to the team and monitoring progress to meet deadlines
            </div>
            I reported progress and challenges to management, prioritized work
            safety, solved technical problems and preserved fluid communication
            between teams.
          </p>
        </li>
      </ol>
      <Link to={"/"} onClick={() => scrollToSection("header")}>
        <button
          type="button"
          className="text-[#9783C2] hover:text-white border border-[9783C2] hover:bg-[#9783C2] focus:ring-4 focus:outline-none focus:ring-[#9783C2] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#9783C2] dark:text-[#9783C2] dark:hover:text-white dark:hover:bg-[#9783C2] dark:focus:ring-[#9783C2]"
        >
          Back
        </button>
      </Link>
    </div>
  );
}

import "./Experience.styles.css";

export default ExperienceTW;
