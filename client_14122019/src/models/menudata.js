import {Item, Menu} from "./menu";


const menuData:Menu[]=[
  new Menu('Inbox', 'pi pi-fw pi-sign-out','Inbox',[ ]),
  new Menu('Project', 'pi pi-fw pi-plus','',[new Item('Add',

    'pi pi-fw pi-share-alt','/Project/Add'),
    new Item('Edit','pi pi-fw pi-pencil','/Project/Edit'),
    new Item('View','pi pi-fw pi-cog','/Project/View'),
    new Item('Delete','pi pi-fw pi-key','/Project/Delete')
  ]),

  new Menu('Employee', 'pi pi-fw pi-sign-out','',[new Item('Add',

    'pi pi-fw pi-share-alt','/project/Employee/Add'),
    new Item('Edit','pi pi-fw pi-pencil','/project/Employee/Edit'),
    new Item('View','pi pi-fw pi-cog','/project/Employee/View'),
    new Item('Delete','pi pi-fw pi-key','/project/Employee/Delete')
  ] ),

  new Menu('Report', 'pi pi-fw pi-sign-out','',[ ]),
  new Menu('Dashboard', 'pi pi-fw pi-sign-out','',[ ])

]

export default menuData;
