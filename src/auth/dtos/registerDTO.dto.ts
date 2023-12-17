import { IsEmail, IsString, Length } from 'class-validator';
import { Match } from 'src/utils/match.decorator';

export class RegisterDTO {
  @IsEmail()
  email: string;

  @Length(5, 40)
  @IsString()
  password: string;

  @Length(5, 40)
  @IsString()
  @Match('password')
  passwordRepeat: string;
}
