import React from "react";
import RichTextEditor from "react-rte";
import styles from "./CustomTextEditor.module.css";
interface IProps {
  onChange: (value: string) => void;
}
class CustomTextEditor extends React.Component<IProps, {}> {
  state = {
    value: RichTextEditor.createValueFromString(
      "<b>Add Description Here..</b><br/><p>Here You can add description or paste HTML/ Markdown code for description in left Container</p>",
      "html"
    ),
    format: "html"
  };
  setDesc = (value: any) => {
    this.setState({ value });
    this.props.onChange(
      value.toString("markdown")
    ); /** Description will be submitted as markdown only */
  };
  onChangeSource = (event: any) => {
    const source = event.target.value;
    const oldValue = this.state.value;
    this.setState({
      value: oldValue.setContentFromString(source, this.state.format)
    });
  };

  onChangeFormat = (event: any) => {
    this.setState({ format: event.target.value });
  };

  render() {
    const { value, format } = this.state;
    return (
      <React.Fragment>
        <div className={styles.descContainer}>
          <div style={{ display: "flex" }}>
            <div className={styles.col1}>
              <textarea
                placeholder="Here You can see HTML or Markdown code for Description."
                value={value.toString(format)}
                onChange={this.onChangeSource}
                className={styles.sourceContainer}
              />
            </div>
            <div className={styles.col1}>
              <RichTextEditor
                value={value}
                placeholder="Here You can add description or copy HTML/ Markdown code for description in left Container"
                onChange={this.setDesc}
                rootStyle={{
                  minHeight: 400,
                  maxHeight: 400,
                  overflowY: "scroll"
                }}
              />
            </div>
          </div>
          <div>
            <label className="radio-item">
              <input
                type="radio"
                name="format"
                value="html"
                checked={format === "html"}
                onChange={this.onChangeFormat}
              />
              <span>HTML</span>
            </label>
            <label className="radio-item">
              <input
                type="radio"
                name="format"
                value="markdown"
                checked={format === "markdown"}
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
