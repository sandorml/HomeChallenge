export default {
    typeFilter: (pattern) => {
        return (items) => items.filter(e => e.type === pattern)
    },
    priceFilter: (pattern,lt) => {
        return (items) => items.filter(e => lt ? e.price < pattern : e.price > pattern)
    },
    deletedFilter: (deleted) => {
        return (items) => items.filter(e => !((deleted || e.is_deleted) && !(deleted && e.is_deleted)))
    },
    order_by_priceFilter: (order) => {
        return (items) => {
            items.sort((a,b)=> order? a.price-b.price: b.price-a.price)
            return items
        }
    },
    order_by_sizeFilter: (order) => {
        return (items) => {
            items.sort((a,b)=> order? a.size-b.size: b.size-a.size)
            return items
        }
    },

    
}
