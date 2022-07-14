import * as React from "react";
import {useEffect} from 'react'
import { Spinner } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useProduce } from "@/backend/hooks/useProduce";
const Pages = {
  1: React.lazy(() => import("../../../frontend/pages/FirstPage")),
  2: React.lazy(() => import("../../../frontend/pages/SecondPage")),
  3: React.lazy(() => import("../../../frontend/pages/ThirdPage")),
};

/**
 * This component take's care of switching between pages
 *
 * Core concept for this module is Fetching data for all pages
 *
 * Core concept for this module is Middleware functionality
 * which enables to split logic *
 * It is designed to implement a set of interfaces
 * Those interfaces are based on fixed position
 * and employ rather global functionalities
 * like for example:
 * - chat
 * - faq
 * - a message to the admin
 * - step back
 *
 *  @type {React.FC<PaginatorInterface>}
 *  @returns {React.ReactElement}
 */

export default function Paginator(Props: PaginatorInterface) {
  

  const { pageProps, ...props } = Props;
  const {setState, state} = Props
  const Component = Pages[props.state.selectedPage];
  
  useEffect(()=>{
    pageProps?.fetcher?.({setState , state })
  },[props.state.selectedPage])
  return (
    <React.Suspense
      fallback={
        <div className="text-xl flex justify-center items-center h-screen  flex-1 text-white">
          <Spinner />
        </div>
      }
    >
      <AnimatePresence>
        <motion.div
          
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Component {...pageProps} {...props} />
        </motion.div>
      </AnimatePresence>
    </React.Suspense>
  );
}
