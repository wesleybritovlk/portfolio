import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { LinkResponse } from './link/link.dto';

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

export class SocialResponse {
  @ApiProperty({
    name: 'id',
    format: 'uuid',
  })
  id: string;

  @ApiProperty({
    name: 'links',
    format: 'array',
  })
  links: LinkResponse[];

  @ApiProperty({
    name: 'email',
    format: 'email',
  })
  email: string;
}
