import { Injectable } from '@angular/core';
import { ProjectInterface } from '../interface/project.interface';
import { SkillIcon } from '../interface/icons.interface';
import { OpinionInterface } from '../interface/opinion.interface';
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  projects: ProjectInterface[] = [
    {
      name: 'EL Pollo Loco',
      link: 'link-to-my-Pollo',
      languages: ['JavaScript', 'HTML', 'CSS'],
      image: 'assets/img/featured-projects/Pepe.png',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    },
    {
      name: 'Another P',
      link: 'link-to-my-Pollo',
      languages: ['JavaScript', 'HTML', 'CSS'],
      image: 'assets/img/about-me/location_on.svg',
    },
    {
      name: 'Another a',
      link: 'link-to-my-Pollo',
      languages: ['JavaScript', 'HTML', 'CSS'],
      image: 'assets/img/about-me/cognition.svg',
    },
  ];

  icons: SkillIcon[] = [
    {
      path: 'assets/img/skill-set/Angular.svg',
      name: 'Angular',
      alt: 'Angular',
    },
    {
      path: 'assets/img/skill-set/TypeScript.svg',
      name: 'TypeScript',
      alt: 'TypeScript',
    },
    {
      path: 'assets/img/skill-set/Firebase.svg',
      name: 'Firebase',
      alt: 'Firebase',
    },
    { path: 'assets/img/skill-set/git.svg', name: 'Git', alt: 'Git' },
    {
      path: 'assets/img/skill-set/JavaScript.svg',
      name: 'JavaScript',
      alt: 'JavaScript',
    },
    { path: 'assets/img/skill-set/Api.svg', name: 'Rest-Api', alt: 'Rest-Api' },
    {
      path: 'assets/img/skill-set/Frame.svg',
      name: 'Material Design',
      alt: 'Material Design',
    },
    { path: 'assets/img/skill-set/scrum.svg', name: 'Scrum', alt: 'Scrum' },
    { path: 'assets/img/skill-set/html.svg', name: 'HTML', alt: 'HTML' },
    { path: 'assets/img/skill-set/Css.svg', name: 'CSS', alt: 'CSS' },
    {
      path: 'assets/img/skill-set/Growth.svg',
      name: 'Growth mindset',
      alt: 'Growth mindset',
    },
  ];

  opinions: OpinionInterface[] = [
    {
      name: 'Batool Zamani',
      text: `Ich habe mit Sebastian an zwei Projekten zusammengearbeitet. Er bringt immer positive Energie mit. Er ist sehr gut darin, seine Zeit zu organisieren und findet auch in schwierigen Situationen stets effektive Lösungen.`,
      occupation: 'Team Partner',
    },
    {
      name: 'Muaz Yildiz',
      text: `Es ist mir eine Freude, eine Referenz für Sebastian zu verfassen. Während unserer gemeinsamen Zeit im Team habe ich die Gelegenheit gehabt, sein herausragendes Talent für das Coden zu beobachten. Sebastians Fähigkeit, effizienten und gut strukturierten Code zu schreiben, ist beeindruckend und trägt maßgeblich zum Erfolg unserer Projekte bei.

Darüber hinaus hat Sebastian ein ausgezeichnetes Projektmanagement gezeigt und zeichnet sich durch seine Fähigkeit aus, komplexe Aufgaben in überschaubare Schritte zu gliedern. Sein Engagement für klare Projektstrukturen und effektive Arbeitsabläufe hat maßgeblich dazu beigetragen, dass unsere Projekte termingerecht abgeschlossen wurden.

Sebastian ist auch dafür bekannt, sich eigenständig in neue Technologien einzuarbeiten. 

Darüber hinaus muss ich betonen, dass Sebastian nicht nur ein begabter Programmierer ist, sondern auch als Scrum Master außerordentlich erfolgreich agiert. Seine Fähigkeit zur Koordination von Teams und zur Einhaltung von agilen Methoden hat wesentlich dazu beigetragen, dass unsere Projekte reibungslos verlaufen sind.

Insgesamt kann ich mit Überzeugung sagen, dass Sebastians technisches Know-how kombiniert mit seinem Organisationstalent ihn zu einem unschätzbaren Asset in jedem Entwicklungsteam macht. Es war eine Bereicherung, mit ihm zusammenzuarbeiten und ich bin sicher davon überzeugt, dass er auch künftig Großartiges leisten wird.
`,
      occupation: 'Team Partner',
    },
    {
      name: 'Emre Isik',
      text: `Mit Sebastian habe ich am Kochwelt-Projekt zusammengearbeitet. Sebastian ist ein extrem strukturierter und sympathischer Mensch. Das konnte man ihm schon in den ersten Minuten anmerken. So schnell er auch war, so konzentriert und zielstrebig war er ebenfalls. Ich habe sehr gerne mit Sebastian gearbeitet. Er ist jemand, den man sich immer in einer Gruppenarbeit wünschen würde.`,
      occupation: 'Team Partner',
    },
  ];
}
