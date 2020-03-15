
import React, { Component } from 'react';
import SuggestionList from './SuggestionList/';
import styles from './styles.css';
// import { FieldProps } from 'formik';
const ENTER_KEY = 13;
const COMMA_KEY = 188;
type Keyboard_Event = React.KeyboardEvent<HTMLInputElement>;
type Change_Event = React.ChangeEvent<HTMLInputElement>;
interface IProps {
    tags: string[];
    setField: any;
}
interface IState {
    tags: string[];
    value: string;
    filteredSuggestions: string[];
    showSuggestion: boolean;
}

export default class InputTags extends Component<IProps, IState> {

    state = {
        tags: this.props.tags,
        value: '',
        suggestions: ['Algorithms', 'data', 'scans', 'Iris', 'FRB'],
        filteredSuggestions: [],
        showSuggestion: false,
    };
    // On input change set the value
    handleChange = (event: Change_Event) => {
        const userInput = event.target.value;
        const filteredSuggestions = this.state.suggestions.filter((tag) =>
            tag.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
        );
        this.setState({
            value: userInput,
            filteredSuggestions,
            showSuggestion: true,
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
        this.props.setField('tags', tags);
    }
    deletePrevTag = (event: React.MouseEvent<HTMLElement>) => {
        const { tags } = this.state;
        if (event.currentTarget.parentElement !== null) {
            const tagToDelete = event.currentTarget.parentElement.innerText;
            const index = tags.indexOf(tagToDelete);
            tags.splice(index, 1);
        }

        this.setState({
            tags,
            value: '',
        });

    }

    render() {
        const { tags, value, filteredSuggestions, showSuggestion } = this.state;
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
                    />
                    <SuggestionList
                        filterSuggestions={filteredSuggestions}
                        userInput={value}
                        showSuggestions={showSuggestion}
                        selectTag={(event) => {
                            this.setState({
                                showSuggestion: false,
                                filteredSuggestions: [],
                                value: event.currentTarget.innerText,
                            }, () => {
                                this.addTag();
                            });
                        }}
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
        );
    }
}
