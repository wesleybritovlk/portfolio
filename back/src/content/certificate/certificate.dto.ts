import { IsNotEmpty, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CertificateRequest {
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  @ApiProperty({
    name: 'title',
    required: true,
    minimum: 3,
    type: 'string',
  })
  title: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    name: 'web_url',
    required: true,
    example: 'https://www.example.com',
    format: 'uri',
  })
  web_url: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    name: 'image_url',
    required: true,
    example: 'https://www.example.com/image.png',
    format: 'uri',
  })
  image_url: string;

  @IsString()
  @MaxLength(500)
  @ApiProperty({
    name: 'desc_en',
    required: false,
    maximum: 500,
    type: 'string',
  })
  desc_en: string;

  @IsString()
  @MaxLength(500)
  @ApiProperty({
    name: 'desc_pt',
    required: false,
    maximum: 500,
    type: 'string',
  })
  desc_pt: string;
}

export class CertificateResponse {
  @ApiProperty({
    name: 'id',
    format: 'uuid',
  })
  id: string;

  @ApiProperty({
    name: 'title',
    type: 'string',
  })
  title: string;

  @ApiProperty({
    name: 'web_url',
    example: 'https://www.example.com',
    format: 'uri',
  })
  web_url: string;

  @ApiProperty({
    name: 'image_url',
    example: 'https://www.example.com/image.png',
    format: 'uri',
  })
  image_url: string;

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
}
