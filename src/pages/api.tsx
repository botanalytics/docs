import React, { Suspense } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useBaseUrl from '@docusaurus/useBaseUrl';
//import RunInPostmanButton from '../components/RunInPostmanButton';
import Head from '@docusaurus/Head';


const Fallback = (
  <div style={{ minHeight: "calc(100vh - var(--ifm-navbar-height))" }} />
);

const LazyStoplight = React.lazy(() => import("../components/stoplight"));

export default function APIElement() {
  return (
    <Layout>
      <BrowserOnly>
        {() => (
          <Suspense fallback={Fallback}>
            <LazyStoplight apiDescriptionUrl={useBaseUrl('/api/v2.yaml')}/> 
          </Suspense>
        )}
      </BrowserOnly>
    </Layout>
  );
}