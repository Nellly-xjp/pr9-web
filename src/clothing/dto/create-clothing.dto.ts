import { IsNumber, IsString, Min, MinLength } from 'class-validator';

export class CreateClothingDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01)
  price: number;

  @IsString()
  @MinLength(1)
  size: string;

  @IsString()
  @MinLength(1)
  color: string;
}
