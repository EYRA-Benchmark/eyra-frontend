import PopoutWindow from 'react-popout';
import react from 'react';
import styles from './Observables.css'
interface IProps {
    url: string;
    onClose: () => void;
}
const Observable = (props: IProps) => {
    return (
        <>
            <PopoutWindow
                containerId='popup'
                url={props.url}
                title='Observable'
                onClosing={props.onClose}
            />

            {/* <iframe src={props.url}>
            </iframe> */}
            {/* <div><p>{props.url}</p></div> */}
        </>

    )
}

export default Observable;
