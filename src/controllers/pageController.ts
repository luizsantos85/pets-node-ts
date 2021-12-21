import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
   res.render('pages/page', {
      menu: createMenuObject('all'),
      banner: {
         title: 'Todos os animais',
         bckg: 'allanimals.jpg',
      },
   });
};
export const dogs = (req: Request, res: Response) => {
   res.render('pages/page', {
      menu: createMenuObject('dog'),
      banner: {
         title: 'Cachorros',
         bckg: 'banner_dog.jpg',
      },
   });
};
export const cats = (req: Request, res: Response) => {
   res.render('pages/page', {
      menu: createMenuObject('cat'),
      banner: {
         title: 'Gatos',
         bckg: 'banner_cat.jpg',
      },
   });
};
export const fishes = (req: Request, res: Response) => {
   res.render('pages/page', {
      menu: createMenuObject('fish'),
      banner: {
         title: 'Peixes',
         bckg: 'banner_fish.jpg',
      },
   });
};
