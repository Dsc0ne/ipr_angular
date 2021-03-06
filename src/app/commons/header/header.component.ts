import {Component} from '@angular/core';
import {Input} from '@angular/core';

const notificationsIcon = `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'> <g fill='none' fill-rule='evenodd'> <path fill='#8DA1B4' d='M17.12 6.246c2.009 1.908 1.886 5.14.026 7.167l-.164.171c-.619.618-1.102 1.397-1.435 2.27l-.82 2.249a.738.738 0 0 1-.52.46.697.697 0 0 1-.657-.177l-8.36-8.348a.655.655 0 0 1-.165-.642.733.733 0 0 1 .48-.497l2.238-.728c.864-.331 1.637-.81 2.253-1.425l.163-.163c.943-1.034 2.27-1.556 3.564-1.582 1.12-.023 2.24.305 3.183 1.063l.213.182zm-.84.597c-.72-.578-1.596-.861-2.537-.842a3.991 3.991 0 0 0-2.878 1.29l-.163.163c-.708.707-1.595 1.265-2.65 1.668l-1.782.58 7.665 7.655.678-1.86a7.555 7.555 0 0 1 1.42-2.366l.376-.394c1.494-1.628 1.571-4.1.187-5.598l-.148-.151-.169-.145zm-6.658 9.804c-.543.542-1.52.378-2.281-.382-.76-.76-.925-1.737-.382-2.278l.361-.361 2.663 2.66-.361.361z'/> <rect width='6' height='6' x='.5' y='.5' fill='#F55B79' fill-rule='nonzero' stroke='#FFF' rx='3' transform='translate(14 6)'/> </g> </svg>`;

const exitIcon = `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'> <path fill='#8DA1B4' fill-rule='evenodd' d='M10.499 5v1H7v11h3.499v1H6V5h4.499zm4.36 3.067l3.338 3.433-3.339 3.433-.716-.697L16.315 12H8.5v-1h7.817l-2.175-2.236.716-.697z'/> </svg>`;

const HeaderTheme = () => ({
  props: {
    mainHeader: 'mainHeader',
    headerButtons: 'headerButtons'
  },
  icons: {
    notificationsIcon,
    exitIcon
  },
  styleUrls: ['./header.component.scss'],
});

const props = {
  userInfoData: {
    firstName: 'Агеев',
    lastName: 'В.',
    showAvatar: false,
    userDescription: 'Сотрудник МИРС',
  },
};

@Component({
  selector: 'app-main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Input() title: string;

  headerThemes = HeaderTheme();
  infoData = props;
}
