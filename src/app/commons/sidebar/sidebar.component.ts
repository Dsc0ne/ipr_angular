import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

const addressIcon = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">  <image id="image0" width="24" height="24" x="0" y="0"
    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAACzxNOzw9OzxNOy
w9P////r4YJjAAAABHRSTlMAtYC0h4m1vwAAAAFiS0dEBfhv6ccAAAAHdElNRQfkChYSLhx+Z8Gr
AAAAM0lEQVQY02NgIBaIuLi4ODBBOS4gDosCMscJmeOigMxxQnAYkA1A5oDAwHFEIGxnokMDAElD
IY4nIXcPAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTEwLTIyVDE4OjQ2OjI3KzAwOjAwxy7gPQAA
ACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMC0yMlQxODo0NjoyNyswMDowMLZzWIEAAAAASUVORK5C
YII=" />
</svg>`;

const emergencyIcon = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">  <image id="image0" width="24" height="24" x="0" y="0"
    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAC229uzxtWzw9Sz
xNOyw9Syw9Ozw9S1x9W2yNuyxNT///+0xNSyw9S5ydi0w9ezw9O/1dWzxdWzxtazw9OzxNSyw9S1
xtSyxNOzw9TExNizxNS1xNa/39+zxNSzw9Szxde///+zxNSyxNSzxNS0w9SzxNOzxNW0xtOzxNOz
xNSzw9O2ztuzw9OzxNOyw9P////WRKIyAAAAL3RSTlMABzbWtYj8iTccsANw8yEzzAyQUOPh1VnL
xQ2/RQiy2jkEsfmCd/U8OtOh9BXdtOxkwDUAAAABYktHRAsf18TAAAAAB3RJTUUH5AoWEi8dEHvA
fAAAALFJREFUKM+lkkcWgzAMRCUExvSaRirpXfe/XWJD8mhZZXaePyNpYYB/hDjsG0QGgGl245Zg
FjYyt31Jb9cWTG2g4iQ1ZsbmdDXEcV0HVcloxT0/YA58T820dCnU8ShmrTjSpVAViGSSCq4l0kQS
VRXMcm4ozzCst1TGaPxB36vq92T6A8yK+TDgxXI1CNYbKLd9sNsjlIdjH5wAzpehHRbAtXuVqV63
OxQP7T//+gd9vQBuqyIoMTnARQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMC0yMlQxODo0Nzoy
OSswMDowMHjT8F4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTAtMjJUMTg6NDc6MjkrMDA6MDAJ
jkjiAAAAAElFTkSuQmCC" />
</svg>`;

const contractsIcon = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">  <image id="image0" width="24" height="24" x="0" y="0"
    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEUAAADV1dWyw9Szw9Sz
w9Szw9Szw9O4xtWyxNOzxNSyw9P///+pgUabAAAACnRSTlMABojm54n7JOi5HZqYLwAAAAFiS0dE
Cx/XxMAAAAAHdElNRQfkChYSLx0Qe8B8AAAAQklEQVQY02NgwAsYlV0F4BymZVkBcA5zelkDlDlr
1ar0slWrVoI5q1atWpYFJGAcMKCAgyDROdTVg8SZBWGvxBcwAOGlUg8cE/msAAAAJXRFWHRkYXRl
OmNyZWF0ZQAyMDIwLTEwLTIyVDE4OjQ3OjI5KzAwOjAweNPwXgAAACV0RVh0ZGF0ZTptb2RpZnkA
MjAyMC0xMC0yMlQxODo0NzoyOSswMDowMAmOSOIAAAAASUVORK5CYII=" />
</svg>
`;

const logo= `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="44px" height="44px" viewBox="0 0 44 44" enable-background="new 0 0 44 44" xml:space="preserve">  <image id="image0" width="44" height="44" x="0" y="0"
    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAI
IElEQVRYw+1YW2wU1xn+/tmbvRfbFBLbgAO2MQa5KXICBJoUQfNQqogKE2iNncatEkToQ/IEcZqn
SLn0JURtEqWiVdq0CQq52CREiSJVQS0I4SSgpOQCxhRscLC9+ILtvXnnnL8PO7NzZnZ2vSGkykOP
NJqzM3P+8/3f+f7//GeB/7dvt9E3NcDMEQDtACIA3iaiM99ZwMy8EsAvAYSUx70G8NPfGcDMXAbg
HgCrCnx2BsDB6w38awNm5tUAOpCRABs2uID90wC6iejL/ylgg9VfAVh9jXOdBtBFRF9864CZeQ2A
XwMog8UqkMswFfH+CwBvXivwgoANVu8DcJsbII5GfWO7d9+q9/eXB9atuxjcvPmSv7l5spBJ0wYR
tV5XwMy8FsD9Bqs5LXbo0I0Tjz++SkxMlIItCXsqK6eCGzYMhFpaLvmbm6fyTky07boAZuZyADsA
/NDVkXhci3Z2fj/+7rt17BhPRGBmEGUee6qrJ0Pr1w+GWloGAxnwKsN3f2PAzHw7gJ35WE0cPVox
8vDDt+hDQ5FijKsCXnLu3FsO5zZfC2Cvwuoug9XcINJ1LfrYY0sm9u9vYCk1N0OnhoZwQziMecEg
vJpmogKYM3dAQ25Qfn3AzPwjAL/JwyonT52KfPXQQytS585VOADYZo/NzCA2NoaBsTGUl5ZiXjCI
imAQsCTiuVaQToZ/m+/lyN69N40+/3yjTKc9xkpkQHLuPmFSJpkxkUhgPB6HV9MwNxTC94JBk+Hr
AthcqmxLX7gQ6H/wwab4yZNzbXQjf9I1nVADz1NWNhO6667Li3buHIRDEsz8DIDXABwnIkaRzYvM
UmUT/ehLL1UOPvlko5ie9rkJTrUsjXdStahpsuqOO0brOzou17W3j5LPZ37mdfh8s3ENMPPrAP5B
ROnZABMzH1YffFxdvT7fNpUzWPnmYiQyvbi1dajxgQeGSufP16/BxCiANwAcIqJYIcD/VB98WFm5
zgyqbICZmnUEnfp+9fDwv4pd1llaHMBbAN4goivOl6YksrKUzJYeYQUaALCUGY1KaTkgpZq2cgiZ
TOr0x+P9N/7txKWqZbev4S0LPJe3zPdGSzyurBOAMDKlayszvw9gPxH1q4BtEwlpKdI1yBQHsixn
mi1tHfnPWOiFY+cq3/5saF4iLT0AQ7uaxlNX05Fnz1LtT6u8I+2L/MP1IUrlYdoPYBOATcx8FMDL
RPRvJ2DSDRaLaia7GSdtjq//w+EfOD/XRcb2ZIp9r15ILXhtID3/1jna1dabfMMbq31XKb/m1xnX
GldJkMHabBFTiGEI3eobOheSQcp6SSmoJyoreqJ6xe9Kk6mWGv/IPYv9V+b5SeSbzpmHWUppmXQU
M2bfLefCufUKAYYSCwCE5LwB/FUMgedOJ2r29SYX3FnlG7+31h9dNdcbdwLWDGY0sy+YIY1LFyJ7
V/vmeyElIitWxFYcONCn2PEA0FjoIClAUoBF5i6EhGRAMrJ9ISSEkNAFQwiJRFpq71xMzf3Fkall
hi31Khx0jiW3BV2kqSm+5NFHhys3bZpWnLe+lSI7lhRJ2AXm1rcJMCfz5GzNQgk6pwQAILJ8ebKh
s3Nk/rZtUy5Gra1XtzatstKA2LC8eto3z6sdG0mHmZmKO03ZZJYFbAsWyWxj1eyH6utTjY88cmVh
e7sJtGD1VTs3NLPx5pqpn91SG7uzaWHcq2WAnZ+W3hd743PeHEiVjyWl146XFWjSdQ5i5jOqm92B
wFL1g1Bt7UxjZ+fooo6OKcye7oqhjQFQmoHXzyfDfz8bL//4SjroZinaVnlWtUdES51pTTMlEayp
STfu2TNWt2PHNDSN4VKASwYfODEQfuaDvooP9/z4kgvgvM1HQFtdSaytriT++YTw7vsyVt7Vn4zE
0tJj+Zpfw9kWqKrSl+3ePbFk164p8vmcgwgAx2eE9qejfeHnDp8tGxiP+RSJzMawa2uq8Mjfry0b
f2p12dVXzsaCf+mNl30+ng7kk8QFlRGZSkELBFwND08m6dkPTpf9+UhfeDye8qj4Ui+09auAE4OD
2ujx4/7Rjz7yj5086Z/45BN/y9o1EndvncKWLXGEwwWd6InO+G+7wZ9SHSaixcTMF2dbvjPDk569
738WebXnQiiZTpPpH4NBIDAYM/s6LqljXiZa6LTTtrQhc2QqLZXYuDFBrdun0dw8aw2cZZeoJqeW
UJf0WN+w9+n3ToXf+XSgJJOKHAYMsITcak1kZjCEkdnR2Kg9OJHQ0NUVQnd3iBoa0rR1W5y2bk0g
EpHIE6SqJIacQA6eOO9/+r1PQz19w/5ivZ/5685h9feLRJUKNQAz7q2vy89eSQnTTzYmte3bE1i5
0pV1IqrKCbqm3a/M6R2a8LpadRT0LrWEjWFWx8Elx6tgEgni7q5SOthdSksadO3n25LaffcnHIxb
NYR59Q5GvRA6IHSQciehA1Jk75ACLNLW3bHv6wAkESQRhNFntdY2K0LjwCClzN5F7xmv/sQTYdjr
k2wtoaYOYl3PSk8ahEp147MvUUGG4Ti5sHKaUUG7L2b+PGyrhyF0K1hmSaNsvDbmteVMt4JWKgwX
U7rCJQ/n1MOQuiUzskDlM1qQYQsdYLCrUgFme72mMC5dTjEqw8pMCmCXUoDVLGNPOh51gK6yoPxj
5AxEcMH9w7Vas3nBehpFFDkWIxbjOQznCMs6YRdj3CQhh2FbPcxCz68rOLO47YENsERu9mcTNIrQ
8CwMW24LXTnT5f3fxG3SHEk4m8yT1pzPlJYD+L88Wm5L0sMsvgAAACV0RVh0ZGF0ZTpjcmVhdGUA
MjAyMC0xMC0yMlQxOTo1MDoyNCswMDowMOfAjKIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTAt
MjJUMTk6NTA6MjQrMDA6MDCWnTQeAAAAAElFTkSuQmCC" />
</svg>`;
const uiToggleSidebarProps = () => ({
  isExpanded:  false,
  inputControl1: '',
  inputControl2: 'somethink',
  icons: {
    addressIcon,
    emergencyIcon,
    contractsIcon,
    logo
  },
  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  },

});

const SidebarThemesByDirective = () => ({
  props: {
    themeSidebar: 'sidebarCustom',
    themeButtons: 'sidebarButtons'
  },
  styleUrls: ['./sidebar.component.scss'],
});

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = false;
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;

  uiToggleSidebarProps = uiToggleSidebarProps();
  SidebarThemesByDirective = SidebarThemesByDirective();
}
