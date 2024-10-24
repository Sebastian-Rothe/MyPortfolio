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
      link_github: 'https://github.com/Sebastian-Rothe/EL-POLLO-LOCO-.git',
      live_link: 'https://el-pollo-loco.sebastian-rothe.com',
      languages: ['JavaScript', 'HTML', 'CSS'],
      image: 'assets/img/featured-projects/Pepe.png',
      description_en:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      description_de:
        'Sprung-, Lauf- und Wurfspiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
    },
    {
      name: 'Join',
      link_github: 'https://github.com/Sebastian-Rothe/Join.git',
      live_link: 'https://join.sebastian-rothe.com',
      languages: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
      image: 'assets/img/featured-projects/join.svg',
      description_en:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      description_de:
        'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
    },
    {
      name: 'Pokedex',
      link_github: 'http://github.com/Sebastian-Rothe/Poke_Deck.git',
      live_link: 'https://pokedex.sebastian-rothe.com/',
      languages: ['JavaScript', 'Rest-Api', 'HTML', 'CSS'],
      image: 'assets/img/featured-projects/pokedex.png',
      description_en:
        'A Pokémon database featuring a vast collection of data on every Pokémon there is.',
      description_de:
        'Eine Pokémon-Datenbank mit einer Fülle an Informationen über jedes Pokémon, das es gibt.',
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
      text_de: `Ich habe mit Sebastian an zwei Projekten zusammengearbeitet. Er bringt immer positive Energie mit. Er ist sehr gut darin, seine Zeit zu organisieren und findet auch in schwierigen Situationen stets effektive Lösungen.`,
      text_en:
        'I have worked with Sebastian on two projects. He always brings positive energy. He is very good at organizing his time and always finds effective solutions even in difficult situations.',
      occupation: 'Team Partner',
    },
    {
      name: 'Muaz Yildiz',
      text_de: `Es ist mir eine Freude, eine Referenz für Sebastian zu verfassen. Während unserer gemeinsamen Zeit im Team habe ich die Gelegenheit gehabt, sein herausragendes Talent für das Coden zu beobachten. Sebastians Fähigkeit, effizienten und gut strukturierten Code zu schreiben, ist beeindruckend und trägt maßgeblich zum Erfolg unserer Projekte bei.

Darüber hinaus hat Sebastian ein ausgezeichnetes Projektmanagement gezeigt und zeichnet sich durch seine Fähigkeit aus, komplexe Aufgaben in überschaubare Schritte zu gliedern. Sein Engagement für klare Projektstrukturen und effektive Arbeitsabläufe hat maßgeblich dazu beigetragen, dass unsere Projekte termingerecht abgeschlossen wurden.

Sebastian ist auch dafür bekannt, sich eigenständig in neue Technologien einzuarbeiten. 

Darüber hinaus muss ich betonen, dass Sebastian nicht nur ein begabter Programmierer ist, sondern auch als Scrum Master außerordentlich erfolgreich agiert. Seine Fähigkeit zur Koordination von Teams und zur Einhaltung von agilen Methoden hat wesentlich dazu beigetragen, dass unsere Projekte reibungslos verlaufen sind.

Insgesamt kann ich mit Überzeugung sagen, dass Sebastians technisches Know-how kombiniert mit seinem Organisationstalent ihn zu einem unschätzbaren Asset in jedem Entwicklungsteam macht. Es war eine Bereicherung, mit ihm zusammenzuarbeiten und ich bin sicher davon überzeugt, dass er auch künftig Großartiges leisten wird.
`,
      text_en:
        'It is a pleasure to write a reference for Sebastian. During our time together in the team, I have had the opportunity to observe his outstanding talent for coding. Sebastians ability to write efficient and well-structured code is impressive and contributes significantly to the success of our projects. In addition, Sebastian has demonstrated excellent project management and excels at breaking down complex tasks into manageable steps. His commitment to clear project structures and effective workflows has been instrumental in ensuring that our projects have been completed on time. Sebastian is also known for his ability to independently familiarize himself with new technologies. In addition, I must emphasize that Sebastian is not only a talented programmer, but is also exceptionally successful as a Scrum Master. His ability to coordinate teams and adhere to agile methods has played a major role in ensuring that our projects have run smoothly. Overall, I can confidently say that Sebastians technical know-how combined with his organizational skills make him an invaluable asset to any development team. It has been a pleasure to work with him and I am sure he will continue to do great things in the future.',
      occupation: 'Team Partner',
    },
    {
      name: 'Emre Isik',
      text_de: `Mit Sebastian habe ich am Kochwelt-Projekt zusammengearbeitet. Sebastian ist ein extrem strukturierter und sympathischer Mensch. Das konnte man ihm schon in den ersten Minuten anmerken. So schnell er auch war, so konzentriert und zielstrebig war er ebenfalls. Ich habe sehr gerne mit Sebastian gearbeitet. Er ist jemand, den man sich immer in einer Gruppenarbeit wünschen würde.`,
      text_en:
        'I worked with Sebastian on the Kochwelt project. Sebastian is an extremely structured and likeable person. You could tell that from the first few minutes. As fast as he was, he was also focused and determined. I really enjoyed working with Sebastian. He is someone you would always want in a group.',
      occupation: 'Team Partner',
    },
    {
      name: 'Batool Zamani',
      text_de: `Ich habe mit Sebastian an zwei Projekten zusammengearbeitet. Er bringt immer positive Energie mit. Er ist sehr gut darin, seine Zeit zu organisieren und findet auch in schwierigen Situationen stets effektive Lösungen.`,
      text_en:
        'I have worked with Sebastian on two projects. He always brings positive energy. He is very good at organizing his time and always finds effective solutions even in difficult situations.',
      occupation: 'Team Partner',
    },
    {
      name: 'Muaz Yildiz',
      text_de: `Es ist mir eine Freude, eine Referenz für Sebastian zu verfassen. Während unserer gemeinsamen Zeit im Team habe ich die Gelegenheit gehabt, sein herausragendes Talent für das Coden zu beobachten. Sebastians Fähigkeit, effizienten und gut strukturierten Code zu schreiben, ist beeindruckend und trägt maßgeblich zum Erfolg unserer Projekte bei.

Darüber hinaus hat Sebastian ein ausgezeichnetes Projektmanagement gezeigt und zeichnet sich durch seine Fähigkeit aus, komplexe Aufgaben in überschaubare Schritte zu gliedern. Sein Engagement für klare Projektstrukturen und effektive Arbeitsabläufe hat maßgeblich dazu beigetragen, dass unsere Projekte termingerecht abgeschlossen wurden.

Sebastian ist auch dafür bekannt, sich eigenständig in neue Technologien einzuarbeiten. 

Darüber hinaus muss ich betonen, dass Sebastian nicht nur ein begabter Programmierer ist, sondern auch als Scrum Master außerordentlich erfolgreich agiert. Seine Fähigkeit zur Koordination von Teams und zur Einhaltung von agilen Methoden hat wesentlich dazu beigetragen, dass unsere Projekte reibungslos verlaufen sind.

Insgesamt kann ich mit Überzeugung sagen, dass Sebastians technisches Know-how kombiniert mit seinem Organisationstalent ihn zu einem unschätzbaren Asset in jedem Entwicklungsteam macht. Es war eine Bereicherung, mit ihm zusammenzuarbeiten und ich bin sicher davon überzeugt, dass er auch künftig Großartiges leisten wird.
`,
      text_en:
        'It is a pleasure to write a reference for Sebastian. During our time together in the team, I have had the opportunity to observe his outstanding talent for coding. Sebastians ability to write efficient and well-structured code is impressive and contributes significantly to the success of our projects. In addition, Sebastian has demonstrated excellent project management and excels at breaking down complex tasks into manageable steps. His commitment to clear project structures and effective workflows has been instrumental in ensuring that our projects have been completed on time. Sebastian is also known for his ability to independently familiarize himself with new technologies. In addition, I must emphasize that Sebastian is not only a talented programmer, but is also exceptionally successful as a Scrum Master. His ability to coordinate teams and adhere to agile methods has played a major role in ensuring that our projects have run smoothly. Overall, I can confidently say that Sebastians technical know-how combined with his organizational skills make him an invaluable asset to any development team. It has been a pleasure to work with him and I am sure he will continue to do great things in the future.',
      occupation: 'Team Partner',
    },
    {
      name: 'Emre Isik',
      text_de: `Mit Sebastian habe ich am Kochwelt-Projekt zusammengearbeitet. Sebastian ist ein extrem strukturierter und sympathischer Mensch. Das konnte man ihm schon in den ersten Minuten anmerken. So schnell er auch war, so konzentriert und zielstrebig war er ebenfalls. Ich habe sehr gerne mit Sebastian gearbeitet. Er ist jemand, den man sich immer in einer Gruppenarbeit wünschen würde.`,
      text_en:
        'I worked with Sebastian on the Kochwelt project. Sebastian is an extremely structured and likeable person. You could tell that from the first few minutes. As fast as he was, he was also focused and determined. I really enjoyed working with Sebastian. He is someone you would always want in a group.',
      occupation: 'Team Partner',
    },
  ];
}
