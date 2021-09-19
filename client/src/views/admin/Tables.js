import React from "react";

import FooterAdmin from "components/Footers/FooterAdmin.js";

// components
import BookTable from "components/Appointment/view.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <BookTable />
        </div>
        
      </div>
    </>
  );
}
