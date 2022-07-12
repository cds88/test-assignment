import * as React from "react"; 
import { Spinner } from '@chakra-ui/react'
const Pages = {
  1: React.lazy(() => import("../../../frontend/pages/FirstPage")),
  2: React.lazy(() => import("../../../frontend/pages/SecondPage")),
  3: React.lazy(() => import("../../../frontend/pages/ThirdPage")),
};

  /**
   * This component take's care of switching between pages
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

  
  const { pageProps, ...props} = Props

  const Component = Pages[props.state.selectedPage];
  
 

  return (
    <React.Suspense fallback={<Spinner> Loading</Spinner>}>
      <Component {...pageProps} {...props} />
 
    </React.Suspense>
  );
}


