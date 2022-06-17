
export function getProducts() : Product[]{
    var a =
        ['Nokia Lumia', 'Xiomi Mi3', 'Google Pixel 4a']
            .map((e, i) => { return { id: i.toString(), name: e, description: e + ' description', price: 890 } });
    return a;
}

export interface Product {
    id: string,
    name: string,
    description?: string
    price: number
}



