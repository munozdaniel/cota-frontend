import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
    {
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
