import { inject } from '@angular/core'
import {
  ActivatedRoute,
  RedirectCommand,
  Router,
  Routes,
  type RouterStateSnapshot,
  type UrlTree,
} from '@angular/router'
import { AuthService } from './core/service/auth-service.service'
import { AccountLayoutComponent } from './layouts/account-layout/account-layout.component'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component'
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/index-1',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./views/demo/demo.route').then((mod) => mod.DEMO_ROUTES),
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./views/course/course.route').then((mod) => mod.COURSE_ROUTES),
  },
  {
    path: 'hero',
    loadChildren: () =>
      import('./views/hero/hero.route').then((mod) => mod.HERO_ROUTES),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./views/shop/shop.route').then((mod) => mod.SHOP_ROUTES),
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./views/help/help.route').then((mod) => mod.HELP_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEWS_ROUTES),
  },
  {
    path: 'instructor',
    component: AccountLayoutComponent,
    canActivate: [
      (url: any) => {
        const router = inject(Router)
        const authService = inject(AuthService)
        if (!authService.session) {
          return router.createUrlTree(['/sign-in'], {
            queryParams: { returnUrl: url._routerState.url },
          })
        }
        return true
      },
    ],
    loadChildren: () =>
      import('./views/instructor/instructor.route').then(
        (mod) => mod.INSTRUCTOR_ROUTES
      ),
  },
  {
    path: 'student',
    component: AccountLayoutComponent,
    canActivate: [
      (url: any) => {
        const router = inject(Router)
        const authService = inject(AuthService)
        if (!authService.session) {
          return router.createUrlTree(['/sign-in'], {
            queryParams: { returnUrl: url._routerState.url },
          })
        }
        return true
      },
    ],
    loadChildren: () =>
      import('./views/student/student.route').then((mod) => mod.STUDENT_ROUTES),
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [
      (url: any) => {
        const router = inject(Router)
        const authService = inject(AuthService)
        if (!authService.session) {
          return router.createUrlTree(['/sign-in'], {
            queryParams: { returnUrl: url._routerState.url },
          })
        }
        return true
      },
    ],
    loadChildren: () =>
      import('./views/admin/admin.route').then((mod) => mod.ADMIN_ROUTES),
  },
  {
    path: '',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./views/auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
]
