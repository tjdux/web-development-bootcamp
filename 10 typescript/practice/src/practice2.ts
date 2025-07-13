class Customer {
  constructor(public name: string) {}

  placeOrder(product: Product, center: LogisticsCenter) {
    console.log(`[${this.name}]님이 [${product.name}] 주문 요청을 보냈습니다.`);
    const delivery = new Delivery(this, product);
    center.addDelivery(delivery);
    return delivery;
  }
}

class Product {
  constructor(public name: string, public weight: number) {}
}

enum DeliveryStatus {
  Pending = "pending",
  InTransit = "in-transit",
  Delivered = "delivered",
}

class Delivery {
  public status: DeliveryStatus = DeliveryStatus.Pending;

  constructor(public customer: Customer, public product: Product) {}

  updateStatus(deliveryStatus: DeliveryStatus) {
    this.status = deliveryStatus;
  }
}

interface DeliveryAgent {
  deliveryAgent: string;
  deliver(delivery: Delivery): void;
}

class DeliveryMan implements DeliveryAgent {
  constructor(public deliveryAgent: string) {}

  deliver(delivery: Delivery) {
    console.log(
      `[${this.deliveryAgent}] 기사가 [${delivery.product.name}] 배송을 시작했습니다.`
    );
    delivery.updateStatus(DeliveryStatus.InTransit);

    console.log(
      `[${this.deliveryAgent}] 기사가 [${delivery.product.name}] 배송을 완료했습니다.`
    );
    delivery.updateStatus(DeliveryStatus.Delivered);
  }
}

class DroneDelivery implements DeliveryAgent {
  constructor(public deliveryAgent: string) {}

  deliver(delivery: Delivery) {
    console.log(
      `[${this.deliveryAgent}] 드론이 [${delivery.product.name}] 배송을 시작했습니다.`
    );
    delivery.updateStatus(DeliveryStatus.InTransit);

    console.log(
      `[${this.deliveryAgent}] 드론이 [${delivery.product.name}] 배송을 완료했습니다.`
    );
    delivery.updateStatus(DeliveryStatus.Delivered);
  }
}

class LogisticsCenter {
  public deliveries: Delivery[] = [];

  addDelivery(delivery: Delivery) {
    this.deliveries.push(delivery);
  }

  dispatch(deliver: Delivery, deliveryAgent: DeliveryAgent) {
    deliveryAgent.deliver(deliver);
  }

  printAllDeliveries() {
    console.log("📦 현재 물류 배송 현황:");
    this.deliveries.forEach((delivery) =>
      console.log(
        `- [${delivery.product.name}] / 고객: ${delivery.customer.name} / 상태: ${delivery.status}`
      )
    );
  }
}

const customer = new Customer("김철수");
const product = new Product("태블릿", 1.8);

const center = new LogisticsCenter();
const delivery = customer.placeOrder(product, center);

const drone = new DroneDelivery("DR-300");
center.dispatch(delivery, drone);

center.printAllDeliveries();
