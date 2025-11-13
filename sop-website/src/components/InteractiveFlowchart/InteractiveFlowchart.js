import React from 'react';
import styles from './InteractiveFlowchart.module.css';

const InteractiveFlowchart = () => {
  const dataSourceSOPs = [
    { id: 'D1', title: 'Get Data', description: 'Data request and collection procedures', link: '/Chorus_SOP/docs/category/data-requests' },
    { id: 'D2', title: 'Standardize Data', description: 'Converting to OMOP CDM format', link: '/Chorus_SOP/docs/category/structured-ehr-data' },
    { id: 'D3', title: 'Link Data', description: 'Multimodal data linkage procedures', link: '/Chorus_SOP/docs/category/multimodal-linkage' },
    { id: 'D4', title: 'De-identify & QC Data', description: 'Privacy protection and quality control', link: '/Chorus_SOP/docs/category/privacy' },
    { id: 'D5', title: 'Create Extract', description: 'Data extraction and preparation', link: '/Chorus_SOP/docs/category/data-uploading' },
    { id: 'D6', title: 'Improve Data', description: 'Iterative quality improvements', link: '/Chorus_SOP/docs/category/data-quality' }
  ];

  const centralCloudSOPs = [
    { id: 'C1', title: 'Ingest Data', description: 'Central data ingestion procedures', link: '/Chorus_SOP/docs/category/central-processing' },
    { id: 'C2', title: 'Assess Data', description: 'Central quality assessment', link: '/Chorus_SOP/docs/category/data-quality' },
    { id: 'C3', title: 'Approve & Merge', description: 'Data approval and merging processes', link: '/Chorus_SOP/docs/category/central-processing' }
  ];

  const dataTypeSOPs = [
    { title: 'Structured EHR Data', link: '/Chorus_SOP/docs/Structured-EHR-Data', category: 'structured' },
    { title: 'Flowsheet Data', link: '/Chorus_SOP/docs/Flowsheet-Data', category: 'structured' },
    { title: 'Microbiology Data', link: '/Chorus_SOP/docs/Structured-EHR-Data/Microbiology%20Data', category: 'structured' },
    { title: 'Freetext Data', link: '/Chorus_SOP/docs/Freetext-Data', category: 'freetext' },
    { title: 'Imaging Data', link: '/Chorus_SOP/docs/Imaging-Data', category: 'imaging' },
    { title: 'Header De-ID', link: '/Chorus_SOP/docs/Imaging-Data/Header%20De-Identification', category: 'imaging' },
    { title: 'Waveform Data', link: '/Chorus_SOP/docs/Waveform-Data', category: 'waveform' },
    { title: 'Waveform Extension', link: '/Chorus_SOP/docs/Waveform-Data/Waveform-Extension', category: 'waveform' },
    { title: 'Waveform File Format', link: '/Chorus_SOP/docs/Waveform-Data/Waveform-File-Format', category: 'waveform' },
    { title: 'GIS Exposure Data', link: '/Chorus_SOP/docs/GIS-Exposure-Data', category: 'structured' }
  ];

  const supportingSOPs = [
    { title: 'Clinical Validation of Mappings', link: '/Chorus_SOP/docs/OMOP-Mapping/SOP-CVoM', category: 'mapping' },
    { title: 'Cataloging Unmapped Terms', link: '/Chorus_SOP/docs/OMOP-Mapping/SOP-CUT', category: 'mapping' },
    { title: 'Concept Set Creation', link: '/Chorus_SOP/docs/OMOP-Mapping/SOP-CSC', category: 'mapping' },
    { title: 'OMOP Domain Definition', link: '/Chorus_SOP/docs/OMOP-Mapping/OMOP-Domain-Definition', category: 'mapping' },
    { title: 'Chart Review', link: '/Chorus_SOP/docs/Chart-Review', category: 'mapping' },
    { title: 'Common Data Elements', link: '/Chorus_SOP/docs/Common-Data-Elements', category: 'elements' },
    { title: 'Tier 1 Elements', link: '/Chorus_SOP/docs/Common-Data-Elements/Tier%201%20Elements', category: 'elements' },
    { title: 'Safe Harbor Approach', link: '/Chorus_SOP/docs/Privacy/Safe%20Harboring', category: 'privacy' },
    { title: 'Privacy Guidelines', link: '/Chorus_SOP/docs/Privacy', category: 'privacy' },
    { title: 'Date Shifting', link: '/Chorus_SOP/docs/Privacy/Date%20Shifting', category: 'privacy' },
    { title: 'Multimodal Data Linkage', link: '/Chorus_SOP/docs/Multimodal-Linkage', category: 'linkage' },
    { title: 'Data Request 2', link: '/Chorus_SOP/docs/Data-Requests/Data%20Request%202', category: 'upload' },
    { title: 'Data Uploads', link: '/Chorus_SOP/docs/Data-Upload-Update/Uploading%20to%20Central%20Staging%20Data%20Warehouse', category: 'upload' },
    { title: 'Quality at Sites', link: '/Chorus_SOP/docs/Data-Quality/Local%20Data%20Quality', category: 'quality' },
    { title: 'Quality Centrally', link: '/Chorus_SOP/docs/Data-Quality/Central%20Data%20Quality%20Reports', category: 'quality' }
  ];

  return (
    <div className={styles.flowchartContainer}>
      <div className={styles.flowchartHeader}>
        <h2>CHoRUS Data Processing Workflow</h2>
        <p>Interactive flowchart showing the complete data processing pipeline with links to relevant SOPs</p>
      </div>

      <div className={styles.flowchartMain}>
        {/* Data Generating Sites Section - Two Columns */}
        <div className={styles.dataSourcesSection}>
          <h3 className={styles.sectionTitle}>Data Generating Sites</h3>
          <div className={styles.dataSourceIcons}>
            <div className={styles.dataTypeIcon}>📊 Structured EHR</div>
            <div className={styles.dataTypeIcon}>📋 Flowsheet</div>
            <div className={styles.dataTypeIcon}>📝 Freetext</div>
            <div className={styles.dataTypeIcon}>🖼️ Imaging</div>
            <div className={styles.dataTypeIcon}>〰️ Waveform</div>
          </div>

          <div className={styles.dataSourceColumns}>
            <div className={styles.dataSourceColumn}>
              {dataSourceSOPs.slice(0, 3).map((sop, index) => (
                <div key={sop.id} className={styles.stepCard}>
                  <div className={styles.stepNumber}>{sop.id}</div>
                  <div className={styles.stepContent}>
                    <a href={sop.link} className={styles.stepLink}>
                      <h4>{sop.title}</h4>
                      <p>{sop.description}</p>
                    </a>
                  </div>
                  {index < 2 && <div className={styles.arrow}>↓</div>}
                </div>
              ))}
            </div>
            <div className={styles.dataSourceColumn}>
              {dataSourceSOPs.slice(3).map((sop, index) => (
                <div key={sop.id} className={styles.stepCard}>
                  <div className={styles.stepNumber}>{sop.id}</div>
                  <div className={styles.stepContent}>
                    <a href={sop.link} className={styles.stepLink}>
                      <h4>{sop.title}</h4>
                      <p>{sop.description}</p>
                    </a>
                  </div>
                  {index < dataSourceSOPs.slice(3).length - 1 && <div className={styles.arrow}>↓</div>}
                </div>
              ))}
            </div>
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
        <div className={styles.supportingCategories}>
          <div className={styles.supportingCategory}>
            <h4>OMOP Mapping & Concepts</h4>
            {supportingSOPs.filter(sop => sop.category === 'mapping').map(sop => (
              <a key={sop.title} href={sop.link} className={styles.supportingLink}>
                {sop.title}
              </a>
            ))}
          </div>

          <div className={styles.supportingCategory}>
            <h4>Data Elements</h4>
            {supportingSOPs.filter(sop => sop.category === 'elements').map(sop => (
              <a key={sop.title} href={sop.link} className={styles.supportingLink}>
                {sop.title}
              </a>
            ))}
          </div>

          <div className={styles.supportingCategory}>
            <h4>Privacy & Security</h4>
            {supportingSOPs.filter(sop => sop.category === 'privacy').map(sop => (
              <a key={sop.title} href={sop.link} className={styles.supportingLink}>
                {sop.title}
              </a>
            ))}
          </div>

          <div className={styles.supportingCategory}>
            <h4>Data Management</h4>
            {supportingSOPs.filter(sop => sop.category === 'linkage' || sop.category === 'upload' || sop.category === 'quality').map(sop => (
              <a key={sop.title} href={sop.link} className={styles.supportingLink}>
                {sop.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <h4>Process Flow</h4>
        <div className={styles.legendItems}>
          <div className={styles.legendItem}>
            <span className={styles.discussionsIcon}>💬</span> <a href="https://github.com/chorus-ai/StandardsModule/discussions"> Discussions - Standards team meetings </a>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.officeHoursIcon}>🏢</span> <a href="https://drive.google.com/drive/folders/1ZIeB4blopefJEKp5_m1Y0hHIl4NrEr8g?usp=share_link"> Office Hours - Regular support sessions </a>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.progressIcon}>📈</span> <a href="https://github.com/orgs/chorus-ai/projects/11"> Progress - Ongoing implementation updates </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFlowchart;
