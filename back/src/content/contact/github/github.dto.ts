import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GithubRequest {
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

export class GithubResponse {
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

  @ApiProperty({
    name: 'token',
    format: 'uuid',
  })
  token: string;
}
