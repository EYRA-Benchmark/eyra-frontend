import styles from './style.css';
import FileDetailsTable from './FileDetails/FileDetailsTable';
interface IProps {
    dataFiles: [string];
    type: string;
}

const DataFileCard = (props: IProps) => {
    const { dataFiles, type } = props;
    debugger;
    const content = dataFiles ? (
        <div className={styles.container}>
            <h5>{type}</h5>
            {/* {dataFiles.map((id) => <FileDetails dataFileId={id} key={id} />)} */}
            <FileDetailsTable dataFiles={dataFiles} />
        </div>
    ) : null;
    return content;
};

export default DataFileCard;
