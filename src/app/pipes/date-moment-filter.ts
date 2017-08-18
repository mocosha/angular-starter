import { Pipe, PipeTransform } from '@angular/core';
import { ConfigProvider } from '../services/config-provider';
import * as moment from 'moment';
import 'moment-timezone';

@Pipe({ name: 'dateMoment', pure: false })
export class DateMomentFilter implements PipeTransform {
    constructor(configProvider: ConfigProvider) {
        this._configProvider = configProvider;
    }

    transform(date: Date | string | number, format?: string, timezone?: string): string {
        var m = moment(date);

        if (typeof format !== 'string' || format.length < 1) {
            format = this._configProvider.dateTimeFormat;
        } else if (format === 'time') {
            format = this._configProvider.timeFormat;
        } else if (format === 'date') {
            format = this._configProvider.dateFormat;
        } else if (format === 'dateTime') {
            format = this._configProvider.dateTimeFormat;
        }

        if (typeof timezone !== 'string' || timezone.length < 1) {
            return m.tz(moment.tz.guess()).format(format);
        } else {
            return m.tz(timezone).format(format);
        }

    }

    private _configProvider: ConfigProvider = null;
}
