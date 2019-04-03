import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FeelingButtonProps from './FeelingButtonProps';
import Typography from '@material-ui/core/Typography';
import { FeelingType } from 'src/models/states/FeelingState';
import styles from './FeelingButtonStyles';
import VeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfiedRounded';
import DissatisfiedIcon from '@material-ui/icons/SentimentDissatisfiedRounded';
import SatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import VerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfiedRounded';
import FaceIcon from '@material-ui/icons/Face';

const DissatisfiedButton = (props: FeelingButtonProps) => {
    const { classes, handleClick, feelingType } = props;
    const disabled = handleClick ? false : true;

    const getIconButtonProps = (feeling: FeelingType) => {
        switch (feeling) {
            case FeelingType.VERY_DISSATISFIED:
                return {
                    ariaLabel: 'very-dissatisfied-button',
                    IconComponent: (
                        <VeryDissatisfiedIcon className={classes.icon} />
                    )
                };
            case FeelingType.DISSATISFIED:
                return {
                    ariaLabel: 'dissatisfied-button',
                    IconComponent: <DissatisfiedIcon className={classes.icon} />
                };
            case FeelingType.NORMAL:
                return {
                    ariaLabel: 'normal-button',
                    IconComponent: <FaceIcon className={classes.icon} />
                };
            case FeelingType.SATISFIED:
                return {
                    ariaLabel: 'satisfied-button',
                    IconComponent: <SatisfiedIcon className={classes.icon} />
                };
            case FeelingType.VERY_SATISFIED:
                return {
                    ariaLabel: 'very-satisfied-button',
                    IconComponent: (
                        <VerySatisfiedIcon className={classes.icon} />
                    )
                };
        }
    };

    const iconButtonProps = getIconButtonProps(feelingType);

    const getTypographyProps = (feeling: FeelingType) => {
        switch (feeling) {
            case FeelingType.VERY_DISSATISFIED:
                return {
                    ariaLabel: 'very-dissatisfied-text',
                    text: '最悪'
                };
            case FeelingType.DISSATISFIED:
                return {
                    ariaLabel: 'dissatisfied-text',
                    text: '悪い'
                };
            case FeelingType.NORMAL:
                return {
                    ariaLabel: 'normal-text',
                    text: '普通'
                };
            case FeelingType.SATISFIED:
                return {
                    ariaLabel: 'satisfied-text',
                    text: '良い'
                };
            case FeelingType.VERY_SATISFIED:
                return {
                    ariaLabel: 'very-satisfied-text',
                    text: '最高'
                };
        }
    };

    const typographyProps = getTypographyProps(feelingType);

    return (
        <div className={classes.buttonContainer}>
            <IconButton
                className={classes.button}
                aria-label={iconButtonProps.ariaLabel}
                onClick={handleClick && handleClick(feelingType)}
                disabled={disabled}
            >
                {iconButtonProps.IconComponent}
            </IconButton>
            <Typography
                variant='h6'
                className={classes.detailText}
                aria-label={typographyProps.ariaLabel}
            >
                {typographyProps.text}
            </Typography>
        </div>
    );
};

export default withStyles(styles)(DissatisfiedButton);
