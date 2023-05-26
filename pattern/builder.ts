class ProductExample {
  public id: number | undefined;
  public name: string | undefined;
  public price: number | undefined;

  constructor() {}

  public getId(): number | undefined {
    return this.id;
  }

  public getName(): string | undefined {
    return this.name;
  }

  public getPrice(): number | undefined {
    return this.price;
  }

  static Builder(): ProductBuilder {
    return new ProductBuilder();
  }
}

class ProductBuilder {
  private product: ProductExample;

  constructor() {
    this.product = new ProductExample();
  }

  public withId(id: number): ProductBuilder {
    this.product.id = id;
    return this;
  }

  public withName(name: string): ProductBuilder {
    this.product.name = name;
    return this;
  }

  public withPrice(price: number): ProductBuilder {
    this.product.price = price;
    return this;
  }

  public build(): ProductExample {
    return this.product;
  }
}

const product = ProductExample.Builder().withId(1).withName('Example Product').withPrice(10.99).build();

console.log(product.getId());
console.log(product.getName());
console.log(product.getPrice());
