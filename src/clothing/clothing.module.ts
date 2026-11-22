import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClothingService } from './clothing.service';
import { ClothingController } from './clothing.controller';
import { ClothingEntity } from './entities/clothing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClothingEntity])],
  controllers: [ClothingController],
  providers: [ClothingService],
})
export class ClothingModule {}
