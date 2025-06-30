// src/app/guards/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

export const guardAuthGuard: CanActivateFn = async (route, state) => {
  const usuarioService = inject(UserServiceService);
  const router = inject(Router);

  const isLogged = await usuarioService.isLoggedIn();

  if (isLogged) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
