import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }
  public letters: any = [];
  filteredBundeslaender: any = [];
  bundeslaender = [
    {
      "name": "Baden-Württemberg",
      "population": 11.1,
      "url": "https://www.baden-wuerttemberg.de/de/startseite/"
    },
    {
      "name": "Bayern",
      "population": 13.1,
      "url": "https://www.bayern.de/"
    },
    {
      "name": "Berlin",
      "population": 3.7,
      "url": "https://www.berlin.de/"
    },
    {
      "name": "Brandenburg",
      "population": 2.5,
      "url": "https://www.brandenburg.de/"
    },
    {
      "name": "Bremen",
      "population": 0.7,
      "url": "https://www.bremen.de/"
    },
    {
      "name": "Hamburg",
      "population": 1.8,
      "url": "https://www.hamburg.de/"
    },
    {
      "name": "Hessen",
      "population": 6.3,
      "url": "https://www.hessen.de/"
    },
    {
      "name": "Mecklenburg-Vorpommern",
      "population": 1.6,
      "url": "https://www.mecklenburg-vorpommern.de/startseite/"
    },
    {
      "name": "Niedersachsen",
      "population": 8,
      "url": "https://www.niedersachsen.de/startseite/"
    },
    {
      "name": "Nordrhein-Westfalen",
      "population": 17.9,
      "url": "https://www.land.nrw/"
    },
    {
      "name": "Rheinland-Pfalz",
      "population": 4.1,
      "url": "https://www.rlp.de/de/startseite/"
    },
    {
      "name": "Saarland",
      "population": 1,
      "url": "https://www.saarland.de/DE/home/home_node.html"
    },
    {
      "name": "Sachsen",
      "population": 4.1,
      "url": "https://www.sachsen.de/"
    },
    {
      "name": "Sachsen-Anhalt",
      "population": 2.2,
      "url": "https://www.sachsen-anhalt.de/startseite/"
    },
    {
      "name": "Schleswig-Holstein",
      "population": 2.9,
      "url": "https://www.schleswig-holstein.de/DE/Home/home_node.html"
    },
    {
      "name": "Thüringen",
      "population": 2.1,
      "url": "https://thueringen.de/"
    }
  ]
  ngOnInit(): void {
    this.renderLetters()
  }

  renderLetters() {
    this.bundeslaender.forEach((land) => {
      let letter = land.name.substring(0, 1)
      if (!this.letters.includes(letter)) {
        this.letters.push(letter)
      }
      console.log(this.letters)
    })
  }

  filterLandOfLetter(i: any) {

    this.filteredBundeslaender = this.bundeslaender.filter((land) => {
      return land.name.substring(0, 1) == i;
    }
    )
  }
  showAllAgain() {
    this.filteredBundeslaender.length = [];
  }
}
