////////
//// Zadanie – cena promocyjna, rozwiązanie
////////
//
// Uruchamiamy: node src/00-typescript/tasks/promo-price.solution.ts
// Treść zadania: tasks/promo-price.start.ts
{
  // Typy piszemy tylko przy parametrach i przy wyniku funkcji. Stałej i listy nie opisujemy,
  // bo TypeScript sam widzi, że to liczby.
  const PROMO_DISCOUNT_PERCENT = 25;
  const pricesPln = [200, 80, 1200];

  const getPromoPricePln = (pricePln: number, discountPercent: number): number =>
    pricePln - (pricePln * discountPercent) / 100;

  for (const pricePln of pricesPln) {
    const promoPricePln = getPromoPricePln(pricePln, PROMO_DISCOUNT_PERCENT);

    console.log(`${pricePln} zł, po rabacie ${promoPricePln} zł`);
  }
  // 200 zł, po rabacie 150 zł
  // 80 zł, po rabacie 60 zł
  // 1200 zł, po rabacie 900 zł
}
