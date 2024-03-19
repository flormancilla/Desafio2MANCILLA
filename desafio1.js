class itemManager {
  constructor(items) {
    this.items = items;
    this.id = 0;
  }

  additem(item) {
     if (!this._validateitem(item)) {
      throw new Error('Por favor complete todos los campos');
    }

    const existingitem = this.items.find(p => p.code === item.code);
    if (existingitem) {
      throw new Error('El código del producto ya existe');
    }

    this.id++;
    item.id = this.id;

    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  getItemById(id) {
    const item = this.items.find(p => p.id === id);

    if (!item) {
      throw new Error('producto no encontrado');
    }

    return item;
  }

  _validateitem(item) {
    return (
      item.title &&
      item.description &&
      item.price &&
      item.thumbnail &&
      item.code &&
      item.stock
    );
  }
}

const itemManager = new itemManager([]);

const item1 = {
  title: 'producto 1',
  description: 'Descripción del producto #1 ',
  price: 1000,
  thumbnail: '#',
  code: '99999',
  stock: 12,
};

const item2 = {
  title: 'producto 2',
  description: 'Descripción del producto #2',
  price: 5000,
  thumbnail: '#',
  code: '7998',
  stock: 14,
};

itemManager.additem(item1);
itemManager.additem(item2);

const item = itemManager.getitemById(1);

console.log(item);

try {
  itemManager.getitemById(2);
} catch (error) {
  console.log(error.message);
}
