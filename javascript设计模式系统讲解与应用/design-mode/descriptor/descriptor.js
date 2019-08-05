import { readonly } from 'core-decorators';
 
class Meal {
  @readonly
  entree = 'steak';
}
 
var dinner = new Meal();
dinner.entree = 'salmon';