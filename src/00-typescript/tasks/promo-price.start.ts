////////
//// Zadanie – cena promocyjna
////////
//
// Uruchamiamy: node src/00-typescript/tasks/promo-price.start.ts
// Rozwiązanie dostaniecie po zajęciach.
{
  // Sklep daje 25% rabatu na wszystko. Policz ceny po rabacie.
  //
  // 1. Napisz funkcję getPromoPricePln(pricePln, discountPercent), która zwraca cenę po rabacie:
  //      pricePln - (pricePln * discountPercent) / 100
  //    Wpisz typy obu parametrów i typ zwracany.
  //
  // 2. Dla każdej ceny z listy pricesPln wypisz cenę przed rabatem i po rabacie.
  //
  // Program wypisuje:
  //   200 zł, po rabacie 150 zł
  //   80 zł, po rabacie 60 zł
  //   1200 zł, po rabacie 900 zł

  const PROMO_DISCOUNT_PERCENT = 25;
  const pricesPln = [200, 80, 1200];

  // TODO: Tu napisz getPromoPricePln i wypisz ceny. Tę linię potem usuń.
  console.log(pricesPln, PROMO_DISCOUNT_PERCENT); // [ 200, 80, 1200 ] 25
}
