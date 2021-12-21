import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
   res.render('pages/page',{
       banner:{
           title:'Todos os animais',
           bckg: 'allanimals.jpg'
       }
   });
};
export const dogs = (req: Request, res: Response) => {
   res.render('pages/page',{
       banner:{
           title:'Cachorros',
           bckg: 'banner_dog.jpg'
       }
   });
};
export const cats = (req: Request, res: Response) => {
   res.render('pages/page',{
       banner:{
           title:'Gatos',
           bckg: 'banner_cat.jpg'
       }
   });
};
export const fishes = (req: Request, res: Response) => {
   res.render('pages/page',{
       banner:{
           title:'Peixes',
           bckg: 'banner_fish.jpg'
       }
   });
};
