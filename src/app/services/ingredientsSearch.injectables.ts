import { IngredientSearchService } from './ingredients-search';

export const Injectables: Array<any> = [
  { provide: IngredientSearchService, useClass: IngredientSearchService }
];
