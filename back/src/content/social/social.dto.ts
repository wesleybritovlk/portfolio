import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUrl, MinLength } from 'class-validator';

export class SocialRequest {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    name: 'email',
    required: true,
    format: 'email',
  })
  email: string;
}

export class SocialLinkRequest {
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  @ApiProperty({
    name: 'name',
    required: true,
    minimum: 3,
    type: String,
  })
  name: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    name: 'url',
    required: true,
    format: 'uri',
  })
  url: string;
}

export class SocialResponse {
  @ApiProperty({
    name: 'email',
    format: 'email',
  })
  email: string;

  @ApiProperty({
    name: 'links',
    format: 'array',
  })
  links: SocialLinkResponse[];

  constructor(links: SocialLinkResponse[], email: string) {
    this.links = links;
    this.email = email;
  }
}

export class SocialLinkResponse {
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
    format: 'uri',
  })
  url: string;

  constructor(id: string, name: string, url: string) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
}
