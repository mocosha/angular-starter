import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'distance', pure: false })
export class DistanceFilter implements PipeTransform {
    private static measures = {
        'm': { value: 1 },
        'km': { value: 0.001 },
        'cm': { value: 100 },
        'mm': { value: 1000 },
        'mi': { value: (1 / 1609.344) },
        'sm': { value: (1 / 1852.216) },
        'ft': { value: (100 / 30.48) },
        'in': { value: (100 / 2.54) },
        'yd': { value: (1 / 0.9144) }
    };

    public transform(distance: number, unit?: string, round?: number, reverse?: boolean): number {
        if (distance === 0) {
            return 0;
        }

        unit = unit || 'm';
        round = (null == round ? 4 : round);

        if (typeof DistanceFilter.measures[unit] !== 'undefined') {
            if (!reverse) {
                return this.round(distance * DistanceFilter.measures[unit].value, round);
            } else {
                return this.round(distance / DistanceFilter.measures[unit].value, round);
            }
        } else {
            throw new Error('Unknown unit for conversion.');
        }
    }

    private round(value, n) {
        let decPlace = Math.pow(10, n);
        return Math.round(value * decPlace) / decPlace;
    }
}
