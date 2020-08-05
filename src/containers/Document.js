import React, { PureComponent } from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';

export default class Document extends PureComponent {
  state = {
    markdown: '# Hi there'
  };

  updateMarkdown = ({ target }) => {
    this.setState({ markdown: target.value });
  };

  render() {
    const { markdown } = this.state;
    return (
      <>
        <div className={styles.Document}>
          <Editor markdown={markdown} updateMarkdown={this.updateMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </>
    );
  }
}
