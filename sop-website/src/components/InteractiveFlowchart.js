import React from 'react';
import styles from './InteractiveFlowchart.module.css';

const InteractiveFlowchart = () => {
  const dataSourceSOPs = [
    { id: 'D1', title: 'Get Data', description: 'Data request and collection procedures', link: '/CHoRUS_SOP/docs/category/data-requests' },
    { id: 'D2', title: 'Standardize Data', description: 'Converting to OMOP CDM format', link: '/CHoRUS_SOP/docs/category/structured-ehr-data' },
    { id: 'D3', title: 'Link Data', description: 'Multimodal data linkage procedures', link: '/CHoRUS_SOP/docs/category/multimodal-linkage' },
    { id: 'D4', title: 'De-identify & QC Data', description: 'Privacy protection and quality control', link: '/CHoRUS_SOP/docs/category/privacy' },
    { id: 'D5', title: 'Create Extract', description: 'Data extraction and preparation', link: '/CHoRUS_SOP/docs/category/data-uploading' },
    { id: 'D6', title: 'Improve Data', description: 'Iterative quality improvements', link: '/CHoRUS_SOP/docs/category/data-quality' }
  ];

  const centralCloudSOPs = [
    { id: 'C1', title: 'Ingest Data', description: 'Central data ingestion procedures', link: '/CHoRUS_SOP/docs/category/central-processing' },
    { id: 'C2', title: 'Assess Data', description: 'Central quality assessment', link: '/CHoRUS_SOP/docs/category/data-quality' },
    { id: 'C3', title: 'Approve & Merge', description: 'Data approval and merging processes', link: '/CHoRUS_SOP/docs/category/central-processing' }
  ];

  const dataTypeSOPs = [
    { title: 'Structured EHR', link: '/CHoRUS_SOP/docs/category/structured-ehr-data', category: 'structured' },
    { title: 'Flowsheet Data', link: '/CHoRUS_SOP/docs/category/flowsheet-data', category: 'structured' },
    { title: 'Microbiology Data', link: '/CHoRUS_SOP/docs/category/structured-ehr-data', category: 'structured' },
    { title: 'Freetext Data', link: '/CHoRUS_SOP/docs/category/freetext-data', category: 'freetext' },
    { title: 'Imaging Data', link: '/CHoRUS_SOP/docs/category/imaging-data', category: 'imaging' },
    { title: 'Header De-ID', link: '/CHoRUS_SOP/docs/category/imaging-data', category: 'imaging' },
    { title: 'Waveform Data', link: '/CHoRUS_SOP/docs/category/waveform-data', category: 'waveform' },
    { title: 'Waveform Extension', link: '/CHoRUS_SOP/docs/category/waveform-datae', category: 'waveform' },
    { title: 'File Format', link: '/CHoRUS_SOP/docs/category/waveform-data', category: 'waveform' }
  ];

  const supportingSOPs = [
    { title: 'OMOP Mapping', link: '/CHoRUS_SOP/docs/category/omop-mapping' },
    { title: 'Unmapped Terms', link: '/CHoRUS_SOP/docs/category/unmapped-terms' },
    { title: 'Common Data Elements', link: '/CHoRUS_SOP/docs/category/common-data-elements' },
    { title: 'Safe Harbor Approach', link: '/CHoRUS_SOP/docs/category/safe-harboring-approach' }
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