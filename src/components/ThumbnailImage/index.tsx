import React from 'react';
import { Paper } from '@material-ui/core';
import styles from './styles.css';
import PlaceholderImage from '@material-ui/icons/AddPhotoAlternate';

// interface IProps {
//     file: any;
// }
// class Thumbnail extends React.Component<IProps> {
//     state = {
//         thumb: undefined,
//     };

//     componentWillReceiveProps(nextProps: IProps) {
//         if (nextProps.file !== null && typeof (nextProps.file) === "object") {
//             const reader = new FileReader();

//             reader.onloadend = () => {
//                 this.setState({ thumb: reader.result });
//             };

//             reader.readAsDataURL(nextProps.file);
//         } else {
//             this.setState({ thumb: nextProps.file })
//         }
//     }
//     render() {

//         const { thumb } = this.state;
//         const content = thumb !== null ?
//             (
//                 <img
//                     src={thumb}
//                     alt={'image'}
//                     className={styles.image}
//                 />
//             ) : <PlaceholderImage classes={{ root: styles.placeholderContainer }} color='action' />

//         return <Paper classes={{ root: styles.container }}> {content} </Paper>;
//     }
// }
// export default Thumbnail;

interface IProps {
    file: File;
}
class Thumbnail extends React.Component<IProps> {
    state = {
        loading: false,
        thumb: undefined,
    };

    componentWillReceiveProps(nextProps: IProps) {
        if (!nextProps.file) { return; }

        this.setState({ loading: true }, () => {
            const reader = new FileReader();

            reader.onloadend = () => {
                this.setState({ loading: false, thumb: reader.result });
            };

            reader.readAsDataURL(nextProps.file);
        });
    }

    render() {
        // const { file } = this.props;
        const { loading, thumb } = this.state;

        // if (!file) { return null; }
        debugger;
        if (loading) { return <p>loading...</p>; }
        const content = thumb !== undefined ?
            (
                <img
                    src={thumb}
                    alt={'image'}
                    className={styles.image}
                />
            ) : <PlaceholderImage classes={{ root: styles.placeholderContainer }} color="action" />;

        return <Paper classes={{ root: styles.container }}> {content} </Paper>;
    }
}
export default Thumbnail;
