import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FeelingButtonProps from './FeelingButtonProps';
import Typography from '@material-ui/core/Typography';
import { FeelingType } from 'src/models/states/FeelingState';
import styles from './FeelingButtonStyles';
import * as classNames from 'classnames';
import VeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfiedRounded';
import DissatisfiedIcon from '@material-ui/icons/SentimentDissatisfiedRounded';
import SatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import VerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfiedRounded';
import FaceIcon from '@material-ui/icons/Face';

const FeelingButton = (props: FeelingButtonProps) => {
    const { classes, handleClick, feelingType } = props;
    const disabled = handleClick ? false : true;

    const getIconButtonProps = (feeling: FeelingType) => {
        switch (feeling) {
            case FeelingType.VERY_DISSATISFIED:
                return {
                    ariaLabel: 'very-dissatisfied-button',
                    IconComponent: (
                        <VeryDissatisfiedIcon
                            className={classNames(
                                classes.icon,
                                classes.veryDissatisfiedColor
                            )}
                        />
                    )
                };
            case FeelingType.DISSATISFIED:
                return {
                    ariaLabel: 'dissatisfied-button',
                    IconComponent: (
                        <DissatisfiedIcon
                            className={classNames(
                                classes.icon,
                                classes.dissatisfiedColor
                            )}
                        />
                    )
                };
            case FeelingType.NORMAL:
                return {
                    ariaLabel: 'normal-button',
                    IconComponent: (
                        <FaceIcon
                            className={classNames(
                                classes.icon,
                                classes.normalColor
                            )}
                        />
                    )
                };
            case FeelingType.SATISFIED:
                return {
                    ariaLabel: 'satisfied-button',
                    IconComponent: (
                        <SatisfiedIcon
                            className={classNames(
                                classes.icon,
                                classes.satisfiedColor
                            )}
                        />
                    )
                };
            case FeelingType.VERY_SATISFIED:
                return {
                    ariaLabel: 'very-satisfied-button',
                    IconComponent: (
                        <VerySatisfiedIcon
                            className={classNames(
                                classes.icon,
                                classes.verySatisfiedColor
                            )}
                        />
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
                    text: '最悪',
                    colorClassName: classes.veryDissatisfiedColor
                };
            case FeelingType.DISSATISFIED:
                return {
                    ariaLabel: 'dissatisfied-text',
                    text: '悪い',
                    colorClassName: classes.dissatisfiedColor
                };
            case FeelingType.NORMAL:
                return {
                    ariaLabel: 'normal-text',
                    text: '普通',
                    colorClassName: classes.normalColor
                };
            case FeelingType.SATISFIED:
                return {
                    ariaLabel: 'satisfied-text',
                    text: '良い',
                    colorClassName: classes.satisfiedColor
                };
            case FeelingType.VERY_SATISFIED:
                return {
                    ariaLabel: 'very-satisfied-text',
                    text: '最高',
                    colorClassName: classes.verySatisfiedColor
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
                variant='button'
                className={classNames(
                    classes.detailText,
                    typographyProps.colorClassName
                )}
                aria-label={typographyProps.ariaLabel}
            >
                {typographyProps.text}
            </Typography>
        </div>
    );
};

export default withStyles(styles)(FeelingButton);
