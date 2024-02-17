import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { CreateIngredientDto } from "./dto/create-ingredient.dto";
import {UpdateIngredientDto} from "./dto/update-ingredient.dto";
import {Observable} from "rxjs";
import {IngredientDto} from "./dto/ingredient.dto";

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Post()
  create(@Body() createIngredientDto: CreateIngredientDto): Observable<IngredientDto> {
    return this.ingredientService.create(createIngredientDto);
  }

  @Get()
  findAll(): Observable<IngredientDto[]> {
    return this.ingredientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IngredientDto> {
    return this.ingredientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngredientDto: UpdateIngredientDto): Observable<IngredientDto> {
    return this.ingredientService.update(+id, updateIngredientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Observable<number> {
    return this.ingredientService.remove(+id);
  }
}
