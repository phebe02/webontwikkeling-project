
import { PorscheData } from './interfaces/interface';
import readline from "readline-sync";
import  porscheData  from './json/porsche.json';

console.log("Welcome to the JSON data viewer!");
//het hoofdmenu functie maken 
function showMenu(): void {
    console.log(""); 
    console.log("Select an option of the menu:");
    console.log("1. View all data");
    console.log("2. Filter by ID");
    console.log("3. Exit");
  }

//keuze van de gebruiker vragen en de case aanroepen

const choice: number = 0;
  do {

    showMenu();
    const choice: number = readline.questionInt("Please enter your choice: ");
    switch (choice) {
      case 1:
        viewData();
        break;
      case 2:
        filteredData();
        break;
      case 3:
        console.log("Goodbye!");
        process.exit(0);
        break;
      default:
        console.log("Invalid choice. Please try again.");
    }
  } while (choice !== 3);


  //functie case 1 alle data 
  function viewData(): void {
    const data: PorscheData = porscheData;
    data.porsches.forEach((porsche)=> {
        console.log(`${porsche.id} - ${porsche.name}`);
    });
  }

  //functie case 2 gefilterde data
  function filteredData(){
    const filterId: number= readline.questionInt("Please enter the ID you want to filter by: ")
    const data: PorscheData = porscheData;

    const foundPorsche = data.porsches.find(porsche => porsche.id === filterId);
  
    if (foundPorsche) {
      console.log(`- ${foundPorsche.name} (ID: ${foundPorsche.id})`);
      console.log(`  - Description: ${foundPorsche.description}`);
      console.log(`  - Horsepower: ${foundPorsche.horsepower}`);
      console.log(`  - Is Electric: ${foundPorsche.isElectric}`);
      console.log(`  - Release Date: ${foundPorsche.releaseDate}`);
      console.log(`  - Image: ${foundPorsche.imageUrl}`);
      console.log(`  - Category: ${foundPorsche.category}`);
      console.log(`  - Features: ${foundPorsche.features.join(", ")}`);
      console.log(`  - Manufacturer: ${foundPorsche.manufacturer.name}`);
      console.log(`    - Country: ${foundPorsche.manufacturer.country}`);
      console.log(`    - Founded: ${foundPorsche.manufacturer.founded}`);
      console.log(`    - Logo: ${foundPorsche.manufacturer.logoUrl}`);
    } else {
      console.log(`Geen data gevonden voor ID ${filterId}.`);
    }

  }