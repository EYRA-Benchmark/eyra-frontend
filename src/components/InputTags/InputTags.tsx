
import React, { Component } from 'react';
import styles from './styles.css';
import { FieldProps } from 'formik';
const ENTER_KEY = 13;
const COMMA_KEY = 188;
const BACKSPACE_KEY = 8;
type Keyboard_Event = React.KeyboardEvent<HTMLInputElement>;
type Change_Event = React.ChangeEvent<HTMLInputElement>;
interface IState {
    tags: string[];
    value: string;
}

export default class InputTags extends Component<FieldProps, IState> {
    state = {
        tags: ['tag1', 'tag2'],
        value: '',
    };
    // On input change set the value
    handleChange = (event: Change_Event) => {
        this.setState({
            value: event.target.value,
        });
    }
    // Handle Enter Key Event
    handleKeyUp = (event: Keyboard_Event) => {
        const key = event.keyCode;
        event.preventDefault();
        if (key === ENTER_KEY || key === COMMA_KEY) {
            this.addTag();
        }
    }
    // Add Tag on Enter
    addTag() {

        const { tags, value } = this.state;
        const tag = value.trim();
        if (tag === '') {
            return;
        }
        if (tags.indexOf(tag) === -1) {
            tags.push(tag);
        }
        this.setState({
            value: '',
            tags,
        });
        this.props.form.setFieldValue('keywords', tags);
    }

    handleKeyDown = (event: Keyboard_Event) => {
        const key = event.keyCode;
        if (key === BACKSPACE_KEY && !this.state.value) {
            this.deletePrevTag();
        }
    }
    deletePrevTag = () => {
        const { tags } = this.state;
        const tag = tags.pop();
        this.setState({
            tags,
            value: tag,
        });

    }

    render() {
        const { tags, value } = this.state;
        return (
            <div className={styles.tagsContainer}>
                <div className={styles.tags}>
                    <input
                        type="text"
                        placeholder="Add tag..."
                        value={value}
                        onChange={this.handleChange}
                        ref={() => 'tag'}
                        className={styles.tagInput}
                        onKeyUp={this.handleKeyUp}
                        onKeyDown={this.handleKeyDown}
                    />
                    <div>
                        {
                            tags.map((tag, i) => (
                                <span key={tag + i} className={styles.tag} >
                                    {tag}
                                    <span onClick={this.deletePrevTag} className={styles.delete} />
                                </span>
                            ))
                        }
                    </div>

                </div>

            </div>
        )
    }
}

