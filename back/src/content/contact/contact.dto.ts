import { IsNotEmpty, IsPhoneNumber, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GitHubRequest, GitHubResponse } from './github/github.dto';

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
    type: GitHubRequest,
  })
  github: GitHubRequest;
}

export class ContactResponse {
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
    type: GitHubResponse,
  })
  github: GitHubResponse;

  constructor(mobile: string,
              wa_en: string,
              wa_pt: string,
              resume_url: string,
              github: GitHubResponse) {
    this.mobile = mobile;
    this.wa_en = wa_en;
    this.wa_pt = wa_pt;
    this.resume_url = resume_url;
    this.github = github;
  }
}

