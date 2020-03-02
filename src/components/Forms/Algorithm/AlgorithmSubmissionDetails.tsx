import React from 'react';
import { IAlgorithm } from '../../../types';
import styles from '../styles.css';

interface IProps {
  algorithm: IAlgorithm;
}
class AlgorithmSubmissionDetails extends React.Component<IProps> {
  state = {
    isEdit: false,
    // desc: this.props.algorithm.description,
  };

  render() {
    const { algorithm } = this.props;
    return (
      <div>
        <div className={styles.algorithmContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Name</label>
            <label>{algorithm.name}</label>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="description">Description</label>
            <label>
              {algorithm.description ? algorithm.description : 'not available'}
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="source_code_link">Link To Source Code</label>
            <label>
              {algorithm.source_code_link
                ? algorithm.source_code_link
                : 'not available'}
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="paper_link">Link To Paper/Blog</label>
            <label>
              {algorithm.paper_link ? algorithm.paper_link : 'not available'}
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default AlgorithmSubmissionDetails;
