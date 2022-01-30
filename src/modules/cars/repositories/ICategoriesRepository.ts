import { Category } from '../models/Category';

interface ICategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  list(): Category[];
  findByName(name: string): Category;
  create({ name, description }: ICategoryDTO): void;
}

export { ICategoriesRepository, ICategoryDTO };
