import { Body, Controller, Post } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';

@Controller('reports')
export class ReportsController {
  @Post()
  createReport(@Body() body: CreateReportDto) {
    return body;
  }
}
