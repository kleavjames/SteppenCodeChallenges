import { Component } from 'react';
import { Item } from './Item';

export default class ItemList extends Component {
  state = {
    contents: [],
    content: '',
    isHovered: {},
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      contents: [...prevState.contents, { text: prevState.content }],
      content: '',
    }));
  };

  handleMouseEnter = index => {
    this.setState(prevState => ({
      isHovered: { ...prevState.isHovered, [index]: true },
    }));
  };

  handleMouseLeave = index => {
    this.setState(prevState => ({
      isHovered: { ...prevState.isHovered, [index]: false },
    }));
  };

  render() {
    const { contents, isHovered, content } = this.state;

    return (
      <div>
        <div class='modal'>
          <div class='modal-background'></div>
          <div class='modal-content'>sada</div>
          <button class='modal-close is-large' aria-label='close'></button>
        </div>

        <div className='mb-6  is-flex'>
          {contents.map((el, index) => (
            <Item
              onMouseEnter={() => this.handleMouseEnter(index)}
              onMouseLeave={() => this.handleMouseLeave(index)}
              text={el.text}
              isHovering={isHovered[index]}
              key={index}
            />
          ))}
        </div>
        <form className='field' onSubmit={this.onSubmit}>
          <label className='label'>Add content</label>
          <div className='control'>
            <input
              value={content}
              name='content'
              className='input'
              type='text'
              placeholder='content'
              onChange={e => this.setState({ content: e.target.value })}
            />
          </div>
          <button type='submit' className='button mt-3 is-primary'>
            Add
          </button>
        </form>
      </div>
    );
  }
}
