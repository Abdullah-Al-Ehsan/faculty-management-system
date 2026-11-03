import { Injectable } from '@nestjs/common';
import { Faculty } from './entities/faculty.entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';


@Injectable()
export class FacultiesService {

    constructor(@InjectRepository(Faculty) private repo: Repository<Faculty>,) {}

    create(dto: CreateFacultyDto) {
        const faculty = this.repo.create({
            id: dto.id,
            name: dto.name,
            expertise: dto.expertise,
            noOfPublication: dto.noOfPublication,
        });
        return this.repo.save(faculty);

    }
}
