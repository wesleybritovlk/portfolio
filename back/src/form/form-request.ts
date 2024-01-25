import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class FormRequest {

  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  @ApiProperty({
    name: 'first_name',
    required: true,
    minimum: 3,
    type: 'string',
  })
  first_name: string;

  @MaxLength(50)
  @IsString()
  @ApiProperty({
    name: 'last_name',
    maximum: 50,
    type: 'string',
  })
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    name: 'email',
    required: true,
    format: 'email',
  })
  email: string;

  @MaxLength(500)
  @IsString()
  @ApiProperty({
    name: 'message',
    maximum: 500,
    type: 'string',
  })
  message: string;

}
