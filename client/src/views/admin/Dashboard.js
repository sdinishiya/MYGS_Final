import React from "react";

// components

import FooterAdmin from "components/Footers/FooterAdmin.js";

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardPageVisits1 from "components/Cards/CardPageVisits1.js";
import CardPageVisits2 from "components/Cards/CardPageVisits2.js";


export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
        <CardSocialTraffic />
        </div>
        <div className="w-full xl:w-6/12 px-4">
        <CardPageVisits />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
        <CardPageVisits1 />
        </div>
        <div className="w-full xl:w-6/12 px-4">
        <CardPageVisits2 />
        </div>
      </div>
      <FooterAdmin />
    </>
  );
}
