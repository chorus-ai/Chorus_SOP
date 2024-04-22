import React from 'react';
import styles from './styles.module.css';
import Feature from './feature';

const FeatureList = [
  {
    title: '<DEPRECATED>',
    url: 'img/projects.png',
    link:'/Chorus_SOP/docs/category/data-cohort-definition',
    description: (
      <>
        Facilitate data interoperability by mapping data to the Observational Medical Outcomes Partnership (OMOP) Common Data Model.
      </>
    ),
  },

];

export default function HomepageIcons() {
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
