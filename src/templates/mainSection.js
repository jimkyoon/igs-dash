import * as React from 'react';

import TopBar from './topBar';
import LeftSide from './leftSide';
import RightSide from './rightSide';

const testList = [
  {key: 'hi123', message: 'hello'},
  {key: 'bye123', message: 'hello'},
];

const MainSection = ({setAlert}) => {
  const [page, setPage] = React.useState('');
  const [list, setList] = React.useState(testList);
  // determine which form to show on RightSide
  const [postId, setPostId] = React.useState('');

  const pages = ['articles', 'greetings', 'sounds', 'stories',];

  const mainSectionStyling = {
    display: 'flex',
    width: '100%',
  };

  return (
    <div>
      <TopBar
        page={page}
        pages={pages}
        setPage={setPage}
      />
      <div style={mainSectionStyling}>
        <LeftSide
          list={list}
          postId={postId}
          setPostId={setPostId}
        />
        {/* <RightSide
          page={page}
          postId={postId}
        /> */}
      </div>
    </div>
  );
}

export default MainSection;
