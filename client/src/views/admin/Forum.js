import React from "react";

import FooterAdmin from "components/Footers/FooterAdmin.js";

// components
import ForumTable from "components/Forum/ForumView.js";

export default function Forum() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <ForumTable />
        </div>
        
      </div>
    </>
  );
}
