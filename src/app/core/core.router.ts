import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InitialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from './auth/guards/auth.guard';

const routes = [
    {

        resolve: {
            initialData: InitialDataResolver,
        },
        path: 'dashboard',
        loadChildren: () =>
            import('app/features/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoreRoutingModule {}
