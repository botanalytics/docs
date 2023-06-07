import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Basics',
    Svg: require('@site/static/img/basics.svg').default,
    description: (
      <>
        Learn about the concepts, features and others to get the most out of the Botanalytics platform.
      </>
    ),
  },
  {
    title: 'Integration',
    Svg: require('@site/static/img/integration.svg').default,
    description: (
      <>
        No matter which messaging or voice channels you use, we provide an integration path for you.
      </>
    ),
  },
  {
    title: 'Community',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        Join and be a part of Botanalytics community by sharing your feedback, suggestions or your favorite pet photos.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
