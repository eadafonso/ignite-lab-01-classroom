import { Controller } from '@nestjs/common';

@Controller()
export class PurchaseController {
  async purchaseCreate() {
    console.log('teste');
  }
}
