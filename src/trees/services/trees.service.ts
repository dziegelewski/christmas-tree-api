import { Injectable } from '@nestjs/common';

import { CreateTreeService } from './create-tree.service';
import { TreeModel } from '../models/TreeModel';


@Injectable()
export class TreesService {

  constructor(
    private createTreeService: CreateTreeService
  ) {}

  private products: TreeModel[] = this.createTreeService.generateProducts(30);

  getAll(): TreeModel[] {
    return this.products;
  }

  getNumberOfProducts(): number {
    return this.getAll().length;
  }

  getAllFromPage(page: number, offset: number = 10): TreeModel[] {
    const firstItemFromPage = (page - 1) * offset;
    const lastItemFromPage = firstItemFromPage + offset;
    return this.getAll().slice(firstItemFromPage, lastItemFromPage);
  } 

  findOneById(id: number): TreeModel {
    return this.getAll().find((tree: TreeModel) => tree.id === id);
  }
}
