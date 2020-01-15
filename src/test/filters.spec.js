import filters from '../helpers/filters';
import {items} from './values'
 

test('should order by price', () => {
    const result = filters.order_by_priceFilter(true)(items);
    expect(result).toEqual([
        {
            price: 1,
            size: 1,
            type: "office",
            is_deleted: true
        },
        {
            price: 2,
            size: 2,
            type: "industrial",
            is_deleted: false
        },
        {
            price: 3,
            size: 1,
            type: "office",
            is_deleted: false
        }
    ]);
})
