import React, { useEffect } from "react";
import { Button } from "@chakra-ui/react";

import axios from "axios";
import { useLoading } from "@/backend/hooks/useLoading";
import { useHead } from "@/backend/hooks/useHead";
import { withProceed } from "../FirstPage/base";
import { useFetch } from "@/backend/hooks/useFetch";

import Minifigs from "@/frontend/components/Minifigs";

/**
 * This component represents second page of the application where you choose certain minifig
 *
 */
const ProceedButton = withProceed(Button);

export default function SecondPage(Props: SecondPageProps) {
  
  const { proceedButton, state, setState } = Props;
  const DISABLED = !state.selectedMinifig;
  useHead("Choose minifig");
  useLoading(state.loading)

  return (
    <div>
      <div className="flex justify-center font-bold p-10">
        <h2
          className="text-white text-4xl uppercase font-extrabold"
          style={{ fontSize: "3em" }}
        >
          Choose your minifigs
        </h2>
      </div>
      <Minifigs minifigs={state.randoms} state={state} setState={setState} />
      <div className="flex items-center justify-center content-center">
        <ProceedButton {...proceedButton} disabled={DISABLED}>
          Proceed to shipment
        </ProceedButton>
      </div>
    </div>
  );
}
