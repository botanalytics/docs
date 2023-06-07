import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
       <header className={clsx('hero hero--primary backgroundBlue', styles.heroBanner, styles.backgroundBlue)}>
      <div className={clsx(styles.container)} >
         <div style={{marginLeft: -30 + '%' }} className={clsx(styles.indexHead, styles.clear, styles.container)}>
            <div style={{marginTop: 7 + '%' }} className={clsx(styles.right)}>
            <div id={styles.headAction}>
               <div className={clsx(styles.pulseStyle, styles.pulseStatic)} id={styles.bubbleGeneral}>
                  <div className={clsx(styles.relative)}>
                     <div id={styles.rotater}>
                        <div className={clsx(styles.relative)}>
                           <span>
                              <img src={useBaseUrl('/img/bubblePulser/01.svg')} alt=""></img>
                           </span>
                           <span>
                              <img src={useBaseUrl('/img/bubblePulser/02.svg')} alt=""></img>
                           </span>
                           <span>
                              <img src={useBaseUrl('/img/bubblePulser/03.svg')}  alt=""></img>
                           </span>
                           <span>
                              <img src={useBaseUrl('/img/bubblePulser/04.svg')} alt=""></img>
                           </span>
                           <span className={clsx(styles.small)}>
                              <img src={useBaseUrl('/img/bubblePulser/05.svg')}  alt=""></img>
                           </span>
                           <span className={clsx(styles.small)}>
                              <img src={useBaseUrl('/img/bubblePulser/06.svg')} alt=""></img>
                           </span>
                           <span className={clsx(styles.small)}>
                              <img src={useBaseUrl('/img/bubblePulser/07.svg')} alt=""></img>
                           </span>
                           <span className={clsx(styles.small)}>
                              <img src={useBaseUrl('/img/bubblePulser/08.svg')} alt=""></img>
                           </span>
                        </div>
                     </div>
                     <div className={clsx(styles.bubbleLogo)}>
                        <img src={useBaseUrl('/img/bubblePulser/logoBig.svg')} alt="" title="B"></img>
                     </div>
                  </div>
               </div>
               <div className={clsx(styles.pulseStyle, styles.pulse01)}></div>
               <div className={clsx(styles.pulseStyle, styles.pulse02)}></div>
               <div className={clsx(styles.pulseStyle, styles.pulse03)}></div>
               <div className={clsx(styles.pulseStyle, styles.pulse04)}></div>
            </div>
         </div>
      </div>
      </div>
      </header>
  );  
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from Botanalytics `}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
