class Pizza {
  name: string;
  size: "S" | "M" | "L";

  constructor(name: string, size: "S" | "M" | "L") {
    this.name = name;
    this.size = size;
  }
}

class Customer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  orderPizza(pizza: Pizza): void {
    console.log(
      `${this.name}님이 ${pizza.name} (${pizza.size}) 피자를 주문했습니다.`
    );
  }
}

class Cashier {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  makePizza(pizza: Pizza): void {
    console.log(
      `${this.name} 점원이 ${pizza.name} (${pizza.size}) 피자를 만들고 있습니다.`
    );
  }
}

const customer = new Customer("김철수");
const cashier = new Cashier("최은지");

const pizza = new Pizza("페퍼로니", "L");

customer.orderPizza(pizza);
cashier.makePizza(pizza);
