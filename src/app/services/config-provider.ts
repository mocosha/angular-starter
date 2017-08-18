import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {
    get dateTimeFormat() { return 'MM/DD/YY hh:mm A'; }
    set dateTimeFormat(value) { }

    get timeFormat() { return 'hh:mm A'; }
    set timeFormat(value) { }

    get dateFormat() { return 'MM/DD/YY'; }
    set dateFormat(value) { }
}
