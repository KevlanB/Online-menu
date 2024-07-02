import { category, item, waAPI } from "./main.js";

waAPI.countryCode = 55; // COUNTRY CODE
waAPI.number = false; // PHONE NUMBER
item.currency = "pt-br"; // LOCALE CURRENCY

category.add("Entradas", "lanches");
item.add(
  "Burrata Artesanal com Pesto de Rúcula e Tomates Cítricos",
  "Sugestão de Harmonização: Alamos Chardonnay, La Posta Blanco.",
  67.0,
  "burrata.jpg",
  "lanches"
);
item.add(
  "Steak Tartare de Mignon com Ovo de Codorna Frito e Batatas Rústica",
  "Sugestão de Harmonização: Prime Roche Sangiovese ou Le Pétit Perriere Pinot Noir",
  53.0,
  "steak.jpg",
  "lanches"
);
item.add(
  "Queijo Coalho Tostado com Melado e Uva Verde",
  "Sugestão de Harmonização: Freixenet pinot grigio, Lapostolle Sauvignon blanc ou Allo alvarinho",
  37.0,
  "queijo.jpg",
  "lanches"
);
item.add(
  "Couvert",
  "Pães, manteiga com limão e mel, azeite com flor de sal, cebola caramelizada e queijo.",
  35.0,
  "couvert.jpg",
  "lanches"
);
item.add(
  "Salada Oriental",
  "Mix de folhas, fatias de manga, pimenta dedo de moça em rodelas, gergelim, cebola roxa , molho oriental da casa e queijo coalho tostado em cubos .",
  58.0,
  "salada.jpg",
  "lanches"
);
item.add(
  "Burrata com massa folhada, molho de tomate, presunto cru e tomates confitados",
  "Sugestão de Harmonização: Freixenet pinot grigio, Lapostolle Sauvignon blanc ou Allo alvarinho",
  83.0,
  "burrataPresunto.jpg",
  "lanches"
);

category.add("Pratos Principais", "lanches2");
item.add(
  "Lombo de Cordeiro, Purê de batatas, com dois Queijos, Cogumelos e Molho de Jabuticaba",
  "Sugestão de Harmonização: Woodbridge Cabernet, Amancaya Cabernet/ Malbec ou Chateau Bernadotte",
  178.0,
  "lombo.jpg",
  "lanches2"
);
item.add(
  "Magret de Pato ao Vinho do Porto, Purê de Mandioquinha, Mini Cebola Caramelizada no Capim Santo",
  "Sugestão de Harmonização: Clarendelle Haut Brion , Bosio Barolo",
  185.0,
  "pato.jpg",
  "lanches2"
);
item.add(
  "Stinco de Cordeiro com nhoque de batata na manteiga e salvia nobre, tagliatelle fresco de espinafre",
  "Sugestão de Harmonização: Animal Cabernet, San Pedro 1865 Cabernet Sauvignon, Chateaux Bernadotte",
  153.0,
  "stinco.jpg",
  "lanches2"
);
item.add(
  "Bife de Ancho Angus, com risoto de parmesão e farofa crocante",
  "Sugestão de Harmonização: Animal Cabernet, San Pedro 1865 Cabernet Sauvignon, Chateaux Bernadotte",
  185.0,
  "bife.jpg",
  "lanches2"
);
item.add(
  "Steak Tartare com batatas rústicas e salada.",
  " ",
  105.0,
  "tartar.jpg",
  "lanches2"
);
item.add(
  "Costela Bovina com Purê de Mandioca, Pesto de Agrião e Queijo Coalho",
  " ",
  119.0,
  "stinco.jpg",
  "lanches2"
);
