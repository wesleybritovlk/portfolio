import { IsNotEmpty, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProjectRequest {
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
    name: 'repo_url',
    required: true,
    example: 'https://www.github.com/username/reponame',
    format: 'uri',
  })
  repo_url: string;

  @ApiProperty({
    name: 'web_url',
    required: false,
    example: 'https://www.example.com',
    format: 'uri',
  })
  web_url: string;

  @ApiProperty({
    name: 'api_url',
    required: false,
    example: 'https://www.example.com/api',
    format: 'uri',
  })
  api_url: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    name: 'image_url',
    required: true,
    example: 'https://www.example.com/image.png',
    format: 'uri',
  })
  image_url: string;

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

export class ProjectResponse {
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
    name: 'repo_url',
    example: 'https://www.github.com/username/reponame',
    format: 'uri',
  })
  repo_url: string;

  @ApiProperty({
    name: 'web_url',
    example: 'https://www.example.com',
    format: 'uri',
  })
  web_url: string;

  @ApiProperty({
    name: 'api_url',
    example: 'https://www.example.com/api',
    format: 'uri',
  })
  api_url: string;

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
