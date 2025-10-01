import React from 'react';
import Layout from '@theme/Layout';
import InteractiveFlowchart from '../components/InteractiveFlowchart/InteractiveFlowchart';

export default function FlowchartPage() {
  return (
    <Layout
      title="Interactive CHoRUS Workflow"
      description="Interactive flowchart showing the complete CHoRUS data processing workflow with links to relevant SOPs"
    >
      <main>
        <InteractiveFlowchart />
      </main>
    </Layout>
  );
}