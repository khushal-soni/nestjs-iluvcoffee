import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'All Coffees.';
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `This is Coffee #${id}.`;
  }

  @Post()
  createCoffee(@Body() body: CreateCoffeeDto) {
    return body;
  }

  @Patch(':id')
  updateCoffee(@Param('id') id: number, @Body() body: UpdateCoffeeDto) {
    return { id, ...body };
  }
}
