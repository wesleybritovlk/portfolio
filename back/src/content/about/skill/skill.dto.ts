import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SkillRequest {
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  @ApiProperty({
    name: 'tech_name',
    required: true,
    maximum: 50,
    type: 'string',
  })
  tech_name: string;

  @IsNotEmpty()
  @MaxLength(100)
  @IsString()
  @ApiProperty({
    name: 'alt_en',
    required: true,
    maximum: 100,
    type: 'string',
  })
  alt_en: string;

  @IsNotEmpty()
  @MaxLength(100)
  @IsString()
  @ApiProperty({
    name: 'alt_pt',
    required: true,
    maximum: 100,
    type: 'string',
  })
  alt_pt: string;
}

export class SkillResponse {
  @ApiProperty({
    name: 'id',
    format: 'uuid',
  })
  id: string;

  @ApiProperty({
    name: 'tech_name',
    type: 'string',
  })
  tech_name: string;

  @ApiProperty({
    name: 'alt_en',
    type: 'string',
  })
  alt_en: string;

  @ApiProperty({
    name: 'alt_pt',
    type: 'string',
  })
  alt_pt: string;
}
