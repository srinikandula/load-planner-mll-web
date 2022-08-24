import { Routes } from '@angular/router';

export const BACKEND_LAYOUT: Routes = [
    {
        path: '',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'warehouselist',
        loadChildren: () => import('../select-warehouse/select-warehouse.module').then(m => m.SelectWarehouseModule)
    }
]