import { useState } from 'react';
import Content from './Content';
import Title from './Title';

export const TwoPaneList = ({ data }) => {
  const [content, setContent] = useState(null);

  const titles = data.map(d => (
    <div className='mb-5' key={d.title} onClick={() => setContent(d.content)}>
      <Title title={d.title} />
    </div>
  ));

  return (
    <div className='columns'>
      <div className='column'>
        <h1 className='title'>List of Titles</h1>
        <div className='card'>
          <div className='card-content'>
            <div className='content'>{titles}</div>
          </div>
        </div>
      </div>
      {content && (
        <div className='column'>
          <div className='card has-background-link'>
            <div className='card-content'>
              <div className='content has-text-white'>
                <Content contents={content} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
