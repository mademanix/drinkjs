import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import {InjectModel} from "@nestjs/sequelize";
import {Ingredient} from "./entities/ingredient.entity";
import { DestroyOptions, FindOptions, UpdateOptions} from "sequelize/types/model";

@Injectable()
export class IngredientService {

  constructor(
    @InjectModel(Ingredient)
    public ingredientRepository: typeof Ingredient,
  ) {}

  public create(createIngredientDto: CreateIngredientDto): void {
    const mappedEntity: Partial<Ingredient> = {
      alcohol: createIngredientDto.isAlcoholic,
      name: createIngredientDto.name,
      createdAt: createIngredientDto.createdAt,
    }

    this.ingredientRepository.create(mappedEntity)
  }

  public findAll() {
    return this.ingredientRepository.findAll();
  }

  findOne(id: number) {
    const payload: FindOptions<Ingredient> = {
      where: {id}
    }
    return this.ingredientRepository.findOne(payload);
  }

  update(id: number, { name, createdAt, isAlcoholic }: UpdateIngredientDto) {
    const payload: Partial<Ingredient> = {name, createdAt, alcohol: isAlcoholic};
    const options: UpdateOptions<Ingredient> = {
      where: {id}
    }
    return this.ingredientRepository.create(payload, options);
  }

  remove(id: number) {
    const options: DestroyOptions<Ingredient> = {
      where: {id}
    }
    return this.ingredientRepository.destroy(options);
  }
}
