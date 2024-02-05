import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SkillResponse } from './skill/skill.dto';

export class AboutRequest {
  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  @ApiProperty({
    name: 'desc_en',
    required: true,
    maximum: 500,
    type: 'string',
  })
  desc_en: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  @ApiProperty({
    name: 'desc_pt',
    required: true,
    maximum: 500,
    type: 'string',
  })
  desc_pt: string;
}

export class AboutResponse {
  @ApiProperty({
    name: 'id',
    format: 'uuid',
  })
  id: string;

  @ApiProperty({
    name: 'desc_en',
    type: 'string',
  })
  desc_en: string;

  @ApiProperty({
    name: 'desc_pt',
    type: 'string',
  })
  desc_pt: string;

  @ApiProperty({
    name: 'skills',
    format: 'array',
  })
  skills: SkillResponse[];
}
