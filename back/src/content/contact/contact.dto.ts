import { IsNotEmpty, IsPhoneNumber, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GithubRequest, GithubResponse } from './github/github.dto';

export class ContactRequest {
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  @ApiProperty({
    name: 'mobile',
    required: true,
    minimum: 11,
    maximum: 13,
    type: 'string',
    example: '5500988888888',
    format: 'phone',
  })
  mobile: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    name: 'wa_en',
    required: true,
    type: 'string',
  })
  wa_en: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    name: 'wa_pt',
    required: true,
    type: 'string',
  })
  wa_pt: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    name: 'resume_url',
    required: true,
    example: 'https://www.example.com/resume.pdf',
    format: 'uri',
  })
  resume_url: string;

  @IsNotEmpty()
  @ApiProperty({
    name: 'github',
    required: true,
    type: GithubRequest,
  })
  github: GithubRequest;
}

export class ContactResponse {
  @ApiProperty({
    name: 'id',
    format: 'uuid',
  })
  id: string;

  @ApiProperty({
    name: 'mobile',
    example: '5500988888888',
    format: 'phone',
  })
  mobile: string;

  @ApiProperty({
    name: 'wa_en',
    example: 'https://wa.me/send/?phone=5500988888888&text=',
    format: 'uri',
  })
  wa_en: string;

  @ApiProperty({
    name: 'wa_pt',
    example: 'https://wa.me/send/?phone=5500988888888&text=',
    format: 'uri',
  })
  wa_pt: string;

  @ApiProperty({
    name: 'resume_url',
    example: 'https://www.example.com/resume.pdf',
    format: 'uri',
  })
  resume_url: string;

  @ApiProperty({
    name: 'github',
    type: GithubResponse,
  })
  github: GithubResponse;
}

