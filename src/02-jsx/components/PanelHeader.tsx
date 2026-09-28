// Fragment <> </> pozwala zwrócić kilka elementów razem.
// Sam fragment nie dodaje żadnego elementu do HTML, w przeciwieństwie do <div>.
export const PanelHeader = () => (
  <>
    <h1 className="text-2xl font-bold">Panel zamówień</h1>
    <p className="mb-4 text-muted">Zamówienia z ostatnich siedmiu dni</p>
  </>
);
