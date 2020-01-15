import filters from '../helpers/filters';
import { items } from './values'


test('should order by price asc', () => {
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


test('should order by price desc', () => {
    const result = filters.order_by_priceFilter(false)(items);
    expect(result).toEqual([
        {
            price: 3,
            size: 1,
            type: "office",
            is_deleted: false
        },
        {
            price: 2,
            size: 2,
            type: "industrial",
            is_deleted: false
        },
        {
            price: 1,
            size: 1,
            type: "office",
            is_deleted: true
        },
    ]);
})

test('should order by size desc', () => {
    const result = filters.order_by_sizeFilter(false)(items);
    expect(result).toEqual([
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
        },
        {
            price: 1,
            size: 1,
            type: "office",
            is_deleted: true
        }

    ]);
})
test('should order by size asc', () => {
    const result = filters.order_by_sizeFilter(true)(items);
    expect(result).toEqual([
        {
            price: 3,
            size: 1,
            type: "office",
            is_deleted: false
        },
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
        }
    ]);
})
test('should filter type', () => {
    const result = filters.typeFilter('industrial')(items);
    expect(result).toEqual([
        {
            price: 2,
            size: 2,
            type: "industrial",
            is_deleted: false
        }
    ])
})

// ....


