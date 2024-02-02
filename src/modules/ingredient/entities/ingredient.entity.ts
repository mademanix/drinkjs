import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class Ingredient extends Model {
  @Column
  name: string;

  @Column
  alcohol: boolean;

  @Column
  desc: string;

  @Column
  type: string;

  @Column
  strength: number;

  @Column
  createdAt: string;
}