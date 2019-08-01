import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import styles from './styles.css';
import PlaceholderImage from '@material-ui/icons/AddPhotoAlternate';
import Spinner from '../Spinner/';
interface IProps {
    file: File | Blob;
    isBanner: boolean;
}
class Thumbnail extends React.Component<IProps> {
    state = {
        loading: true,
        thumb: undefined,
    };

    componentWillReceiveProps(nextProps: IProps) {

        if (nextProps.file !== null && typeof (nextProps.file) === 'object') {
            this.setState({ loading: true }, () => {
                const reader = new FileReader();

                reader.onloadend = () => {
                    this.setState({ loading: false, thumb: reader.result });
                };

                reader.readAsDataURL(nextProps.file);
            });
        } else {
            this.setState({ thumb: nextProps.file, loading: false });
        }
    }

    render() {
        const { loading, thumb } = this.state;
        const { isBanner } = this.props;
        if (loading) { return <Spinner />; }
        const content = thumb !== undefined ?
            (
                isBanner ?
                    (
                        <Paper classes={{ root: styles.container }}>
                            <div className={styles.bannerContainer}>
                                <img src={thumb} className={styles.bannerImage} />
                            </div>
                        </Paper>
                    ) :
                    (

                        <Grid item={true} xs={12} sm={4} md={4}>
                            <Paper classes={{ root: styles.cardImage }}>
                                <img
                                    src={thumb}
                                    alt={'image'}
                                    className={styles.image}
                                />
                            </Paper>
                        </Grid>
                    )
            ) : <PlaceholderImage classes={{ root: styles.placeholderContainer }} color="action" />;

        return content;
    }
}
export default Thumbnail;
