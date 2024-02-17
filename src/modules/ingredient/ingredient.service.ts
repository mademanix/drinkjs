import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import {InjectModel} from "@nestjs/sequelize";
import {Ingredient} from "./entities/ingredient.entity";
import { DestroyOptions, FindOptions, UpdateOptions} from "sequelize/types/model";
import {IngredientDto} from "./dto/ingredient.dto";
import {from, map, Observable, of} from "rxjs";

@Injectable()
export class IngredientService {
  constructor(
    @InjectModel(Ingredient)
    private ingredientRepository: typeof Ingredient
  ) {}

  public create(createIngredientDto: CreateIngredientDto): Observable<IngredientDto> {
    const mappedEntity: Partial<Ingredient> = {
      alcohol: createIngredientDto.isAlcoholic,
      name: createIngredientDto.name,
      createdAt: createIngredientDto.createdAt,
    }

    const entity = this.ingredientRepository.create(mappedEntity);

    return from(Promise.resolve(entity)).pipe(
      map(createdEntity => mapEntityToDto<Ingredient, IngredientDto>(createdEntity))
    )
  }

  public  findAll(): Observable<IngredientDto[]> {
    const entities = this.ingredientRepository.findAll();

    return from(Promise.resolve(entities)).pipe(
      map(createdEntities => createdEntities.map(entity => mapEntityToDto<Ingredient, IngredientDto>(entity)))
    )
  }

  public findOne(id: number) {
    const payload: FindOptions<Ingredient> = {
      where: {id}
    }

    const entity = this.ingredientRepository.findOne(payload);

    return from(Promise.resolve(entity)).pipe(
      map(entity =>mapEntityToDto<Ingredient, IngredientDto>(entity))
    )
  }

  update(id: number, { name, createdAt, isAlcoholic }: UpdateIngredientDto): Observable<IngredientDto> {
    const payload: Partial<Ingredient> = {name, createdAt, alcohol: isAlcoholic};
    const options: UpdateOptions<Ingredient> = {
      where: {id}
    }

    const entity = this.ingredientRepository.create(payload, options);

    return from(Promise.resolve(entity)).pipe(
      map(entity =>mapEntityToDto<Ingredient, IngredientDto>(entity))
    )
  }

  remove(id: number): Observable<number> {
    const options: DestroyOptions<Ingredient> = {
      where: {id}
    }

    const entity = this.ingredientRepository.destroy(options);

    return from(Promise.resolve(entity));
  }
}
