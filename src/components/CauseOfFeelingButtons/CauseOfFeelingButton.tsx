import * as React from 'react';
import CauseOfFeelingButtonProps from './CauseOfFeelingButtonProps';
import { CauseOfFeelingType } from 'src/models/states/CauseOfFeelingState';
import AmountOfWorkIcon from '../../assets/InputCauseOfFeeling/amountOfWorkIcon.svg';
import AmountOfWorkClickedIcon from '../../assets/InputCauseOfFeeling/amountOfWorkIconOrange.svg';
import JobDescriptionIcon from '../../assets/InputCauseOfFeeling/jobDescriptionIcon.svg';
import JobDescriptionClickedIcon from '../../assets/InputCauseOfFeeling/jobDescriptionIconOrange.svg';
import HumanRelationIcon from '../../assets/InputCauseOfFeeling/humanRelationIcon.svg';
import HumanRelationClickedIcon from '../../assets/InputCauseOfFeeling/humanRelationIconOrange.svg';
import EvaluationIcon from '@material-ui/icons/ThumbsUpDown';
import OvertimeWorkIcon from '../../assets/InputCauseOfFeeling/overtimeWorkIcon.svg';
import OvertimeWorkClickedIcon from '../../assets/InputCauseOfFeeling/overtimeWorkIconOrange.svg';
import HolidayWorkIcon from '../../assets/InputCauseOfFeeling/holidayWorkIcon.svg';
import HolidayWorkClickedIcon from '../../assets/InputCauseOfFeeling/holidayWorkIconOrange.svg';
import * as classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import styles from './CauseOfFeelingButtonStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CauseOfFeelingButton = (props: CauseOfFeelingButtonProps) => {
    const { classes, causeOfFeelingType, onClick } = props;

    const getCauseOfFeelingButtonProps = (
        causeOfFeeling: CauseOfFeelingType
    ) => {
        switch (causeOfFeeling) {
            case CauseOfFeelingType.AMOUNT_OF_WORK:
                return {
                    ariaLabel: 'amount-of-work-button',
                    IconComponent: (
                        <img src={AmountOfWorkIcon} className={classes.icon} />
                    ),
                    ClickedIconComponent: (
                        <img
                            src={AmountOfWorkClickedIcon}
                            className={classes.icon}
                        />
                    )
                };
            case CauseOfFeelingType.JOB_DESCRIPTION:
                return {
                    ariaLabel: 'job-description-button',
                    IconComponent: (
                        <img
                            src={JobDescriptionIcon}
                            className={classes.icon}
                        />
                    ),
                    ClickedIconComponent: (
                        <img
                            src={JobDescriptionClickedIcon}
                            className={classes.icon}
                        />
                    )
                };
            case CauseOfFeelingType.HUMAN_RELATION:
                return {
                    ariaLabel: 'human-relation-button',
                    IconComponent: (
                        <img src={HumanRelationIcon} className={classes.icon} />
                    ),
                    ClickedIconComponent: (
                        <img
                            src={HumanRelationClickedIcon}
                            className={classes.icon}
                        />
                    )
                };
            case CauseOfFeelingType.EVALUATION:
                return {
                    ariaLabel: 'evaluation-button',
                    IconComponent: (
                        <EvaluationIcon
                            className={classnames(
                                classes.icon,
                                classes.IconColor
                            )}
                        />
                    ),
                    ClickedIconComponent: (
                        <EvaluationIcon
                            className={classnames(
                                classes.icon,
                                classes.ClickedIconColor
                            )}
                        />
                    )
                };
            case CauseOfFeelingType.OVERTIME_WORK:
                return {
                    ariaLabel: 'overtime-work-button',
                    IconComponent: (
                        <img src={OvertimeWorkIcon} className={classes.icon} />
                    ),
                    ClickedIconComponent: (
                        <img
                            src={OvertimeWorkClickedIcon}
                            className={classes.icon}
                        />
                    )
                };
            case CauseOfFeelingType.HOLIDAY_WORK:
                return {
                    ariaLabel: 'holiday-work-button',
                    IconComponent: (
                        <img src={HolidayWorkIcon} className={classes.icon} />
                    ),
                    ClickedIconComponent: (
                        <img
                            src={HolidayWorkClickedIcon}
                            className={classes.icon}
                        />
                    )
                };
        }
    };

    const causeOfFeelingButtonProps = getCauseOfFeelingButtonProps(
        causeOfFeelingType
    );

    const getCauseOfFeelingTextProps = (causeOfFeeling: CauseOfFeelingType) => {
        switch (causeOfFeeling) {
            case CauseOfFeelingType.AMOUNT_OF_WORK:
                return {
                    ariaLabel: 'amount-of-work-text',
                    text: '仕事量'
                };
            case CauseOfFeelingType.JOB_DESCRIPTION:
                return {
                    ariaLabel: 'job-description-text',
                    text: '仕事内容'
                };
            case CauseOfFeelingType.HUMAN_RELATION:
                return {
                    ariaLabel: 'human-relation-text',
                    text: '人間関係'
                };
            case CauseOfFeelingType.EVALUATION:
                return {
                    ariaLabel: 'evaluation-text',
                    text: '評価'
                };
            case CauseOfFeelingType.OVERTIME_WORK:
                return {
                    ariaLabel: 'overtime-work-text',
                    text: '残業'
                };
            case CauseOfFeelingType.HOLIDAY_WORK:
                return {
                    ariaLabel: 'holiday-work-text',
                    text: '休日出勤'
                };
        }
    };

    const causeOfFeelingTextProps = getCauseOfFeelingTextProps(
        causeOfFeelingType
    );

    return (
        <div className={classes.buttonContainer}>
            <div aria-label={causeOfFeelingButtonProps.ariaLabel}>
                <IconButton onClick={onClick(causeOfFeelingType)}>
                    <FormControlLabel
                        className={classes.button}
                        control={
                            <Checkbox
                                icon={causeOfFeelingButtonProps.IconComponent}
                                checkedIcon={
                                    causeOfFeelingButtonProps.ClickedIconComponent
                                }
                            />
                        }
                        label=''
                    />
                </IconButton>
            </div>
            <Typography
                variant='h6'
                className={classes.detailText}
                aria-label={causeOfFeelingTextProps.ariaLabel}
            >
                {causeOfFeelingTextProps.text}
            </Typography>
        </div>
    );
};

export default withStyles(styles)(CauseOfFeelingButton);
