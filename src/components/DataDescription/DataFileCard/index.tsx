import styles from './style.css';
import FileDetailsTable from './FileDetails/FileDetailsTable';
interface IProps {
    dataFiles: [string];
    type: string;
}

const DataFileCard = (props: IProps) => {
    const { dataFiles, type } = props;

    const content = dataFiles ? (
        <div className={styles.container}>
            <h5>{type}</h5>
            <FileDetailsTable dataFiles={dataFiles} />
        </div>
    ) : null;
    return content;
};

export default DataFileCard;
