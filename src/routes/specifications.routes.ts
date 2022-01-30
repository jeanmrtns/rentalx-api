import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.get('/', (req, res) => {
  const specifications = specificationsRepository.list();

  return res.json(specifications);
});

specificationsRoutes.post('/', (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.execute({ name, description });

  return res.status(201).send();
});

export { specificationsRoutes };