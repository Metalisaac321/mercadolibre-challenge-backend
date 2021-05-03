import { Controller, Get, Query } from '@nestjs/common';
import { SearchItemsByQuery } from '.';
import { SearchItemsByQueryDto } from './dto';

@Controller('items')
export class SearchItemsByQueryController {
  constructor(private useCase: SearchItemsByQuery) {}

  @Get()
  async searchItemsByQuery(
    @Query() { q }: SearchItemsByQueryDto,
  ): Promise<any> {
    return await this.useCase.searchItemsByQuery(q);
  }
}
