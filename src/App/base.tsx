import React, { useState } from "react";
import "../frontend/styles/App.css";

import Paginator from "@/frontend/components/Paginator";
import { defaultState } from "@/backend/store/defaultState";
import { useProduce } from "@/backend/hooks/useProduce";
import routes from "@/backend/routes";
/**
 *  App represents a small part of some Lego application
 *  First and second page are basically part of the same form
 *  The application it self is a presentation so
 *  there was no need for a router to be implemented
 *  @type {React.FC}
 *  @returns {React.ReactElement}
 */

function App() {
  const [state, setState , , resetState] = useProduce<typeof defaultState>(defaultState);

  const pagesProps = routes({ setState });

  return (
    <div
      style={{
        fontFamily: "LemonDays",
      }}
      className="
   bg-main    
   h-screen flex w-screen "
    >
      <Paginator
        state={state}
        setState={setState}
        resetState={resetState}
        pageProps={pagesProps[state.selectedPage]}
      />
    </div>
  );
}

export default App;
