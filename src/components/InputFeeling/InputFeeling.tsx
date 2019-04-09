import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputFeelingProps from './InputFeelingProps';
import styles from './InputFeelingStyles';
import { FeelingType } from '../../models/states/FeelingState';
import FeelingButton from '../FeelingButtons/FeelingButton';
import * as classNames from 'classnames';
import 'src/utils/webkit_properties/webkit_properties.css';

class InputFeeling extends React.Component<InputFeelingProps> {
    public handleClick = (feelingType: FeelingType) => (
        e: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
        const { switchInputCauseOfFeeling, feelingStates } = this.props;
        const index = feelingStates.findIndex(
            state => state.feelingType === feelingType
        );

        switchInputCauseOfFeeling(feelingStates[index]);
    };

    public render() {
        const { classes } = this.props;
        return (
            <div className={classNames(classes.root, 'WebkitAppRegionDrag')}>
                <Typography variant='h4' aria-label='question'>
                    今日の気分はどうですか？
                </Typography>
                <div
                    className={classNames(
                        classes.buttons,
                        'WebkitAppRegionDrag'
                    )}
                    aria-label='buttons'
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
