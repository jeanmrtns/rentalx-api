import { Specification } from '../models/Specification';

interface ISpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  list(): Specification[];
  findByName(name: string): Specification;
  create({ name, description }: ISpecificationDTO): void;
}

export { ISpecificationsRepository, ISpecificationDTO };
