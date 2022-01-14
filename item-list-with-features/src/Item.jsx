export const Item = ({ onMouseEnter, onMouseLeave, text, isHovering }) => {
  return (
    <div
      className='mb-3 is-flex'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p>{text}</p>
      {isHovering && (
        <div>
          <span className='icon mx-5' onClick={() => alert('edit')}>
            <i className='fas fa-edit'></i>
          </span>
          <span
            className='icon has-text-danger'
            onClick={() => alert('delete')}
          >
            <i className='fas fa-trash'></i>
          </span>
        </div>
      )}
    </div>
  );
};
