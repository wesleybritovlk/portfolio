import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';

export class HomeImageRequest {
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    name: 'url',
    required: true,
    example: 'https://www.example.com/image.jpg',
    format: 'uri',
  })
  url: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(150)
  @ApiProperty({
    name: 'alt_en',
    required: true,
    minimum: 3,
    maximum: 150,
    type: 'string',
  })
  alt_en: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(150)
  @ApiProperty({
    name: 'alt_pt',
    required: true,
    minimum: 3,
    maximum: 150,
    type: 'string',
  })
  alt_pt: string;
}

export class HomeImageResponse {
  @ApiProperty({
    name: 'url',
    example: 'https://www.example.com/image.jpg',
    format: 'uri',
  })
  url: string;
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

  constructor(url: string, alt_en: string, alt_pt: string) {
    this.url = url;
    this.alt_en = alt_en;
    this.alt_pt = alt_pt;
  }
}
