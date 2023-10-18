import {Router,CanActivateFn } from '@angular/router';
import {GeneralService} from './genral.service'
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const genral = inject(GeneralService)
  const router = inject(Router)
  if(genral.checkToken(genral.token)){
    console.log(genral.checkToken(genral.token));
    
    router.navigate(['login'])
    return false
  }
  return true;
  
};
