import React from 'react';
import { connect } from 'react-redux';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import { updateMarkdown } from '../actions/editorActions';


// eslint-disable-next-line react/prop-types
const Document = ({ markdown, active, handleMarkdownChange }) => {
  return (
    <>
      <div className={styles.Document}>
        <Editor
          active={active}
          markdown={markdown}
          handleMarkdownChange={handleMarkdownChange}
        />
        <Preview 
          active={active}
          markdown={markdown} 
        />
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  handleMarkdownChange({ target }) {
    dispatch(updateMarkdown(target.value));
  }
});

const mapStateToProps = state => ({
  active: state.editor.active,
  markdown: state.editor.list
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);

// export default class Document extends PureComponent {
//   state = {
//     markdown: '# Hi there'
//   };

//   updateMarkdown = ({ target }) => {
//     this.setState({ markdown: target.value });
//   };

//   render() {
//     const { markdown } = this.state;
//     return (
//       <>
//         <div className={styles.Document}>
//           <Editor markdown={markdown} updateMarkdown={this.updateMarkdown} />
//           <Preview markdown={markdown} />
//         </div>
//       </>
//     );
//   }
// }
