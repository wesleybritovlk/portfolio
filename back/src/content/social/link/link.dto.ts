import { IsNotEmpty, IsString, IsUrl, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LinkRequest {
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  @ApiProperty({
    name: 'name',
    required: true,
    minimum: 3,
    type: 'string',
  })
  name: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    name: 'url',
    required: true,
    example: 'https://www.example.com/username',
    format: 'uri',
  })
  url: string;
}

export class LinkResponse {
  @ApiProperty({
    name: 'id',
    format: 'uuid',
  })
  id: string;

  @ApiProperty({
    name: 'name',
    type: 'string',
  })
  name: string;

  @ApiProperty({
    name: 'url',
    example: 'https://www.example.com/username',
    format: 'uri',
  })
  url: string;
}
