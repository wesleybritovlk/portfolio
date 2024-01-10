import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
    name: 'alt_en',
    required: true,
    maximum: 100,
    type: 'string',
  })
  alt_pt: string;
}

export class AboutResponse {
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
    type: 'array',
  })
  skills: SkillResponse[];

  constructor(desc_en: string, desc_pt: string, skills: SkillResponse[]) {
    this.desc_en = desc_en;
    this.desc_pt = desc_pt;
    this.skills = skills;
  }
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

  constructor(id: string, tech_name: string, alt_en: string, alt_pt: string) {
    this.id = id;
    this.tech_name = tech_name;
    this.alt_en = alt_en;
    this.alt_pt = alt_pt;
  }
}
