
import { PorscheData } from './interfaces/interface';
import readline from "readline-sync";
import  porscheData  from './json/porsche.json';

//het hoofdmenu functie maken 
function showMenu(): void {
    console.log("Welcome to the JSON data viewer!");
    console.log("");
    console.log("1. View all data");
    console.log("2. Filter by ID");
    console.log("3. Exit");
  }

  //hoofdmenu laten zien
  showMenu();

//keuze van de gebruiker vragen en de case aanroepen
  const choice: number = readline.questionInt("Please enter your choice: ")
switch (choice) {
    case 1:
        viewData();
        break;
        case 2:
        filteredData();
        break;
    default:
        break;
}

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


  }