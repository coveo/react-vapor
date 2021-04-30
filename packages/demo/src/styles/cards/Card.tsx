import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

const Card = () => (
    <VaporComponent key="card" id="card" title="Card" withSource>
        <div className="card p2" style={{width: '100px', height: '100px'}}>
            Hi innovate
        </div>
    </VaporComponent>
);
export default Card;
