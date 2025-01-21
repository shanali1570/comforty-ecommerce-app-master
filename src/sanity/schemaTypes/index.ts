import { type SchemaTypeDefinition } from 'sanity'
import banner from '../schemas/banner'
import products from '../schemas/products'
import category from '../schemas/category'
import order from '../schemas/order'

export const schema: { types: SchemaTypeDefinition[] } = {
    //banner, products, category
    types: [banner,products,category,order],
}
