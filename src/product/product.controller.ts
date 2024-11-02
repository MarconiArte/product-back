import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly product: ProductService) {}

    @Post()
    create(@Body() data: Product): Promise<Product> {
      return this.product.create(data);
    }
  
    @Get()
    findAll(): Promise<Product[]> {
      return this.product.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Product | null> {
      return this.product.findOne(+id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() data: Product) {
      return this.product.update(+id, data);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string): Promise<void> {
      return this.product.delete(+id);
    }
}
