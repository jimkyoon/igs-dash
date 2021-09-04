import * as React from 'react';

import Left from '../templates/left';
import Right from '../templates/right';

const MainSection = ({page, setPage}) => (
  <div style={{display: 'flex', width: '100%',}}>
    <Left setPage={setPage} />
    <Right page={page} />
  </div>
)

export default MainSection;
