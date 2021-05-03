import { Controller, Get, Param } from '@nestjs/common';
import { GetItemDetail } from '.';
import { GetItemDetailDto } from './dto';

@Controller('items')
export class GetItemDetailController {
  constructor(private useCase: GetItemDetail) {}

  @Get(':itemId')
  async searchItemsByQuery(
    @Param() { itemId }: GetItemDetailDto,
  ): Promise<any> {
    return await this.useCase.getItemDetail(itemId);
  }
}
