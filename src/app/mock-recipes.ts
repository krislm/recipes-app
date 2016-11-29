import { Recipe } from '../models/recipe';

export const RECIPES: Recipe[] = [
    {
        id: '1',
        name: 'Havregrynscookies',
        image: 'assets/havregrynscookies.jpg',
        time: 'ca. 25 min.',
        short_description: 'Opskriften giver cirka 15 cookies (plus/minus et par stykker alt afhængigt at størrelsen)',
        long_description: [
            {part: 'Pisk sukker og smør sammen, evt. med elpisker eller i røremaskine, og pisk herefter ægget i. Bland havregryn, hvedemel og bagepulver. Vendt det i dejen. Hak chokoladen og vend den i dejen'},
            {part: 'Tag en spiseskefuld cookiedej med top og form til en kugle på størrelse med en bordtennisbold. Læg på en bageplade med bagepapir og tryk flad. Sørg for at havregrynskagerne ikke står alt for tæt'},
            {part: 'Bag i en 180 grader varm ovn (160 grader ved varmluft) i cirka 15 minutter, indtil er gyldne i kanterne. Lad dem køle af på en rist. Bemærk, at de først bliver helt sprøde, når de er kølet af'}
        ],
        ingredients: [
            {name: 'sukker',
            amount: 75,
            measurement: 'g'},
            {name: 'blødt smør',
            amount: 100,
            measurement: 'g'},
            {name: 'æg',
            amount: 1,
            measurement: null},
            {name: 'havregryn',
            amount: 100,
            measurement: 'g'},
            {name: 'hvedemel',
            amount: 50,
            measurement: 'g'},
            {name: 'bagepulver',
            amount: 1,
            measurement: 'tsk.'},
            {name: 'lys eller mørk chokolade',
            amount: 100,
            measurement: 'g'}
        ]
    }
];
