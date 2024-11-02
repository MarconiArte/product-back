import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column
  title: string;

  @Column
  description: string;
}
