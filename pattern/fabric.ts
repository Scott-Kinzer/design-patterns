abstract class Furniture {

    public abstract factoryMethod(): Product;

    public createFurniture(): string {
        const product = this.factoryMethod();
        return `Furniture ${product.showFurnitureName()} created`;
    }
}

class ChairsFactory extends Furniture {
    public factoryMethod(): Product {
        return new Chair();
    }
}

class DesksFactory extends Furniture {
    public factoryMethod(): Product {
        return new Desk();
    }
}

interface Product {
    showFurnitureName(): string;
}

class Chair implements Product {
    public showFurnitureName(): string {
        return 'Chair';
    }
}

class Desk implements Product {
    public showFurnitureName(): string {
        return 'Desk';
    }
}

function clientCode(creator: Furniture) {
    console.log('Furntiture creation');
    console.log(creator.createFurniture());
}

console.log('Do some chairs');
clientCode(new ChairsFactory());
console.log('');

console.log('Do some desks');
clientCode(new DesksFactory());