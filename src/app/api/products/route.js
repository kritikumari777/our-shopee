export async function GET(request) {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Upstream error' }), { status: 502 });
    }
    const products = await res.json();

    const simple = products.map(p => ({
      id: p.id,
      title: p.title,
      price: p.price,
      image: p.image,
      category: p.category,
      description: p.description
    }));

    return new Response(JSON.stringify(simple), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
