import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Public } from '../common/decorators/public.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';
import { ClothingService } from './clothing.service';
import { CreateClothingDto } from './dto/create-clothing.dto';
import { UpdateClothingDto } from './dto/update-clothing.dto';

@Controller('clothing')
export class ClothingController {
  constructor(private readonly clothingService: ClothingService) {}

  @Roles(Role.ADMIN)
  @Post()
  create(@Body() createClothingDto: CreateClothingDto) {
    return this.clothingService.create(createClothingDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.clothingService.findAll();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.clothingService.findOne(id);
  }

  @Roles(Role.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClothingDto: UpdateClothingDto) {
    return this.clothingService.update(id, updateClothingDto);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clothingService.remove(id);
  }
}
