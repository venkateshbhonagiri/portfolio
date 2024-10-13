import { Component } from '@angular/core';
import { ISkills } from '../../models/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  // skills: ISkills[] = [
  //   {
  //     imagePath: '/assets/images/html-iconUrl.svg',
  //     name: 'HTML',
  //     alt: 'Html iconUrl',
  //   },
  //   {
  //     imagePath: '/assets/images/css-iconUrl.svg',
  //     name: 'CSS',
  //     alt: 'Css iconUrl',
  //   },
  //   {
  //     imagePath: '/assets/images/sass-iconUrl.svg',
  //     name: 'SASS',
  //     alt: 'Sass iconUrl',
  //   },
  //   {
  //     imagePath: '/assets/images/js-iconUrl.svg',
  //     name: 'Javascript',
  //     alt: 'Javascript iconUrl',
  //   },
  //   {
  //     imagePath: '/assets/images/ts-iconUrl.svg',
  //     name: 'Typescript',
  //     alt: 'Typescript iconUrl',
  //   },
  //   {
  //     imagePath: '/assets/images/angular-iconUrl.svg',
  //     name: 'Angular',
  //     alt: 'Angular iconUrl',
  //   },
  //   {
  //     imagePath: '/assets/images/react-iconUrl.svg',
  //     name: 'React',
  //     alt: 'React iconUrl',
  //   },
  // ];

   skillIcons = [
    { iconUrl: '/assets/skills/Java.svg', title: "Java" },
    { iconUrl: '/assets/skills/HTML.svg', title: "HTML5" },
    { iconUrl: '/assets/skills/CSS.svg', title: "CSS3" },
    { iconUrl: '/assets/skills/JavaScript.svg', title: "JavaScript" },
    { iconUrl: '/assets/skills/TypeScript.svg', title: "TypeScript" },
    { iconUrl: '/assets/skills/MySQL.svg', title: "MySQL" },
    { iconUrl: '/assets/skills/MongoDB.svg', title: "MongoDB" },
    { iconUrl: '/assets/skills/Express.svg', title: "Express.js" },
    { iconUrl: '/assets/skills/React.svg', title: "React" },
    { iconUrl: '/assets/skills/Node.svg', title: "Node.js" },
    { iconUrl: '/assets/skills/Nest.svg', title: "Nest.js" },
    { iconUrl: '/assets/skills/Next.svg', title: "Next.js" },
    { iconUrl: '/assets/skills/Three.svg', title: "Three.js" },
    { iconUrl: '/assets/skills/Redux.svg', title: "Redux" },
    { iconUrl: '/assets/skills/TailwindCSS.svg', title: "Tailwind CSS" },
    { iconUrl: '/assets/skills/NumPy.svg', title: "NumPy" },
    { iconUrl: '/assets/skills/Pandas.svg', title: "Pandas" },
    { iconUrl: '/assets/skills/OpenCV.svg', title: "OpenCV" },
    { iconUrl: '/assets/skills/Github.svg', title: "GitHub" },
];
  constructor() {}

  ngOnInit(): void {}
}
