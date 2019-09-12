import styles from './styles.css';
interface IProps {
    showSuggestions: boolean;
    filterSuggestions: string[];
    userInput: string;
    selectTag: (event: React.MouseEvent<HTMLElement>) => void;
}
const SuggestionList = (props: IProps) => {
    const { showSuggestions, filterSuggestions, userInput, selectTag } = props;
    let content = null;
    if (showSuggestions && userInput) {
        if (filterSuggestions.length) {
            content = (
                <ul id={styles.suggestions}>
                    {filterSuggestions.map((suggestion, index) => {
                        return (
                            <li key={suggestion} onClick={selectTag}>
                                {suggestion}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            content = (
                <div className={styles.noSuggestion}>
                    <em>No suggestion</em>
                </div>
            );
        }
    }
    return content;
}
export default SuggestionList;
