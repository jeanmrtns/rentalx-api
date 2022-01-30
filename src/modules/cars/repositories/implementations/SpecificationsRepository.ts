import { Specification } from '../../models/Specification';
import {
  ISpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  specifications: Specification[];

  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if (!SpecificationsRepository.INSTANCE) {
      this.INSTANCE = new SpecificationsRepository();
    }

    return this.INSTANCE;
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }

  create({ name, description }: ISpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }
}

export { SpecificationsRepository };
