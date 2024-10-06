import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, registerDecorator, ValidationOptions } from 'class-validator';
import { UserService } from '../user.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUserExistsConstraint implements ValidatorConstraintInterface {
    constructor(private userService: UserService) {}

    async validate(email: string, args: ValidationArguments) {
        const user = await this.userService.findExistUserByEmail(email);
        return !user;
    }

    defaultMessage(args: ValidationArguments) {
        return 'Email found, please use another email.';
    }
}