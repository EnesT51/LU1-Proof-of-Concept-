import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from '../../shared/components/searchbar/searchbar.component';
import { DropdownComponent } from '../../shared/components/dropdown/dropdown.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SearchbarComponent, DropdownComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  constructor() { }

    modules = [
        {
        id: 1,
        name: 'Module 1',
        shortdescription: 'Korte beschrijving van Module 1',
        location: 'Locatie 1',
        level: 'Niveau 1',
        studycredit: 5,
        learningoutcomes: 'Leeruitkomsten van Module 1'
        },
        {
        id: 2,
        name: 'Module 2',
        shortdescription: 'Korte beschrijving van Module 2',
        location: 'Locatie 2',
        level: 'Niveau 2',
        studycredit: 6,
        learningoutcomes: 'Leeruitkomsten van Module 2'
        },
        {
        id: 3,
        name: 'Module 3',
        shortdescription: 'Korte beschrijving van Module 3',
        location: 'Locatie 3',
        level: 'Niveau 3',
        studycredit: 7,
        learningoutcomes: 'Leeruitkomsten van Module 3'
        },
        {
        id: 4,
        name: 'Module 4',
        shortdescription: 'Korte beschrijving van Module 4',
        location: 'Locatie 4',
        level: 'Niveau 4',
        studycredit: 8,
        learningoutcomes: 'Leeruitkomsten van Module 4'
        },
        {
        id: 5,
        name: 'Module 5',
        shortdescription: 'Korte beschrijving van Module 5',
        location: 'Locatie 5',
        level: 'Niveau 5',
        studycredit: 9,
        learningoutcomes: 'Leeruitkomsten van Module 5'
        },
        {
        id: 6,
        name: 'Module 6',
        shortdescription: 'Korte beschrijving van Module 6',
        location: 'Locatie 6',
        level: 'Niveau 6',
        studycredit: 10,
        learningoutcomes: 'Leeruitkomsten van Module 6'
        }
    ];

    onSearch(searchTerm: string) {
        // Implement your search logic here
        console.log('Search term:', searchTerm);
    }
    onFilterChange(selectedValue: string) {
        // Implement your filter logic here
        console.log('Selected filter:', selectedValue);
    }
}
