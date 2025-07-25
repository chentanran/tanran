import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BbbService } from './bbb.service';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
import { LoginGuard } from 'src/login.guard';
import { RequireLogin, RequirePermission } from 'src/custom-decorator';

@Controller('bbb')
@RequireLogin()
export class BbbController {
  constructor(private readonly bbbService: BbbService) {}

  @Post()
  @UseGuards(LoginGuard)
  create(@Body() createBbbDto: CreateBbbDto) {
    return this.bbbService.create(createBbbDto);
  }

  @Get()
  @RequirePermission('查询 bbb')
  findAll() {
    return this.bbbService.findAll();
  }

  @Get(':id')
  @UseGuards(LoginGuard)
  findOne(@Param('id') id: string) {
    return this.bbbService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(LoginGuard)
  update(@Param('id') id: string, @Body() updateBbbDto: UpdateBbbDto) {
    return this.bbbService.update(+id, updateBbbDto);
  }

  @Delete(':id')
  @UseGuards(LoginGuard)
  remove(@Param('id') id: string) {
    return this.bbbService.remove(+id);
  }
}
