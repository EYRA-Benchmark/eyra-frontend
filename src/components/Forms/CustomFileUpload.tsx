import React from "react";
interface IProps {
  onChange: (content: any) => void;
}
class CustomFileUpload extends React.Component<IProps, {}> {
  setContent = (e: any) => {
    this.props.onChange(e.target.files[0]);
  }

  render() {
    return <input type="file" name="file" onChange={this.setContent} />;
  }
}

export default CustomFileUpload;
