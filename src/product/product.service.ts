import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product)
        private readonly product: typeof Product
    ){ }

    async create(data: Product): Promise<Product> {
        return this.product.create(data);
    }

    async findAll(): Promise<Product[]> {
        return this.product.findAll();
    }

    async findOne(id: number): Promise<Product | null> {
        return this.product.findByPk(id);
      }
    
    async update(id: number, data: Product): Promise<Product | null> {
        await this.product.update(data, { where: { id } });
        return this.product.findByPk(id);
      }
    
    
    async delete(id: number): Promise<void> {
        const product = await this.product.findByPk(id); // Busca el producto por ID
        if (product) {
        await product.destroy(); // Elimina el producto encontrado
        }
    }
}
