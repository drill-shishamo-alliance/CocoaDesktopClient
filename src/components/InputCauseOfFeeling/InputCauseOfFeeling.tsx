import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputCauseOfFeelingProps from './InputCauseOfFeelingProps';
import AmountOfWorkIcon from '../../assets/InputCauseOfFeeling/amountOfWorkIcon.svg';
import JobDescriptionIcon from '../../assets/InputCauseOfFeeling/jobDescriptionIcon.svg';
import HumanRelationIcon from '../../assets/InputCauseOfFeeling/humanRelationIcon.svg';
import EvaluationIcon from '@material-ui/icons/ThumbsUpDown';
import OvertimeWorkIcon from '../../assets/InputCauseOfFeeling/overtimeWorkIcon.svg';
import HolidayWorkIcon from '../../assets/InputCauseOfFeeling/holidayWorkIcon.svg';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import styles from './InputCauseOfFeelingStyles';
import * as classnames from 'classnames';

class InputCauseOfFeeling extends React.Component<InputCauseOfFeelingProps> {
    public render() {
        const { classes, selectedFeelingType } = this.props;
        return (
            <React.Fragment>
                <Typography variant='h4'>{`${selectedFeelingType}の原因は何ですか？`}</Typography>
                <div className={classes.root} aria-label='root'>
                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='amount-of-work-button'
                        >
                            <img
                                src={AmountOfWorkIcon}
                                className={classes.icon}
                            />
                        </IconButton>
                        <Typography
                            variant='h6'
                            className={classes.detailText}
                            aria-label='amount-of-work-text'
                        >
                            仕事量
                        </Typography>
                    </div>
                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='job-description-button'
                        >
                            <img
                                src={JobDescriptionIcon}
                                className={classes.icon}
                            />
                        </IconButton>
                        <Typography
                            variant='h6'
                            className={classes.detailText}
                            aria-label='job-description-text'
                        >
                            仕事内容
                        </Typography>
                    </div>
                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='human-relation-button'
                        >
                            <img
                                src={HumanRelationIcon}
                                className={classes.icon}
                            />
                        </IconButton>
                        <Typography
                            variant='h6'
                            className={classes.detailText}
                            aria-label='human-relation-text'
                        >
                            人間関係
                        </Typography>
                    </div>
                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='evaluation-button'
                        >
                            <EvaluationIcon
                                className={classnames(
                                    classes.icon,
                                    classes.evaluationIconColor
                                )}
                            />
                        </IconButton>
                        <Typography
                            variant='h6'
                            className={classes.detailText}
                            aria-label='evaluation-text'
                        >
                            評価
                        </Typography>
                    </div>
                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='overtime-work-button'
                        >
                            <img
                                src={OvertimeWorkIcon}
                                className={classes.icon}
                            />
                        </IconButton>
                        <Typography
                            variant='h6'
                            className={classes.detailText}
                            aria-label='overtime-work-text'
                        >
                            残業
                        </Typography>
                    </div>
                    <div className={classes.buttonContainer}>
                        <IconButton
                            className={classes.button}
                            aria-label='holiday-work-button'
                        >
                            <img
                                src={HolidayWorkIcon}
                                className={classes.icon}
                            />
                        </IconButton>
                        <Typography
                            variant='h6'
                            className={classes.detailText}
                            aria-label='holiday-work-text'
                        >
                            休日出勤
                        </Typography>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(InputCauseOfFeeling);
