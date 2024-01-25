import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GitHubRequest {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    name: 'username',
    required: true,
    type: 'string',
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    name: 'repo_name',
    required: true,
    type: 'string',
  })
  repo_name: string;
}

export class GitHubResponse {
  @ApiProperty({
    name: 'username',
    type: 'string',
  })
  username: string;

  @ApiProperty({
    name: 'repo_name',
    type: 'string',
  })
  repo_name: string;

  @ApiProperty({
    name: 'url',
    example: 'https://github.com/username/repo_name',
    format: 'uri',
  })
  url: string;

  constructor(username: string,
              repo_name: string,
              url: string) {
    this.username = username;
    this.repo_name = repo_name;
    this.url = url;
  }
}
