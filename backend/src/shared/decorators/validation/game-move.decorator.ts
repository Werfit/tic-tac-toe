import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export type GameMove = 'x' | 'o' | null;

export function IsGameMove(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isGameMove',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return value === null || value === 'x' || value === 'o';
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be either "x", "o", or null`;
        },
      },
    });
  };
}
