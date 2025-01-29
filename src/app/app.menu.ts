import { Type } from "@angular/core";
import { LibrariesListComponent } from "@pages/libraries/views/libraries-list/libraries-list.component";
import { LibraryNgSelectComponent } from "@pages/libraries/views/library-ng-select/library-ng-select.component";
import { LibraryNgSelectExampleComponent } from "@pages/libraries/views/library-ng-select/tabs/library-ng-select-example/library-ng-select-example.component";
import { LibraryNgSelectOverviewComponent } from "@pages/libraries/views/library-ng-select/tabs/library-ng-select-overview/library-ng-select-overview.component";
import { LibraryNgSelectStylingComponent } from "@pages/libraries/views/library-ng-select/tabs/library-ng-select-styling/library-ng-select-styling.component";
import { LibrariesComponent } from "pages/libraries/libraries.component";

export type IMenuItem = {
    icon?: string;
    label?: string;
    route: string;
    isMenu?: boolean;
    subMenu?: IMenuItem[];
    component?: Type<unknown>;
};
export const menuItems: IMenuItem[] = [
    {
        icon: '',
        label: 'Libraries',
        isMenu: true,
        route: 'libraries',
        subMenu: [
            {
                icon: '',
                label: '',
                route: 'overview',
                component: LibrariesListComponent,
            },
            {
                icon: '',
                label: 'Ng Select',
                isMenu: true,
                route: 'ng-select',
                component: LibraryNgSelectComponent,
                subMenu: [
                    {
                        icon: '',
                        label: '',
                        route: 'overview',
                        component: LibraryNgSelectOverviewComponent,
                    },
                    {
                        icon: '',
                        label: '',
                        route: 'styling',
                        component: LibraryNgSelectStylingComponent,
                    },
                    {
                        icon: '',
                        label: '',
                        route: 'example',
                        component: LibraryNgSelectExampleComponent,
                    }
                ]
            },
        ],
        component: LibrariesComponent,
    }
]