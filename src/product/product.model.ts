import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column
  nombre: string;

  @Column
  codigo: string;

  @Column
  precio: number;

  @Column
  nota: string;
}
