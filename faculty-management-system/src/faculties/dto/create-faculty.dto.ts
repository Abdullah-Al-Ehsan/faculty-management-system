import {IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFacultyDto {

    @IsString()
    @IsNotEmpty()
    id: string;
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    expertise: string;
    @IsNumber()
    noOfPublication: number;
}