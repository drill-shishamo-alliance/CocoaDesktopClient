import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputFeelingProps from './InputFeelingProps';
import styles from './InputFeelingStyles';
import { FeelingType } from '../../models/states/FeelingState';
import FeelingButton from '../FeelingButtons/FeelingButton';
import * as classNames from 'classnames';
import 'src/App.css';
class InputFeeling extends React.Component<InputFeelingProps> {
    public handleClick = (feelingType: FeelingType) => (
        e: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
        const { switchInputCauseOfFeeling } = this.props;
        switchInputCauseOfFeeling(feelingType);
    };

    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography variant='h4' className={''}>
                    今日の気分はどうですか？
                </Typography>
                <div
                    className={classNames(classes.butttons, 'App')}
                    aria-label='root'
                >
                    <FeelingButton
                        feelingType={FeelingType.VERY_DISSATISFIED}
                        handleClick={this.handleClick}
                    />
                    <FeelingButton
                        feelingType={FeelingType.DISSATISFIED}
                        handleClick={this.handleClick}
                    />
                    <FeelingButton
                        feelingType={FeelingType.NORMAL}
                        handleClick={this.handleClick}
                    />
                    <FeelingButton
                        feelingType={FeelingType.SATISFIED}
                        handleClick={this.handleClick}
                    />
                    <FeelingButton
                        feelingType={FeelingType.VERY_SATISFIED}
                        handleClick={this.handleClick}
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(InputFeeling);
