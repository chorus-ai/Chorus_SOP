import React from 'react';
import styles from './InteractiveFlowchart.module.css';

const InteractiveFlowchart = () => {
  const dataSourceSOPs = [
    { id: 'D1', title: 'Get Data', description: 'Data request and collection procedures', link: '/docs/Data-Requests/Data-Requests' },
    { id: 'D2', title: 'Standardize Data', description: 'Converting to OMOP CDM format', link: '/docs/Structured-EHR-Data/Structured-EHR-Data' },
    { id: 'D3', title: 'Link Data', description: 'Multimodal data linkage procedures', link: '/docs/Multimodal-Linkage/Multimodal-Linkage' },
    { id: 'D4', title: 'De-identify & QC Data', description: 'Privacy protection and quality control', link: '/docs/Privacy/Privacy' },
    { id: 'D5', title: 'Create Extract', description: 'Data extraction and preparation', link: '/docs/Data-Upload-Update/Data-Uploads' },
    { id: 'D6', title: 'Improve Data', description: 'Iterative quality improvements', link: '/docs/Data-Quality/Evaluating-Quality-At-Sites' }
  ];

  const centralCloudSOPs = [
    { id: 'C1', title: 'Ingest Data', description: 'Central data ingestion procedures', link: '/docs/Central-Processing/Central-Processing' },
    { id: 'C2', title: 'Assess Data', description: 'Central quality assessment', link: '/docs/Data-Quality/Evaluating-Quality-Centrally' },
    { id: 'C3', title: 'Approve & Merge', description: 'Data approval and merging processes', link: '/docs/Central-Processing/Central-Processing' }
  ];

  const dataTypeSOPs = [
    { title: 'Structured EHR', link: '/docs/Structured-EHR-Data/Structured-EHR-Data', category: 'structured' },
    { title: 'Flowsheet Data', link: '/docs/Flowsheet-Data/Flowsheet-Data', category: 'structured' },
    { title: 'Microbiology Data', link: '/docs/Structured-EHR-Data/Microbiology-Data', category: 'structured' },
    { title: 'Freetext Data', link: '/docs/Freetext-Data/Freetext-Data', category: 'freetext' },
    { title: 'Imaging Data', link: '/docs/Imaging-Data/Imaging-Data', category: 'imaging' },
    { title: 'Header De-ID', link: '/docs/Imaging-Data/Header De-Identification', category: 'imaging' },
    { title: 'Waveform Data', link: '/docs/Waveform-Data/Waveform-Data', category: 'waveform' },
    { title: 'Waveform Extension', link: '/docs/Multimodal-Linkage/Waveform-Extension', category: 'waveform' },
    { title: 'File Format', link: '/docs/Waveform-Data/waveform-file-format', category: 'waveform' }
  ];

  const supportingSOPs = [
    { title: 'OMOP Mapping', link: '/docs/OMOP-Mapping/Mappings-Clinical-Validation' },
    { title: 'Unmapped Terms', link: '/docs/Unmapped-Terms/SOP-for-Cataloging-Unmapped-Terms' },
    { title: 'Common Data Elements', link: '/docs/Common-Data-Elements/Common-Data-Elements' },
    { title: 'Safe Harbor Approach', link: '/docs/Safe-Harboring-Approach/Safe-Harboring-Approach' }
  ];

  return (
    <div className={styles.flowchartContainer}>
      <div className={styles.flowchartHeader}>
        <h2>CHoRUS Data Processing Workflow</h2>
        <p>Interactive flowchart showing the complete data processing pipeline with links to relevant SOPs</p>
      </div>

      <div className={styles.flowchartMain}>
        {/* Data Generating Sites Section */}
        <div className={styles.dataSourcesSection}>
          <h3 className={styles.sectionTitle}>Data Generating Sites</h3>
          <div className={styles.dataSourceIcons}>
            <div className={styles.dataTypeIcon}>📊 Structured EHR</div>
            <div className={styles.dataTypeIcon}>📋 Flowsheet</div>
            <div className={styles.dataTypeIcon}>📝 Freetext</div>
            <div className={styles.dataTypeIcon}>🖼️ Imaging</div>
            <div className={styles.dataTypeIcon}>〰️ Waveform</div>
          </div>

          <div className={styles.dataSourceSteps}>
            {dataSourceSOPs.map((sop, index) => (
              <div key={sop.id} className={styles.stepCard}>
                <div className={styles.stepNumber}>{sop.id}</div>
                <div className={styles.stepContent}>
                  <a href={sop.link} className={styles.stepLink}>
                    <h4>{sop.title}</h4>
                    <p>{sop.description}</p>
                  </a>
                </div>
                {index < dataSourceSOPs.length - 1 && <div className={styles.arrow}>↓</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Central Cloud Section */}
        <div className={styles.centralCloudSection}>
          <h3 className={styles.sectionTitle}>Central Cloud</h3>

          <div className={styles.centralSteps}>
            {centralCloudSOPs.map((sop, index) => (
              <div key={sop.id} className={styles.stepCard}>
                <div className={styles.stepNumber}>{sop.id}</div>
                <div className={styles.stepContent}>
                  <a href={sop.link} className={styles.stepLink}>
                    <h4>{sop.title}</h4>
                    <p>{sop.description}</p>
                  </a>
                </div>
                {index < centralCloudSOPs.length - 1 && <div className={styles.arrow}>↓</div>}
              </div>
            ))}
          </div>

          <div className={styles.finalDestination}>
            <div className={styles.enclaveBox}>
              <h4>To Analytic Enclave</h4>
              <p>Final processed data ready for research</p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Type Specific SOPs */}
      <div className={styles.dataTypeSOPs}>
        <h3>Data Type Specific SOPs</h3>
        <div className={styles.dataTypeGrid}>
          <div className={styles.dataTypeCategory}>
            <h4>Structured Data</h4>
            {dataTypeSOPs.filter(sop => sop.category === 'structured').map(sop => (
              <a key={sop.title} href={sop.link} className={styles.dataTypeLink}>
                {sop.title}
              </a>
            ))}
          </div>

          <div className={styles.dataTypeCategory}>
            <h4>Freetext Data</h4>
            {dataTypeSOPs.filter(sop => sop.category === 'freetext').map(sop => (
              <a key={sop.title} href={sop.link} className={styles.dataTypeLink}>
                {sop.title}
              </a>
            ))}
          </div>

          <div className={styles.dataTypeCategory}>
            <h4>Imaging Data</h4>
            {dataTypeSOPs.filter(sop => sop.category === 'imaging').map(sop => (
              <a key={sop.title} href={sop.link} className={styles.dataTypeLink}>
                {sop.title}
              </a>
            ))}
          </div>

          <div className={styles.dataTypeCategory}>
            <h4>Waveform Data</h4>
            {dataTypeSOPs.filter(sop => sop.category === 'waveform').map(sop => (
              <a key={sop.title} href={sop.link} className={styles.dataTypeLink}>
                {sop.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Supporting SOPs */}
      <div className={styles.supportingSOPs}>
        <h3>Supporting SOPs</h3>
        <div className={styles.supportingGrid}>
          {supportingSOPs.map(sop => (
            <a key={sop.title} href={sop.link} className={styles.supportingLink}>
              {sop.title}
            </a>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <h4>Process Flow</h4>
        <div className={styles.legendItems}>
          <div className={styles.legendItem}>
            <span className={styles.discussionsIcon}>💬</span> Discussions - Standards team meetings
          </div>
          <div className={styles.legendItem}>
            <span className={styles.officeHoursIcon}>🏢</span> Office Hours - Regular support sessions
          </div>
          <div className={styles.legendItem}>
            <span className={styles.progressIcon}>📈</span> Progress - Ongoing implementation updates
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFlowchart;