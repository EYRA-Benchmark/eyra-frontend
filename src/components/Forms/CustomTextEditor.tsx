import React from 'react';
import styles from './CustomTextEditor.css';
import RichTextEditor from 'react-rte';
// const RichTextEditor = (typeof window !== 'undefined') ? require('react-rte') : null;

interface IProps {
  onChange: (value: string) => void;
  showEditor: boolean;
  defaultValue: string;
  defaultFormat: string;
}
class CustomTextEditor extends React.Component<IProps, {}> {
  state = {
    value: RichTextEditor.createValueFromString(
      '<b>Add Description Here..</b><br/>' +
      '<p>Here You can add description or paste HTML/ Markdown code for description in left Container</p>',
      'html',
    ),
    // value: RichTextEditor.createEmptyValue(),
    // value: RichTextEditor.createValueFromString(
    //   this.props.defaultValue,
    //   this.props.defaultFormat,
    // ),
    format: this.props.defaultFormat,
  };
  // setDesc = (value: any) => {
  //   this.setState({ value });
  //   this.props.onChange(
  //     value.toString('markdown'),
  //   ); /** Description will be submitted as markdown only */
  // }
  onChangeSource = (event: any) => {
    const source = event.target.value;
    const oldValue = this.state.value;
    this.setState({
      value: oldValue.setContentFromString(source, this.state.format),
    });
  }

  onChangeFormat = (event: any) => {
    this.setState({ format: event.target.value });
  }

  render() {
    const { value, format } = this.state;
    const { showEditor } = this.props;
    const textArea = (
      <div className={styles.col1}>
        <textarea
          placeholder="Here You can see HTML or Markdown code for Description."
          value={value.toString(format)}
          onChange={this.onChangeSource}
          className={styles.sourceContainer}
        />
      </div>
    );
    return (
      <React.Fragment>
        <div className={styles.descContainer}>
          <div style={{ display: 'flex' }}>
            {showEditor ? textArea : null}

            <div className={styles.col1}>
              {/* <RichTextEditor
              // value={value}
              // onChange={this.setDesc}
              // rootStyle={{
              //   minHeight: 400,
              //   maxHeight: 400,
              //   overflowY: 'scroll',
              // }}
             />*/}
            </div>
          </div>
          <div>
            <label className="radio-item">
              <input
                type="radio"
                name="format"
                value="html"
                checked={format === 'html'}
                onChange={this.onChangeFormat}
              />
              <span>HTML</span>
            </label>
            <label className="radio-item">
              <input
                type="radio"
                name="format"
                value="markdown"
                checked={format === 'markdown'}
                onChange={this.onChangeFormat}
              />
              <span>Markdown</span>
            </label>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CustomTextEditor;
