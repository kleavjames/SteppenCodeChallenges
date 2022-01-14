import React from 'react';

export default function Content({ contents }) {
  const displayContent = contents.map(content => (
    <p key={content}>{content}</p>
  ));

  return <div>{displayContent}</div>;
}
