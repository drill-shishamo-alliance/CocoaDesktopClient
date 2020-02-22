import AmountOfWorkIcon from 'src/assets/default/amountOfWorkIcon.svg';
import AmountOfWorkClickedIcon from 'src/assets/clicked/amountOfWorkIcon.svg';
import HumanRelationshipIcon from 'src/assets/default/humanRelationshipIcon.svg';
import HumanRelationshipClickedIcon from 'src/assets/clicked/humanRelationshipIcon.svg';
import JobDescriptionIcon from 'src/assets/default/jobDescriptionIcon.svg';
import JobDescriptionClickedIcon from 'src/assets/clicked/jobDescriptionIcon.svg';

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
