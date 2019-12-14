
export class Menu
{
  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }
  _label:string;
   _icon:string;
  _routerLink:string;

  _items:Item[]

  constructor(plabel:string,picon:string,prouter:string,pitems:Item[])
  {

    this._label=plabel;
    this._icon=picon;
    this._items=pitems;
    this._routerLink=prouter;
  }
  get routerLink(): string {
    return this._routerLink;
  }

  set routerLink(value: string) {
    this._routerLink = value;
  }
  get items(): Item[] {
    return this._items;
  }

  set items(value: Item[]) {
    this._items = value;
  }
  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }




}




export class Item
{
  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
   _label:string;
   _icon:string;
   _url:string

  constructor(plabel,picon,prouter:string)
  {
    this._label=plabel;
    this._icon=picon;
    this._url=prouter;
  }


  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }


  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }





}



