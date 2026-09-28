// W klamrach {} wstawiamy wartości zmiennych lub wyniki wyrażeń JavaScript.
// Kwotę obliczamy przed return, a w JSX wyświetlamy wynik i formatujemy go przez toFixed(2).
// muted, line i accent to nasze kolory z @theme w src/styles.css, nie z dokumentacji Tailwinda.
export const OrderCard = () => {
  const order = {
    id: "ZAM-1042",
    customer: "Anna Nowak",
    email: "anna.nowak@sklep.pl",
    unitPricePln: 3499.75,
    itemCount: 2,
  };
  const { id, customer, email, unitPricePln, itemCount } = order;
  const totalPln = unitPricePln * itemCount;

  return (
    <article className="rounded-lg border border-line p-4">
      <h3 className="text-lg font-semibold">{id}</h3>
      <p>Klient: {customer}</p>
      <p>
        <a
          href={`mailto:${email}`}
          className="text-accent underline"
        >
          {email}
        </a>
      </p>
      <p className="text-muted">
        Sztuk: {itemCount}, cena: {unitPricePln.toFixed(2)} zł <br />
        Razem: {totalPln.toFixed(2)} zł
      </p>
    </article>
  );
};
