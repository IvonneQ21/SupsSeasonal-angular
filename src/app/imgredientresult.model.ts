export class SearchResult {
  food_name: string;

  constructor(obj?: any) {
    this.food_name = obj && obj.food_name || null;
  }
}

// export class foodResult {
//   food_name : string;
//
//   constructor(obj?: any){
//     this.food_name =obj && obj.food_name || null;
//   }
// }
// export class SearchResults {
//   id: number;
//   food_name: string;
//   created_by: number;
//   created_at: number;
//   updated_at: number;
//   jan: boolean;
//   feb: boolean;
//   mar: boolean;
//   apr: boolean;
//   may: boolean;
//   jun: boolean;
//   jul: boolean;
//   aug: boolean;
//   sep: boolean;
//   oct: boolean;
//   nov: boolean;
//   dec: boolean;
//
//   constructor(obj?: any) {
//     this.food_name = obj && obj.food_name  || null;
//   }
// }
