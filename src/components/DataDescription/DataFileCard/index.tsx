import styles from './style.css';
//import FileDetailsTable from './FileDetails/FileDetailsTable';
interface IProps {
    dataFiles: string[];
    type: string;
    desc: string;
    sampling: string;
}

const DataFileCard = (props: IProps) => {
    const { dataFiles, type, desc, sampling } = props;

    const content = dataFiles ? (
        <div className={styles.container}>
            <h5>{type}</h5>
            {desc ? <p><span>Description:  </span>{desc}</p> : null}
            {sampling ? <p><span>Sampling Method:  </span>{sampling}</p> : null}
            {/* <FileDetailsTable dataFiles={dataFiles} /> */}
        </div>
    ) : null;
    return content;
};

export default DataFileCard;
