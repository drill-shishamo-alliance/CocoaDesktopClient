import AmountOfWorkIcon from '../../assets/default/amountOfWorkIcon.svg';
import AmountOfWorkClickedIcon from '../../assets/clicked/amountOfWorkIcon.svg';
import HumanRelationshipIcon from '../../assets/default/humanRelationshipIcon.svg';
import HumanRelationshipClickedIcon from '../../assets/clicked/humanRelationshipIcon.svg';
import JobDescriptionIcon from '../../assets/default/jobDescriptionIcon.svg';
import JobDescriptionClickedIcon from '../../assets/clicked/jobDescriptionIcon.svg';

type IconMap = {
  [key: string]: {
    icon_path: string;
    default: string;
    clicked: string;
  };
};
export const iconMap: IconMap = {
  仕事量: {
    icon_path: '',
    default: AmountOfWorkIcon,
    clicked: AmountOfWorkClickedIcon,
  },
  仕事内容: {
    icon_path: '',
    default: JobDescriptionIcon,
    clicked: JobDescriptionClickedIcon,
  },
  人間関係: {
    icon_path: '',
    default: HumanRelationshipIcon,
    clicked: HumanRelationshipClickedIcon,
  },
  評価: {
    icon_path: 'thumbs_up_down',
    default: '',
    clicked: '',
  },
} as const;
