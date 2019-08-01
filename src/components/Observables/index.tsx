interface IProps {
    url: string;
    onClose: () => void;
}
const Observable = (props: IProps) => {
    return (
        <div>
            {/* <PopoutWindow
                containerId='popup'
                url={props.url}
                title='Observable'
                onClosing={props.onClose}
            /> */}

            {/* <iframe src={props.url}>
            </iframe> */}
            {/* <div><p>{props.url}</p></div> */}
        </div>

    );
};

export default Observable;
