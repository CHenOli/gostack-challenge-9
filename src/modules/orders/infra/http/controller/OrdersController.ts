import { container } from 'tsyringe';
import { Request, Response } from 'express';

import FindOrderService from '@modules/orders/services/FindOrderService';
import CreateOrderService from '@modules/orders/services/CreateOrderService';

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOrderService = container.resolve(FindOrderService);

    const order = await findOrderService.execute({
      id,
    });

    return response.json(order);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { customer_id, products } = request.body;

    const createOrderService = container.resolve(CreateOrderService);

    const order = await createOrderService.execute({
      products,
      customer_id,
    });

    return response.json(order);
  }
}
