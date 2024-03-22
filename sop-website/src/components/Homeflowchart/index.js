import React, { useState } from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const EmbedGenialFlowChart = () => {
    const [isLoading, setLoading] = useState(true);

    return (
        <div style={{ position: "relative" }}>
            {isLoading && <div className='row'>
                <Spin 
                    indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                />
                <div>Loading</div>
                    
                </div>}

            <iframe title="Chorus-sop" width="100%" height="700"
                onLoad={() => setLoading(false)}
                style={{ display: isLoading ? 'none' : 'block' }}
                src="https://view.genial.ly/65f9c01d520aa00014781fae" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all">
            </iframe>
        </div>
    )
}

export default EmbedGenialFlowChart