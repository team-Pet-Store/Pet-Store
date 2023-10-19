import { CanActivateFn, Router } from '@angular/router';
import { GeneralService } from './genral.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const genral = inject(GeneralService)
  const router = inject(Router)
  
  if(genral.role !== 'admin' && !genral.token){
    // console.log(genral.role, 'fjbqhfdiio')
    router.navigate([''])
    return false
  }
  return true;
  
};
