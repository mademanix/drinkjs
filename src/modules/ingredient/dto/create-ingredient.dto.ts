import {ApiProperty} from "@nestjs/swagger";

export class CreateIngredientDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  isAlcoholic: boolean;

  @ApiProperty()
  description: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  strength: number;

  @ApiProperty()
  createdAt: string;
}
