import React from 'react';
// import { IAlgorithm } from '../../../types';
import styles from '../styles.css';

// interface IProps {
//     algorithm: IAlgorithm;
// }
class AlgorithmSubmissionDetails extends React.Component {
    state = {
        isEdit: false,
        // desc: this.props.algorithm.description,
    };

    render() {

        return (
            <div>
                <div className={styles.container} style={{ width: '70%' }}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="name">Name</label>
                        <label>Name</label>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="description">Description</label>
                        <label>Description</label>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="source_code_link">Link To Source Code</label>
                        <label>Link To Source Code</label>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="paper_link">Link To Paper/Blog</label>
                        <label>Link To Paper/Blog</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlgorithmSubmissionDetails;
